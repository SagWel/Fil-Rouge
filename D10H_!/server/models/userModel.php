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
        'SELECT * FROM user_profiles WHERE user_id = ?'
    );

    $sql->execute([$userId]);

    return $sql->fetch(PDO::FETCH_ASSOC);
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

function editProfil($pdo, $userId, $username = null, $gender = null, $avatar = null, $bio = null, $birthday = null, $visibility = null)
{

    try {
        $pdo->beginTransaction();

        $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
        $stmt->execute([$userId]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        $sql1 = $pdo->prepare('UPDATE users SET username = ? WHERE id = ?');
        $sql1->execute([$username ?? $user['username'], $user['id']]);

        $sql2 = $pdo->prepare(
            'UPDATE user_profiles
            SET avatar_url = ?,
                bio = ?,
                birthday = ?,
                age = ?,
                gender = ?,
                visibility = ?
            WHERE user_id = ?'
        );

        $age = $birthday->dif(new DateTime())->y;

        $sql2->execute([
            $avatar ?? $user['avatar_url'],
            $bio ?? $user['bio'],
            $birthday ?? $user['birthday'],
            $age,
            $gender ?? $user['$gender'],
            $visibility ?? $user['visibility'],
            $user['id']
        ]);

        $pdo->commit();
    } catch (PDOException $e) {
        $pdo->rollBack();
        print "Error!: " . $e->getMessage() . "</br>";
    }
}
