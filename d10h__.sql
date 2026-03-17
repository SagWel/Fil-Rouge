-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 11 mars 2026 à 13:56
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `d10h_!`
--
CREATE DATABASE IF NOT EXISTS `d10h_!` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `d10h_!`;

-- --------------------------------------------------------

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
-- Déchargement des données de la table `albums`
--

INSERT INTO `albums` (`id`, `title`, `deezer_link`, `cover`, `cover_small`, `cover_medium`, `cover_big`, `cover_xl`, `artist_id`) VALUES
(12047936, 'Rubber Soul', 'https://www.deezer.com/fr/album/12047936', 'https://api.deezer.com/album/12047936/image', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/cover/da80520440d5d29876b9df3e375793b5/1000x1000-000000-80-0-0.jpg', 1);

-- --------------------------------------------------------

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
-- Déchargement des données de la table `artists`
--

INSERT INTO `artists` (`id`, `name`, `deezer_link`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(1, 'The Beatles', 'https://www.deezer.com/artist/1', 'https://api.deezer.com/artist/1/image', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/1000x1000-000000-80-0-0.jpg');

-- --------------------------------------------------------

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
-- Déchargement des données de la table `genres`
--

INSERT INTO `genres` (`id`, `name`, `picture`, `picture_small`, `picture_medium`, `picture_big`, `picture_xl`) VALUES
(132, 'Pop', 'https://api.deezer.com/genre/132/image', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/56x56-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/500x500-000000-80-0-0.jpg', 'https://cdn-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/1000x1000-000000-80-0-0.jpg');

-- --------------------------------------------------------

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

-- --------------------------------------------------------

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
-- Déchargement des données de la table `partitions`
--

INSERT INTO `partitions` (`id`, `bpm`, `difficulty`, `time_signature`, `clef`, `clef_signature`, `measures`, `partition_preview`, `song_id`, `created_at`) VALUES
(1, 108, 3, '4/4', 'treble', 'Ab', '[{\"id\":1,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":2,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":3,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":4,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":5,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"Mi\"},{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"chelle,\"}]},{\"id\":6,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"lyrics\":\"ma\"},{\"keys\":[\"a/4\"],\"duration\":\"h\",\"lyrics\":\"belle,\"}]},{\"id\":7,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"these\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"are\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"words\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"that\"}]},{\"id\":8,\"notes\":[{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"go\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"to\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"accidental\":\"n\",\"lyrics\":\"geth\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"er\"}]},{\"id\":9,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"lyrics\":\"well,\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"my\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"Mi\"},{\"keys\":[\"g/4\"],\"duration\":\"8\",\"beam\":\"end\",\"ties\":[\"start\"],\"lyrics\":\"chelle.\"}]},{\"id\":10,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"w\",\"ties\":[\"end\"],\"lyrics\":\"_\"}]},{\"id\":11,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"Mi\"},{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"chelle,\"}]},{\"id\":12,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"lyrics\":\"ma\"},{\"keys\":[\"a/4\"],\"duration\":\"h\",\"lyrics\":\"belle,\"}]},{\"id\":13,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"sont\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"des\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"mots\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"qui\"}]},{\"id\":14,\"notes\":[{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"vont\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"trés\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"accidental\":\"n\",\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"en\"}]},{\"id\":15,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"lyrics\":\"semble\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"trés\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"en\"}]},{\"id\":16,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"dots\":1,\"lyrics\":\"semble.\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\"}]},{\"id\":17,\"notes\":[{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"love\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"you,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"love\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"you,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"}]},{\"id\":18,\"notes\":[{\"keys\":[\"g/5\"],\"duration\":\"q\",\"lyrics\":\"love\"},{\"keys\":[\"f/5\"],\"duration\":\"h\",\"dots\":1,\"lyrics\":\"you,\"}]},{\"id\":19,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"that\'s\"},{\"keys\":[\"d/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"all\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"I\"},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"dots\":1,\"lyrics\":\"want\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"lyrics\":\"to\"}]},{\"id\":20,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"w\",\"lyrics\":\"say,\"}]},{\"id\":21,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"Un\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"til\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"I\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"lyrics\":\"find\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"a\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"beam\":\"end\",\"ties\":[\"start\",\"start\"],\"lyrics\":\"way,\"}]},{\"id\":22,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"ties\":[\"end\"],\"lyrics\":\"_\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"dots\":1,\"ties\":[\"start\"],\"lyrics\":\"_\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"beam\":\"start\",\"ties\":[\"end\",\"end\"],\"lyrics\":\"_\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"I\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"will\"}]},{\"id\":23,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"say\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"the\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"on\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"ly\"}]},{\"id\":24,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"words\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"know\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"that\"}]},{\"id\":25,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"you\'ll\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"un\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"der\"}]},{\"id\":26,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"w\",\"lyrics\":\"stand.\"}]},{\"id\":27,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"Mi\"},{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"chelle,\"}]},{\"id\":28,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"lyrics\":\"ma\"},{\"keys\":[\"a/4\"],\"duration\":\"h\",\"lyrics\":\"belle,\"}]},{\"id\":29,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"sont\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"des\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"mots\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"qui\"}]},{\"id\":30,\"notes\":[{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"vont\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"trés\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"accidental\":\"n\",\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"en\"}]},{\"id\":31,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"lyrics\":\"semble\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"trés\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"en\"}]},{\"id\":32,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"dots\":1,\"lyrics\":\"semble.\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\"}]},{\"id\":33,\"notes\":[{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"need\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"to,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"need\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"to,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"}]},{\"id\":34,\"notes\":[{\"keys\":[\"g/5\"],\"duration\":\"q\",\"lyrics\":\"need\"},{\"keys\":[\"f/5\"],\"duration\":\"h\",\"dots\":1,\"lyrics\":\"to,\"}]},{\"id\":35,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\"},{\"keys\":[\"d/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"need\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"to\"},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"dots\":1,\"lyrics\":\"make\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"lyrics\":\"you\"}]},{\"id\":36,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"w\",\"lyrics\":\"see,\"}]},{\"id\":37,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"oh,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"what\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"lyrics\":\"you\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"mean\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"beam\":\"end\",\"ties\":[\"start\"],\"lyrics\":\"to\"}]},{\"id\":38,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"ties\":[\"end\"],\"lyrics\":\"me.\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"dots\":1,\"ties\":[\"start\"],\"lyrics\":\"_\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"ties\":[\"end\"]},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"Un\"}]},{\"id\":39,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"til\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"do,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\'m\"}]},{\"id\":40,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"hop\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"ing\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"you\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"will\"}]},{\"id\":41,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"know\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"what\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"I\"}]},{\"id\":42,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"w\",\"lyrics\":\"mean.\"}]},{\"id\":43,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\"},{\"keys\":[\"e/5\"],\"duration\":\"8\",\"lyrics\":\"love\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"dots\":1,\"ties\":[\"start\",\"start\"],\"lyrics\":\"you.\"}]},{\"id\":44,\"notes\":[{\"keys\":[\"f/5\"],\"duration\":\"w\",\"ties\":[\"end\"]}]},{\"id\":45,\"notes\":[{\"keys\":[\"f/5\"],\"duration\":\"w\",\"ties\":[\"end\"]}]},{\"id\":46,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":47,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":48,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"h\",\"isRest\":true},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\"}]},{\"id\":49,\"notes\":[{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"want\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"you,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"want\"},{\"keys\":[\"e/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"you,\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"I\"}]},{\"id\":50,\"notes\":[{\"keys\":[\"g/5\"],\"duration\":\"q\",\"dots\":1,\"ties\":[\"start\"],\"lyrics\":\"want\"},{\"keys\":[\"a/5\"],\"duration\":\"16\",\"beam\":\"start\",\"lyrics\":\"_\"},{\"keys\":[\"g/5\"],\"duration\":\"16\",\"beam\":\"end\",\"ties\":[\"end\"]},{\"keys\":[\"f/5\"],\"duration\":\"h\",\"lyrics\":\"you,\"}]},{\"id\":51,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\"},{\"keys\":[\"d/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"think\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"you\"},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"lyrics\":\"know\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"by\"}]},{\"id\":52,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"w\",\"lyrics\":\"now,\"}]},{\"id\":53,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"I\'ll\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"get\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"to\"},{\"keys\":[\"f/5\"],\"duration\":\"q\",\"lyrics\":\"you\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"some\"}]},{\"id\":54,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"how.\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"beam\":\"end\",\"ties\":[\"start\"],\"lyrics\":\"_\"},{\"keys\":[\"a/4\"],\"duration\":\"h\",\"ties\":[\"end\"]},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"Un\"}]},{\"id\":55,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"til\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"do\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"I\'m\"}]},{\"id\":56,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"tell\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"ing\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"dots\":1,\"lyrics\":\"you,\"},{\"keys\":[\"c/5\"],\"duration\":\"8\",\"lyrics\":\"so\"}]},{\"id\":57,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"you\'ll\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"un\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"der\"}]},{\"id\":58,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"w\",\"lyrics\":\"stand.\"}]},{\"id\":59,\"notes\":[{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"Mi\"},{\"keys\":[\"c/5\"],\"duration\":\"h\",\"lyrics\":\"chelle,\"}]},{\"id\":60,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"q\",\"isRest\":true},{\"keys\":[\"d/5\"],\"duration\":\"q\",\"lyrics\":\"ma\"},{\"keys\":[\"a/4\"],\"duration\":\"h\",\"lyrics\":\"belle,\"}]},{\"id\":61,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"sont\"},{\"keys\":[\"c/5\"],\"duration\":\"q\",\"lyrics\":\"des\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"mots\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"qui\"}]},{\"id\":62,\"notes\":[{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"vont\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"trés\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"accidental\":\"n\",\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"en\"}]},{\"id\":63,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"lyrics\":\"semble\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"start\"},\"lyrics\":\"trés\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"mid\"},\"lyrics\":\"bien\"},{\"keys\":[\"a/4\"],\"duration\":\"q\",\"tuplet\":{\"type\":\"end\",\"num\":3,\"occupied\":2},\"lyrics\":\"en\"}]},{\"id\":64,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"h\",\"lyrics\":\"semble.\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"dots\":1,\"isRest\":true},{\"keys\":[\"f/4\"],\"duration\":\"16\",\"lyrics\":\"And\"},{\"keys\":[\"f/4\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"I\"},{\"keys\":[\"g/4\"],\"duration\":\"8\",\"beam\":\"end\",\"lyrics\":\"will\"}]},{\"id\":65,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"q\",\"lyrics\":\"say\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"the\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"on\"},{\"keys\":[\"g/4\"],\"duration\":\"8\",\"beam\":\"start\",\"lyrics\":\"ly\"},{\"keys\":[\"a/4\"],\"duration\":\"8\",\"beam\":\"end\",\"ties\":[\"start\"],\"lyrics\":\"words.\"}]},{\"id\":66,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"q\",\"ties\":[\"end\"],\"lyrics\":\"_\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"I\"},{\"keys\":[\"b/4\"],\"duration\":\"q\",\"lyrics\":\"know\"},{\"keys\":[\"b/4\"],\"duration\":\"8\",\"isRest\":true},{\"keys\":[\"g/4\"],\"duration\":\"8\",\"lyrics\":\"that\"}]},{\"id\":67,\"notes\":[{\"keys\":[\"a/4\"],\"duration\":\"h\",\"lyrics\":\"you\'ll\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"un\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"der\"}]},{\"id\":68,\"notes\":[{\"keys\":[\"e/4\"],\"duration\":\"h\",\"accidental\":\"n\",\"lyrics\":\"stand,\"},{\"keys\":[\"f/4\"],\"duration\":\"q\",\"lyrics\":\"my\"},{\"keys\":[\"g/4\"],\"duration\":\"q\",\"lyrics\":\"Mi\"}]},{\"id\":69,\"notes\":[{\"keys\":[\"g/4\"],\"duration\":\"w\",\"lyrics\":\"chelle\"}]},{\"id\":70,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":71,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":72,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":73,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":74,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":75,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":76,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":77,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":78,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]},{\"id\":79,\"notes\":[{\"keys\":[\"b/4\"],\"duration\":\"w\",\"isRest\":true}]}]', '/img/Partition.jpeg', 1, '2026-02-18 14:55:32');

-- --------------------------------------------------------

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
-- Déchargement des données de la table `partition_instruments`
--

INSERT INTO `partition_instruments` (`partition_id`, `instrument_id`, `is_current`) VALUES
(1, 1, 0),
(1, 2, 1),
(1, 3, 0),
(1, 5, 0);

-- --------------------------------------------------------

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

-- --------------------------------------------------------

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

-- --------------------------------------------------------

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

-- --------------------------------------------------------

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
-- Déchargement des données de la table `songs`
--

INSERT INTO `songs` (`id`, `title`, `deezer_link`, `audio_preview`, `duration`, `artist_id`, `album_id`, `genre_id`, `created_at`) VALUES
(1, 'Michelle', NULL, NULL, 161, 1, 12047936, 132, '2026-02-18 13:09:06');

-- --------------------------------------------------------

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
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `external_id`, `username`, `email`, `password`, `created_at`) VALUES
(3, NULL, 'SagWel', 'nicolasbesnault@free.fr', '$2y$10$aYGJvMwoObpjF9fXhvdaO.UF6iF2oYu8dXEyyPJIWCE5SyT.rA4k2', '2026-03-01 14:38:48'),
(9, NULL, 'Agrablu', 'agrablu@gmail.com', '$2y$10$qOFO6z3.KeSKhDwk7EvwYuCtkGHwWWI8Ij5iXk1IpPeob2Iw5TiJK', '2026-03-02 10:04:44');

-- --------------------------------------------------------

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

-- --------------------------------------------------------

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
-- Déchargement des données de la table `user_instruments`
--

INSERT INTO `user_instruments` (`user_id`, `instrument_id`, `level`) VALUES
(3, 1, 3);

-- --------------------------------------------------------

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
-- Déchargement des données de la table `user_profiles`
--

INSERT INTO `user_profiles` (`user_id`, `avatar_url`, `bio`, `age`, `birthday`, `gender`, `visibility`) VALUES
(3, NULL, NULL, 33, NULL, 'M', 'private'),
(9, NULL, NULL, NULL, NULL, 'Private', 'public');

--
-- Contraintes pour les tables déchargées
--

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
