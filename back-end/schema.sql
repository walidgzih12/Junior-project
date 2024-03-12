-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `data` ;

-- -----------------------------------------------------
-- Table `data`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`product` (
  `idproduct` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(500) NOT NULL,
  `productname` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `delivery` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `data`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(155) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `Tel` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `product_idproduct` INT NOT NULL,
  PRIMARY KEY (`iduser`, `product_idproduct`),
  INDEX `fk_user_product_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_user_product`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `data`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
