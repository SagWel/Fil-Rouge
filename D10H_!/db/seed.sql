SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données : `d10h_!`
--

--
-- Déchargement des données de la table `albums`
--

INSERT INTO `albums` (`id`, `title`, `deezer_link`, `cover`, `cover_small`, `cover_medium`, `cover_big`, `cover_xl`, `artist_id`) VALUES
(12047936, 'rubber soul', 'https://www.deezer.com/fr/album/12047936', 'https://api.deezer.com/album/12047936/image', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/1000x1000-000000-80-0-0.jpg', 1);

--
-- Déchargement des données de la table `artists`
--

INSERT INTO `artists` (`id`, `name`, `deezer_link`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(1, 'the beatles', 'https://www.deezer.com/artist/1', 'https://api.deezer.com/artist/1/image', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/1000x1000-000000-80-0-0.jpg');

--
-- Déchargement des données de la table `genders`
--

INSERT INTO `genders` (`id`, `name`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(132, 'pop', 'https://api.deezer.com/genre/132/image', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/1000x1000-000000-80-0-0.jpg');

--
-- Déchargement des données de la table `instruments`
--

INSERT INTO `instruments` (`id`, `name`) VALUES
(1, 'guitare',),
(2, 'chant'),
(3, 'basse'),
(4, 'piano'),
(5, 'batterie'),
(6, 'ukulele'),
(7, 'saxophone');

--
-- Déchargement des données de la table `scores` sans la colonne `measures`
--

INSERT INTO `scores` (`id`, `name`, `bpm`, `difficulty`, `time_signature`, `clef`, `clef_signature`, `measures`, `score_preview`, `song_id`, `is_explicit`, `created_at`) VALUES
(1, 'Michelle-Beatles-Chant', 108, 3, '4/4', 'treble', 'Ab', 'uploads/previews/partition_1.png', 1, 0, '2026-02-18 14:55:32');

--
-- Déchargement des données de la table `score_instruments`
--

INSERT INTO `score_instruments` (`score_id`, `instrument_id`, `track_name`, `is_current`) VALUES
(1, 1, 'Ryhtmic', 0),
(1, 1, 'Solo', 0),
(1, 2, 'Choirs', 0),
(1, 2, 'Main', 1),
(1, 3, 'Main', 0),
(1, 5, 'Main', 0);

--
-- Déchargement des données de la table `songs`
--

INSERT INTO `songs` (`id`, `title`, `deezer_link`, `audio_preview`, `duration`, `artist_id`, `album_id`, `gender_id`, `is_explicit`, `created_at`) VALUES
(1, 'michelle', 'https://www.deezer.com/track/116348264', 'https://cdnt-preview.dzcdn.net/api/1/1/8/2/a/0/82aed4ff815e92629fbd193688e8de2b.mp3?hdnea=exp=1773750270~acl=/api/1/1/8/2/a/0/82aed4ff815e92629fbd193688e8de2b.mp3*~data=user_id=0,application_id=42~hmac=d913a5425e10a4f1d8d3af5d4158326ec900535eb2d15d7e0d8f3e328ef6e6d5', 161, 1, 12047936, 132, 0, '2026-05-04 15:33:02');

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `external_id`, `username`, `email`, `password`, `created_at`) VALUES
(3, NULL, 'SagWel', 'nicolasbesnault@free.fr', '$2y$10$aYGJvMwoObpjF9fXhvdaO.UF6iF2oYu8dXEyyPJIWCE5SyT.rA4k2', '2026-03-01 14:38:48'),
(10, NULL, 'RubieMl', 'rubie_ml@yahoo.fr', '$2y$10$vyGYA7NsOTOCEw8iDTaukOljWuaLf5V.apFTQr9XBIUPfvCGCk.mm', '2026-03-13 14:20:22'),
(11, NULL, 'CamilleBordeaux', 'camille.bordeaux@laposte.net', '$2y$10$B8PT7dl43NAParxSvW48Eu2ubsHT9i5CA7ddYHk7sNW3SlPZlkgFK', '2026-03-14 14:11:44'),
(13, NULL, 'JulieVox', 'juliedupont18@gmail.com', '$2y$10$F0XD4DIQVNJYxyfuzf3kZ.T0Cg173XyEfB/5njxFHZ.j7dqBnFPT.', '2026-04-01 11:30:35'),
(35, NULL, 'Test', 'test@test.com', '$2y$10$17IuUuCUzIRoZOD5OvdNvuAwMxTFoveNYd3/jP9xFxOzZznanN5Xu', '2026-04-30 08:15:21'),
(50, NULL, 'Antoine', 'antoine@antoine.com', '$2y$10$fDHByHlPMfkeQGHxyYIB7unUqfEgAQz79I3LTjo6eb8qvlJ.2EtZO', '2026-05-04 15:08:22'),
(56, NULL, 'Jesuisunbg', 'jesuisunbg@jesaisplustropquoi.com', '$2y$10$.5XpDUrB663beIihvvWBvubMFz71gnqW9GFfbzbqi/rVGjJ/NLFpO', '2026-05-10 16:18:21'),
(58, NULL, 'Natacha', 'natacha@natacha.com', '$2y$10$oFmNQDp7/UqyBmyr3ALkiOlNb/XWFlKlEvBhdvNYk/JljX3mQbAg2', '2026-05-11 09:22:11'),
(61, NULL, 'Test120526', 'test120526@test.com', '$2y$10$sd819vqQbA.cW7Cu5vJ1.eYNFZ9ULSGwoFQZliCNiJBXH4tiYaAwS', '2026-05-12 15:53:16');

--
-- Déchargement des données de la table `user_history`
--

INSERT INTO `user_history` (`id`, `user_id`, `score_id`, `played_at`) VALUES
(18, 13, 1, '2026-04-29 12:19:54'),
(22, 56, 1, '2026-05-10 16:20:33'),
(23, 58, 1, '2026-05-11 09:43:52'),
(26, 61, 1, '2026-05-12 16:03:57'),
(27, 35, 1, '2026-05-13 11:45:46');

--
-- Déchargement des données de la table `user_instruments`
--

INSERT INTO `user_instruments` (`user_id`, `instrument_id`, `lvl`) VALUES
(3, 1, 3),
(10, 4, 1),
(11, 1, 1),
(11, 2, 1),
(13, 2, 3),
(35, 2, 1),
(50, 3, 1),
(56, 6, 5),
(56, 7, 1),
(58, 2, 3),
(58, 4, 3),
(61, 2, 2);

--
-- Déchargement des données de la table `user_profiles`
--

INSERT INTO `user_profiles` (`user_id`, `avatar_url`, `age`, `birthday`, `gender`, `language`, `filter_explicit`, `is_child_account`) VALUES
(3, NULL, 33, '1992-08-18', 'M', 'fr', 'not_filtered', 0),
(10, NULL, 0, NULL, 'Private', 'fr', 'not_filtered', 0),
(11, NULL, 0, NULL, 'Private', 'fr', 'not_filtered', 0),
(13, NULL, 31, '1995-04-17', 'F', 'fr', 'not_filtered', 0),
(35, 'avatar_35_69f38d7b2e7d8.jpg', 32, '1994-05-12', 'M', 'fr', 'not_filtered', 0),
(50, NULL, 15, NULL, 'M', 'fr', 'hidden', 1),
(56, NULL, 76, NULL, 'NB', 'fr', '', 0),
(58, NULL, 25, '2001-03-02', 'F', 'fr', '', 0),
(61, NULL, 25, NULL, 'M', 'fr', '', 0);
COMMIT;