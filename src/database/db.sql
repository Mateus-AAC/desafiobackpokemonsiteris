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

CREATE TABLE `nintendo`.`results` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_winner` INT NULL,
  `id_loser` INT NULL,
  `winner_name` VARCHAR(45) NULL,
  `loser_name` VARCHAR(45) NULL,
  `hp` INT NULL,
  `attack` INT NULL,
  `defense` INT NULL,
  `special_attack` INT NULL,
  `special_defense` INT NULL,
  `speed` INT NULL,
  PRIMARY KEY (`id`));