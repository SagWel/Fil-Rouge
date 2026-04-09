SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données : `d10h_!`
--
CREATE DATABASE IF NOT EXISTS `d10h_!` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `d10h_!`;

--
-- Structure de la table `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deezer_link` varchar(500) DEFAULT NULL,
  `cover` varchar(500) NOT NULL,
  `cover_small` varchar(500) DEFAULT NULL,
  `cover_medium` varchar(500) DEFAULT NULL,
  `cover_big` varchar(500) DEFAULT NULL,
  `cover_xl` varchar(500) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_album_artist` (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `artists`
--

CREATE TABLE IF NOT EXISTS `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `deezer_link` varchar(500) DEFAULT NULL,
  `picture` varchar(500) NOT NULL,
  `picture_small` varchar(500) DEFAULT NULL,
  `picture_medium` varchar(500) DEFAULT NULL,
  `picture_big` varchar(500) DEFAULT NULL,
  `picture_xl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `picture` varchar(500) NOT NULL,
  `picture_small` varchar(500) DEFAULT NULL,
  `picture_medium` varchar(500) DEFAULT NULL,
  `picture_big` varchar(500) DEFAULT NULL,
  `picture_xl` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `instruments`
--

CREATE TABLE IF NOT EXISTS `instruments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `imgSrc` varchar(500) NOT NULL,
  `linkToSearch` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `partitions`
--

CREATE TABLE IF NOT EXISTS `partitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bpm` int(11) NOT NULL,
  `difficulty` tinyint(4) NOT NULL,
  `time_signature` varchar(10) NOT NULL,
  `clef` varchar(20) NOT NULL,
  `clef_signature` varchar(10) DEFAULT NULL,
  `measures` longtext NOT NULL,
  `partition_preview` varchar(500) DEFAULT NULL,
  `song_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_part_song` (`song_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `partition_instruments`
--

CREATE TABLE IF NOT EXISTS `partition_instruments` (
  `partition_id` int(11) NOT NULL,
  `instrument_id` int(11) NOT NULL,
  `is_current` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`partition_id`,`instrument_id`),
  KEY `fk_link_instrument` (`instrument_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Structure de la table `partition_views`
--

CREATE TABLE IF NOT EXISTS `partition_views` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partition_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `viewed_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_views_partition` (`partition_id`),
  KEY `fk_views_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Structure de la table `scorbraries`
--

CREATE TABLE IF NOT EXISTS `scorbraries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_scorbrary_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Structure de la table `scorbrary_items`
--

CREATE TABLE IF NOT EXISTS `scorbrary_items` (
  `scorbrary_id` int(11) NOT NULL,
  `partition_id` int(11) NOT NULL,
  `added_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`scorbrary_id`,`partition_id`),
  KEY `fk_item_partition` (`partition_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Structure de la table `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `deezer_link` varchar(500) DEFAULT NULL,
  `audio_preview` varchar(500) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_part_album` (`album_id`),
  KEY `fk_part_artist` (`artist_id`),
  KEY `fk_part_genre` (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `external_id` varchar(255) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `deezer_id` (`external_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Structure de la table `user_history`
--

CREATE TABLE IF NOT EXISTS `user_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `partition_id` int(11) NOT NULL,
  `played_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_history_user` (`user_id`),
  KEY `fk_history_partition` (`partition_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Structure de la table `user_instruments`
--

CREATE TABLE IF NOT EXISTS `user_instruments` (
  `user_id` int(11) NOT NULL,
  `instrument_id` int(11) NOT NULL,
  `level` int(11) DEFAULT 1,
  PRIMARY KEY (`user_id`,`instrument_id`),
  KEY `fk_ui_inst` (`instrument_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Structure de la table `user_profiles`
--

CREATE TABLE IF NOT EXISTS `user_profiles` (
  `user_id` int(11) NOT NULL,
  `avatar_url` varchar(500) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` enum('M','F','NB','Private') DEFAULT 'Private',
  `visibility` enum('public','private') NOT NULL DEFAULT 'public',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contraintes pour la table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `fk_album_artist` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `partitions`
--
ALTER TABLE `partitions`
  ADD CONSTRAINT `fk_part_song` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`);

--
-- Contraintes pour la table `partition_instruments`
--
ALTER TABLE `partition_instruments`
  ADD CONSTRAINT `fk_link_instrument` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_link_partition` FOREIGN KEY (`partition_id`) REFERENCES `partitions` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `partition_views`
--
ALTER TABLE `partition_views`
  ADD CONSTRAINT `fk_views_partition` FOREIGN KEY (`partition_id`) REFERENCES `partitions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_views_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Contraintes pour la table `scorbraries`
--
ALTER TABLE `scorbraries`
  ADD CONSTRAINT `fk_scorbrary_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `scorbrary_items`
--
ALTER TABLE `scorbrary_items`
  ADD CONSTRAINT `fk_item_partition` FOREIGN KEY (`partition_id`) REFERENCES `partitions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_item_scorbrary` FOREIGN KEY (`scorbrary_id`) REFERENCES `scorbraries` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `fk_part_album` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`),
  ADD CONSTRAINT `fk_part_artist` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  ADD CONSTRAINT `fk_part_genre` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`);

--
-- Contraintes pour la table `user_history`
--
ALTER TABLE `user_history`
  ADD CONSTRAINT `fk_history_partition` FOREIGN KEY (`partition_id`) REFERENCES `partitions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_history_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_instruments`
--
ALTER TABLE `user_instruments`
  ADD CONSTRAINT `fk_ui_inst` FOREIGN KEY (`instrument_id`) REFERENCES `instruments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_ui_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD CONSTRAINT `fk_profile_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;