-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 17 mars 2023 à 11:49
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Kasa`
--

-- --------------------------------------------------------

--
-- Structure de la table `about`
--

CREATE TABLE `about` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `about`
--

INSERT INTO `about` (`id`, `title`, `text`) VALUES
(1, 'Fiabilité', 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'),
(2, 'Respect', 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'),
(3, 'Service', 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\"hésitez pas à nous contacter si vous avez la moindre question.'),
(4, 'Securité', 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\"hôte qu\"au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.');

-- --------------------------------------------------------

--
-- Structure de la table `assoc_logements_equipment`
--

CREATE TABLE `assoc_logements_equipment` (
  `logements_id` varchar(255) NOT NULL,
  `equipments_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `assoc_logements_equipment`
--

INSERT INTO `assoc_logements_equipment` (`logements_id`, `equipments_id`) VALUES
('6ff132c6', 1),
('7cbb378e', 1),
('c67ab8a7', 1),
('cb02d69b', 1),
('1e180563', 2),
('1e181317', 2),
('2139a317', 2),
('6ff132c6', 2),
('7af00cd6', 2),
('ba55a0cc', 2),
('c67ab8a7', 2),
('cb02d69b', 2),
('c67ab8a7', 3),
('1e180563', 4),
('1e181317', 4),
('6ff132c6', 4),
('7cbb378e', 4),
('af6d2d48', 4),
('b4c67936', 4),
('ba55a0cc', 4),
('c67ab8a7', 4),
('cb02d69b', 4),
('0979876d', 6),
('1e181317', 6),
('b4c67936', 6),
('b9123946', 6),
('ba55a0cc', 6),
('bc6f7112', 6),
('cb2f9222', 6),
('f72a452f', 6),
('0979876d', 7),
('2cf259e1', 7),
('46d188c5', 7),
('5323c29b', 7),
('b4c67936', 7),
('b9123946', 7),
('bc6f7112', 7),
('cb2f9222', 7),
('d60ca600', 7),
('b9123946', 8),
('bc6f7112', 8),
('cb2f9222', 8),
('0979876d', 9),
('1e180563', 9),
('1e181317', 9),
('2139a317', 9),
('2cf259e1', 9),
('46d188c5', 9),
('5323c29b', 9),
('6ff132c6', 9),
('7af00cd6', 9),
('7cbb378e', 9),
('b4c67936', 9),
('b9123946', 9),
('ba55a0cc', 9),
('bc6f7112', 9),
('c67ab8a7', 9),
('cb02d69b', 9),
('cb2f9222', 9),
('d60ca600', 9),
('46d188c5', 10),
('7cbb378e', 10),
('af6d2d48', 10),
('b9123946', 10),
('ba55a0cc', 10),
('1e180563', 11),
('1e181317', 11),
('46d188c5', 11),
('5323c29b', 11),
('7af00cd6', 11),
('7cbb378e', 11),
('b9123946', 11),
('ba55a0cc', 11),
('0979876d', 23),
('7af00cd6', 23),
('f72a452f', 23),
('7af00cd6', 24),
('cb2f9222', 24),
('0979876d', 27),
('7cbb378e', 29),
('af6d2d48', 29),
('b4c67936', 29),
('ba55a0cc', 29),
('b4c67936', 30),
('bc6f7112', 33),
('bc6f7112', 34),
('d60ca600', 34),
('d60ca600', 35),
('2cf259e1', 39),
('1e180563', 40),
('1e181317', 40),
('2cf259e1', 40),
('6ff132c6', 40),
('ba55a0cc', 40),
('5323c29b', 43),
('5323c29b', 44),
('2139a317', 45),
('5323c29b', 45),
('7cbb378e', 45),
('af6d2d48', 45),
('ba55a0cc', 45),
('7cbb378e', 50),
('ba55a0cc', 50),
('1e181317', 53),
('1e180563', 54),
('cb02d69b', 55),
('d60ca600', 56),
('d60ca600', 57),
('af6d2d48', 58);

-- --------------------------------------------------------

--
-- Structure de la table `assoc_tags_logements`
--

