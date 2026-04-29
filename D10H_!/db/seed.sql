SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Déchargement des données de la table `albums`
--

INSERT INTO `albums` (`id`, `title`, `deezer_link`, `cover`, `cover_small`, `cover_medium`, `cover_big`, `cover_xl`, `artist_id`) VALUES
(12047936, 'Rubber Soul', 'https://www.deezer.com/fr/album/12047936', 'https://api.deezer.com/album/12047936/image', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/1000x1000-000000-80-0-0.jpg', 1);

--
-- Déchargement des données de la table `artists`
--

INSERT INTO `artists` (`id`, `name`, `deezer_link`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(1, 'The Beatles', 'https://www.deezer.com/artist/1', 'https://api.deezer.com/artist/1/image', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/1000x1000-000000-80-0-0.jpg');

--
-- Déchargement des données de la table `genres`
--

INSERT INTO `genres` (`id`, `name`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(132, 'Pop', 'https://api.deezer.com/genre/132/image', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/1000x1000-000000-80-0-0.jpg');

--
-- Déchargement des données de la table `instruments`
--

INSERT INTO `instruments` (`id`, `name`, `imgSrc`, `linkToSearch`) VALUES
(1, 'guitare', '../../public/img/Guitare.png', '/partitions/guitare'),
(2, 'chant', '../../public/img/Chant.png', '/partitions/chant'),
(3, 'basse', '../../public/img/Basse.png', '/partitions/basse'),
(4, 'piano', '../../public/img/Piano.png', '/partitions/piano'),
(5, 'batterie', '../../public/img/Batterie.png', '/partitions/batterie'),
(6, 'ukulele', '../../public/img/Ukulele.png', '/partitions/ukulele'),
(7, 'saxophone', './../public/img/Saxo.png', '/partitions/saxophone');

--
-- Déchargement des données de la table `partition_instruments`
--

INSERT INTO `partition_instruments` (`partition_id`, `instrument_id`, `is_current`) VALUES
(1, 1, 0),
(1, 2, 1),
(1, 3, 0),
(1, 5, 0);

--
-- Déchargement des données de la table `songs`
--

INSERT INTO `songs` (`id`, `title`, `deezer_link`, `audio_preview`, `duration`, `artist_id`, `album_id`, `genre_id`, `created_at`) VALUES
(1, 'Michelle', NULL, NULL, 161, 1, 12047936, 132, '2026-02-18 13:09:06');

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `external_id`, `username`, `email`, `password`, `created_at`) VALUES
(3, NULL, 'SagWel', 'nicolasbesnault@free.fr', '$2y$10$aYGJvMwoObpjF9fXhvdaO.UF6iF2oYu8dXEyyPJIWCE5SyT.rA4k2', '2026-03-01 14:38:48'),
(9, NULL, 'Agrablu', 'agrablu@gmail.com', '$2y$10$qOFO6z3.KeSKhDwk7EvwYuCtkGHwWWI8Ij5iXk1IpPeob2Iw5TiJK', '2026-03-02 10:04:44');

--
-- Déchargement des données de la table `user_instruments`
--

INSERT INTO `user_instruments` (`user_id`, `instrument_id`, `level`) VALUES
(3, 1, 3);

--
-- Déchargement des données de la table `user_profiles`
--

INSERT INTO `user_profiles` (`user_id`, `avatar_url`, `age`, `birthday`, `gender`) VALUES
(3, NULL, NULL, 33, NULL, 'M', 'private'),
(9, NULL, NULL, NULL, NULL, 'Private', 'public');
