<?php

function getUserByEmail($pdo, $email)
{
    $sql = $pdo->prepare(
        'SELECT * FROM users WHERE email = ?'
    );

    $sql->execute([$email]);

    return $sql->fetch(PDO::FETCH_ASSOC);
}

function getUserProfil($pdo, $userId)
{
    $sql = $pdo->prepare(
        'SELECT avatar_url, age, birthday, gender, language FROM user_profiles WHERE user_id = ?'
    );

    $sql->execute([$userId]);

    $result = $sql->fetchAll(PDO::FETCH_ASSOC);

    return $result[0];
}

function creatUser($pdo, $email, $passwordHash, $username = null, $age = null, $identity = 'Private')
{
    $explodedEmail = explode('@', $email)[0];
    $parts = preg_split('/[.\-_]/', $explodedEmail);
    $capitalizedParts = array_map('ucfirst', $parts);
    $temporaryUsername = implode('', $capitalizedParts);

    try {
        $pdo->beginTransaction();

        $sql1 = $pdo->prepare(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'
        );

        $sql1->execute([$username ?? $temporaryUsername, $email, $passwordHash]);

        $id = $pdo->lastInsertId();

        $sql2 = $pdo->prepare(
            'INSERT INTO user_profiles (user_id, age, gender) VALUES (?, ?, ?)'
        );

        $sql2->execute([$id, $age, $identity]);

        $pdo->commit();
    } catch (PDOException $e) {
        $pdo->rollBack();
        print "Error!: " . $e->getMessage() . "</br>";
    }
}

function isFirstLogin($pdo, $email)
{
    $sql = $pdo->prepare(
        'SELECT COUNT(ui.instrument_id) as total
         FROM user_instruments ui
         JOIN users u ON ui.user_id = u.id
         WHERE u.email = ?'
    );

    $sql->execute([$email]);
    $result = $sql->fetch(PDO::FETCH_ASSOC);

    return $result['total'] == 0;
}

function updateProfil($pdo, $userId, $username = null, $gender = null, $avatar = null, $birthday = null, ?array $userInstruments = null)
{
    try {
        $pdo->beginTransaction();

        $stmt = $pdo->prepare('SELECT u.*, up.* FROM users u JOIN user_profiles up ON u.id = up.user_id WHERE u.id = ?');
        $stmt->execute([$userId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            throw new Exception("Utilisateur introuvable.");
        }

        $sql1 = $pdo->prepare('UPDATE users SET username = ? WHERE id = ?');
        $sql1->execute([$username ?? $user['username'], $userId]);

        $birthdayObj = $birthday ? new DateTime($birthday) : new DateTime($user['birthday']);
        $age = $birthdayObj->diff(new DateTime())->y;

        $sql2 = $pdo->prepare(
            'UPDATE user_profiles
            SET avatar_url = ?, birthday = ?, age = ?, gender = ?
            WHERE user_id = ?'
        );
        $sql2->execute([
            $avatar ?? $user['avatar_url'],
            $birthday ?? $user['birthday'],
            $age,
            $gender ?? $user['gender'],
            $userId
        ]);

        if ($userInstruments !== null) {
            $deleteInstruments = $pdo->prepare('DELETE FROM user_instruments WHERE user_id = ?');
            $deleteInstruments->execute([$userId]);

            $insertInstrument = $pdo->prepare('INSERT INTO user_instruments (user_id, instrument_id, lvl) VALUES (?, ?, ?)');
            foreach ($userInstruments as $inst) {
                $insertInstrument->execute([
                    $userId,
                    $inst['instrument']['id'],
                    $inst['lvl']
                ]);
            }
        }

        $pdo->commit();
        return true;
    } catch (Exception $e) {
        $pdo->rollBack();
        error_log("Erreur updateProfil: " . $e->getMessage());
        return false;
    }
}