CREATE TABLE `assoc_tags_logements` (
  `logements_id` varchar(255) NOT NULL,
  `tags_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `assoc_tags_logements`
--

INSERT INTO `assoc_tags_logements` (`logements_id`, `tags_id`) VALUES
('0979876d', 21),
('0979876d', 22),
('1e180563', 92),
('1e180563', 93),
('1e181317', 32),
('1e181317', 69),
('1e181317', 70),
('2139a317', 92),
('2139a317', 94),
('2cf259e1', 1),
('2cf259e1', 18),
('2cf259e1', 19),
('46d188c5', 1),
('46d188c5', 14),
('46d188c5', 15),
('5323c29b', 1),
('5323c29b', 7),
('5323c29b', 18),
('5323c29b', 40),
('5323c29b', 58),
('6ff132c6', 1),
('6ff132c6', 2),
('6ff132c6', 3),
('7af00cd6', 17),
('7af00cd6', 18),
('7af00cd6', 19),
('7af00cd6', 20),
('7cbb378e', 60),
('7cbb378e', 61),
('7cbb378e', 65),
('af6d2d48', 60),
('af6d2d48', 61),
('af6d2d48', 62),
('b4c67936', 26),
('b4c67936', 27),
('b4c67936', 28),
('b9123946', 6),
('b9123946', 7),
('b9123946', 8),
('ba55a0cc', 61),
('ba55a0cc', 67),
('ba55a0cc', 68),
('bc6f7112', 32),
('bc6f7112', 33),
('bc6f7112', 34),
('bc6f7112', 35),
('c67ab8a7', 4),
('c67ab8a7', 5),
('cb02d69b', 18),
('cb02d69b', 98),
('cb02d69b', 100),
('cb2f9222', 40),
('cb2f9222', 41),
('cb2f9222', 101),
('d60ca600', 42),
('d60ca600', 43),
('d60ca600', 44),
('d60ca600', 45),
('f72a452f', 5),
('f72a452f', 24),
('f72a452f', 25);

-- --------------------------------------------------------

--
-- Structure de la table `equipments`
--

CREATE TABLE `equipments` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipments`
--

INSERT INTO `equipments` (`id`, `name`) VALUES
(1, 'Équipements de base'),
(2, 'Micro-Ondes'),
(3, 'Douche italienne'),
(4, 'Frigo'),
(6, 'Parking'),
(7, 'Sèche Cheveux'),
(8, 'Machine à laver'),
(9, 'Wi-fi'),
(10, 'Cuisine équipée'),
(11, 'Télévision'),
(23, 'Chambre Séparée'),
(24, 'Climatisation'),
(27, 'Frigo Américain'),
(29, 'Salle de bains'),
(30, 'Bureau'),
(33, 'Lit King Size'),
(34, 'Ascenseur'),
(35, 'Vue Parc'),
(39, 'Clic-clac'),
(40, 'Four'),
(43, 'Rangements'),
(44, 'Lit'),
(45, 'Bouilloire'),
(50, 'Cintres'),
(53, 'Baie vitrée'),
(54, 'Hotte'),
(55, 'Baignoire'),
(56, 'Chauffage'),
(57, 'Sèche linge'),
(58, 'Toilettes sèches');

-- --------------------------------------------------------

--
-- Structure de la table `host`
--

CREATE TABLE `host` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `host`
--

INSERT INTO `host` (`id`, `name`, `picture`, `email`, `password`) VALUES
(1, 'Nathalie Jean', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg', '', ''),
(2, 'Della Case', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg', '', ''),
(3, 'Franck Maher', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg', '', ''),
(4, 'Line Rolland', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg', '', ''),
(5, 'Hugo Perrier', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg', '', ''),
(6, 'Sébastien Fournier', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg', '', ''),
(7, 'Adrien Chiran', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg', '', ''),
(8, 'Victor Moran', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg', '', ''),
(9, 'Sarah Devit', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg', '', ''),
(10, 'Karen Guillet', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg', '', ''),
(11, 'Julie Donatella', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg', '', ''),
(12, 'Michel Romy', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg', '', ''),
(13, 'Amelie Grenier', NULL, 'amelie.grenier@hotmail.fr', '$2b$10$cR3b4lwkGQXAMdwt6ftFYuS5deV3BbWxLI5fLzzIZqtxZLKSKGkqq');

-- --------------------------------------------------------

--
-- Structure de la table `logements`
--

CREATE TABLE `logements` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `host_id` int(10) UNSIGNED NOT NULL,
  `rating` int(1) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `logements`
--

INSERT INTO `logements` (`id`, `title`, `cover`, `description`, `host_id`, `rating`, `location`) VALUES
('0979876d', 'Appartement de Standing - 10e', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg', 'Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d\'enfant.', 3, 5, 'Ile de France - Paris 10e'),
('1e180563', 'Charmant apt aux portes de Paris', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg', 'Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.', 11, 4, 'Ile de France - Levallois'),
('1e181317', 'Loft de Luxe à la Défense', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg', 'Si vous êtes à la recherche de l\'endroit idéal pour poser vos valises entre deux rdvs d\'affaire, ne cherchez plus. Notre loft est l\'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.', 11, 3, 'Ile de France - La Défense'),
('2139a317', 'Cheap - Chambre Paris 20', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg', 'Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.', 5, 2, 'Ile de France - Paris 20e'),
('2cf259e1', 'Charmant Studio Marais', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg', 'Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.', 8, 4, 'Ile de France - Paris 11e'),
('46d188c5', 'Studio de charme - Buttes Chaumont', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg', 'À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.', 3, 3, 'Ile de France - Paris 20e'),
('5323c29b', 'Studio fonctionnel République', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg', 'Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d\'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.', 9, 3, 'Ile de France - Paris 3e'),
('6ff132c6', 'Charmant studio', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg', 'Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.', 12, 4, 'Ile de France - Paris 13e'),
('7af00cd6', 'Nid douillet au coeur du 11ème', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg', 'Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d\'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l\'appartement.', 2, 3, 'Ile de France - Paris 11e'),
('7cbb378e', 'Grande Maison proche banlieue', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg', 'Vous chercher un endroit pour fêter un anniversaire entre amis tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l\'endroit idéal pour se regrouper.', 10, 4, 'Ile de France - Arnouville'),
('af6d2d48', 'Bungalow dans la forêt', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg', 'Quittez Paris pour vous mettre au vert. À seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d\'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement saura vous accueillir dans le confort, tout en vous permettant de vous concentrer sur l\'essentiel. Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.', 9, 5, 'Ile de France - Ecouen'),
('b4c67936', 'Cheap - Studio 18ème', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg', 'Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.', 5, 3, 'Ile de France - Paris 18e'),
('b9123946', 'Magnifique appartement proche Canal Saint Martin', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg', 'Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L\'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.', 2, 4, 'Ile de France - Paris 10e'),
('ba55a0cc', 'Maison T5 - Le Vésinet', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg', 'Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.', 10, 3, 'Ile de France - Arnouville'),
('bc6f7112', 'Superbe appartement proche Tour Eiffel', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg', 'Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !', 6, 5, 'Ile de France - Paris 6e'),
('c67ab8a7', 'Appartement cosy', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg', 'Votre maison loin de chez vous. Que vous veniez de l\'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.', 1, 5, 'Ile de France - Paris 17e'),
('cb02d69b', 'Magnifique appartement Rivoli', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg', 'Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.', 1, 4, 'Ile de France - Paris 13e'),
('cb2f9222', 'Suite familiale', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg', 'Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l\'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l\'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.', 7, 4, 'Ile de France - Paris 14e'),
('d60ca600', 'Appartement moderne sur parc', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg', 'Respirer en plein coeur de Paris ? C\'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !', 7, 3, 'Ile de France - Paris 11e'),
('f72a452f', 'Studio d\'artiste', 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg', 'Venez vous imprégner de la culture parisienne dans cet ancien studio d\'artiste décoré avec goût, au coeur de Montmartre.', 4, 5, 'Ile de France - Paris 18e');

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE `pictures` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `logements_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`id`, `name`, `logements_id`) VALUES
(1, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg', 'c67ab8a7'),
(2, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg', 'c67ab8a7'),
(3, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg', 'c67ab8a7'),
(4, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg', 'c67ab8a7'),
(5, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg', 'c67ab8a7'),
(6, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg', 'b9123946'),
(7, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg', 'b9123946'),
(8, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg', 'b9123946'),
(9, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg', 'b9123946'),
(10, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg', 'b9123946'),
(11, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg', 'b9123946'),
(12, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg', '46d188c5'),
(13, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg', '46d188c5'),
(14, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg', '46d188c5'),
(15, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg', '46d188c5'),
(16, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg', '7af00cd6'),
(17, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg', '7af00cd6'),
(18, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg', '7af00cd6'),
(19, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg', '7af00cd6'),
(20, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg', '0979876d'),
(21, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg', '0979876d'),
(22, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg', '0979876d'),
(23, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg', '0979876d'),
(24, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg', '0979876d'),
(25, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg', '0979876d'),
(26, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg', 'f72a452f'),
(27, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg', 'f72a452f'),
(28, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg', 'f72a452f'),
(29, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg', 'f72a452f'),
(30, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg', 'f72a452f'),
(31, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg', 'b4c67936'),
(32, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg', 'b4c67936'),
(33, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg', 'b4c67936'),
(34, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg', 'b4c67936'),
(35, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg', 'bc6f7112'),
(36, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg', 'bc6f7112'),
(37, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg', 'bc6f7112'),
(38, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg', 'bc6f7112'),
(39, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg', 'bc6f7112'),
(40, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg', 'bc6f7112'),
(47, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg', 'cb2f9222'),
(48, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg', 'cb2f9222'),
(49, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg', 'cb2f9222'),
(50, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg', 'cb2f9222'),
(51, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg', 'cb2f9222'),
(52, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg', 'd60ca600'),
(53, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg', 'd60ca600'),
(54, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg', 'd60ca600'),
(55, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg', 'd60ca600'),
(56, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg', '2cf259e1'),
(57, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg', '2cf259e1'),
(58, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg', '2cf259e1'),
(59, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg', '2cf259e1'),
(60, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg', '5323c29b'),
(61, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-2.jpg', '5323c29b'),
(62, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-4.jpg', '5323c29b'),
(63, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-5.jpg', '5323c29b'),
(64, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg', 'af6d2d48'),
(65, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-2.jpg', 'af6d2d48'),
(66, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-3.jpg', 'af6d2d48'),
(67, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-4.jpg', 'af6d2d48'),
(68, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-5.jpg', 'af6d2d48'),
(69, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg', '7cbb378e'),
(70, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-3.jpg', '7cbb378e'),
(71, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-4.jpg', '7cbb378e'),
(72, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-5.jpg', '7cbb378e'),
(73, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-6.jpg', '7cbb378e'),
(74, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg', 'ba55a0cc'),
(75, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-2.jpg', 'ba55a0cc'),
(76, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-3.jpg', 'ba55a0cc'),
(77, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-4.jpg', 'ba55a0cc'),
(78, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-5.jpg', 'ba55a0cc'),
(79, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg', '1e181317'),
(80, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-2.jpg', '1e181317'),
(81, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-3.jpg', '1e181317'),
(82, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-4.jpg', '1e181317'),
(83, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-5.jpg', '1e181317'),
(84, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg', '1e180563'),
(85, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg', '1e180563'),
(86, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg', '1e180563'),
(87, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg', '1e180563'),
(88, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg', '1e180563'),
(89, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg', '2139a317'),
(90, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg', '6ff132c6'),
(91, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg', '6ff132c6'),
(92, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg', '6ff132c6'),
(93, 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg', 'cb02d69b');

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(1, 'Studio'),
(2, 'Charmant'),
(3, '13e'),
(4, 'Batignolle'),
(5, 'Montmartre'),
(6, 'Canal Saint Martin'),
(7, 'République'),
(8, 'Appartement'),
(14, 'Buttes Chaumont'),
(15, 'Laumière'),
(17, 'Parmentier'),
(18, 'Marais'),
(19, 'Parc'),
(20, 'Night Life'),
(21, 'Goncourt'),
(22, 'Proche commerces'),
(24, 'Culture'),
(25, 'Charme'),
(26, 'Transports'),
(27, 'Cheap'),
(28, '18e'),
(32, 'Luxe'),
(33, 'Tour Eiffel'),
(34, 'T3'),
(35, '6e'),
(40, 'Commerces'),
(41, 'Famille'),
(42, 'Père Lachaise'),
(43, '11e'),
(44, 'Metro 3'),
(45, 'Metro 2'),
(58, 'Proche Métros'),
(60, 'Forêt'),
(61, 'Nature'),
(62, 'Musée d\'Ecouen'),
(65, 'Grande maison'),
(67, 'Groupe'),
(68, 'Maison'),
(69, 'La Défense'),
(70, 'Loft'),
(92, 'Vue Parc'),
(93, 'Apt de Charme'),
(94, 'Métros'),
(98, 'Louvre'),
(100, 'Rivoli'),
(101, 'Montparnasse');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `assoc_logements_equipment`
--
ALTER TABLE `assoc_logements_equipment`
  ADD PRIMARY KEY (`logements_id`,`equipments_id`),
  ADD KEY `equipment_id` (`equipments_id`);

--
-- Index pour la table `assoc_tags_logements`
--
ALTER TABLE `assoc_tags_logements`
  ADD PRIMARY KEY (`tags_id`,`logements_id`),
  ADD KEY `assoc_tags_logements_ibfk_2` (`logements_id`);

--
-- Index pour la table `equipments`
--
ALTER TABLE `equipments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `host`
--
ALTER TABLE `host`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `logements`
--
ALTER TABLE `logements`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `host_id` (`host_id`);

--
-- Index pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `logements_id` (`logements_id`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `equipments`
--
ALTER TABLE `equipments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT pour la table `host`
--
ALTER TABLE `host`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `assoc_logements_equipment`
--
ALTER TABLE `assoc_logements_equipment`
  ADD CONSTRAINT `assoc_logements_equipment_ibfk_1` FOREIGN KEY (`equipments_id`) REFERENCES `equipments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `assoc_logements_equipment_ibfk_2` FOREIGN KEY (`logements_id`) REFERENCES `logements` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `assoc_tags_logements`
--
ALTER TABLE `assoc_tags_logements`
  ADD CONSTRAINT `assoc_tags_logements_ibfk_1` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `assoc_tags_logements_ibfk_2` FOREIGN KEY (`logements_id`) REFERENCES `logements` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `logements`
--
ALTER TABLE `logements`
  ADD CONSTRAINT `logements_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `host` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`logements_id`) REFERENCES `logements` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
