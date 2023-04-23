CREATE TABLE IF NOT EXISTS `sy_notify` (
  `identifier` varchar(65) DEFAULT NULL,
  `position` longtext DEFAULT NULL,
  UNIQUE KEY `identifier` (`identifier`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;