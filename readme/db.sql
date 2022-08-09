CREATE DATABASE  IF NOT EXISTS `nintendo`;

USE `nintendo`;

CREATE TABLE `nintendo`.`pokemons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `hp` INT NULL DEFAULT 1,
  `attack` INT NULL DEFAULT 0,
  `defense` INT NULL DEFAULT 0,
  `special_attack` INT NULL DEFAULT 0,
  `special_defense` INT NULL DEFAULT 0,
  `speed` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`));
  
INSERT INTO pokemons (id, name, hp, attack, defense, special_attack, special_defense, speed) VALUES (DEFAULT, 'puff', 88, 99, 45, 49, 36, 40);

CREATE TABLE `nintendo`.`results` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `winner` INT NULL,
  `loser` INT NULL,
  `hp` INT NULL,
  `attack` INT NULL,
  `defense` INT NULL,
  `special_attack` INT NULL,
  `specail_defense` INT NULL,
  `speed` INT NULL,
  PRIMARY KEY (`id`));
