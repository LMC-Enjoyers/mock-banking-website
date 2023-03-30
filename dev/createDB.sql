-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dbBank
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbBank
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbBank` DEFAULT CHARACTER SET utf8 ;
USE `dbBank` ;

-- -----------------------------------------------------
-- Table `dbBank`.`tblBranch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblBranch` (
  `branch_id` VARCHAR(36) NOT NULL,
  `branch_name` VARCHAR(64) NOT NULL,
  `branch_sort_code` VARCHAR(8) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`branch_id`),
  UNIQUE INDEX `branch_id_UNIQUE` (`branch_id` ASC) VISIBLE,
  UNIQUE INDEX `branch_sort_code_UNIQUE` (`branch_sort_code` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbBank`.`tblUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblUser` (
  `user_id` VARCHAR(36) NOT NULL,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  `first_name` VARCHAR(64) NOT NULL,
  `middle_name` VARCHAR(64) NULL,
  `last_name` VARCHAR(64) NOT NULL,
  `email_address` VARCHAR(128) NOT NULL,
  `mobile_number` VARCHAR(16) NOT NULL,
  `dob` DATE NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_ID_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbBank`.`tblAccountType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblAccountType` (
  `account_type_id` VARCHAR(36) NOT NULL,
  `type_name` VARCHAR(64) NOT NULL,
  `interest_rate` DECIMAL(17,10) NULL DEFAULT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`account_type_id`),
  UNIQUE INDEX `account_type_id_UNIQUE` (`account_type_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbBank`.`tblAccount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblAccount` (
  `account_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `account_no` VARCHAR(8) CHARACTER SET 'binary' NOT NULL,
  `sort_code` VARCHAR(6) NOT NULL,
  `account_type_id` VARCHAR(36) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`account_id`, `user_id`),
  UNIQUE INDEX `accountNo_UNIQUE` (`account_id` ASC) VISIBLE,
  UNIQUE INDEX `account_no_UNIQUE` (`account_no` ASC) VISIBLE,
  INDEX `fk_tblAccount_tblBranch_idx` (`sort_code` ASC) VISIBLE,
  INDEX `fk_tblAccount_tblUser1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_tblAccount_AccountType1_idx` (`account_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_tblAccount_tblBranch`
    FOREIGN KEY (`sort_code`)
    REFERENCES `dbBank`.`tblBranch` (`branch_sort_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblAccount_tblUser1`
    FOREIGN KEY (`user_id`)
    REFERENCES `dbBank`.`tblUser` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblAccount_AccountType1`
    FOREIGN KEY (`account_type_id`)
    REFERENCES `dbBank`.`tblAccountType` (`account_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `dbBank`.`tblTransactionCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblTransactionCategory` (
  `transaction_category_id` VARCHAR(36) NOT NULL,
  `category_name` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_category_id`),
  UNIQUE INDEX `transaction_category_id_UNIQUE` (`transaction_category_id` ASC) VISIBLE,
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbBank`.`tblTransaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbBank`.`tblTransaction` (
  `transaction_id` VARCHAR(36) NOT NULL,
  `account_id` VARCHAR(36) NOT NULL,
  `transaction_content` VARCHAR(64) NOT NULL,
  `transaction_value` DECIMAL(17,4) NOT NULL,
  `transaction_category_id` VARCHAR(36) NOT NULL,
  `transaction_time` TIMESTAMP NOT NULL,
  PRIMARY KEY (`transaction_id`),
  INDEX `fk_tblTransaction_tblAccount1_idx` (`account_id` ASC) VISIBLE,
  INDEX `fk_tblTransaction_tblTransactionCategory1_idx` (`transaction_category_id` ASC) VISIBLE,
  UNIQUE INDEX `transaction_id_UNIQUE` (`transaction_id` ASC) VISIBLE,
  CONSTRAINT `fk_tblTransaction_tblAccount1`
    FOREIGN KEY (`account_id`)
    REFERENCES `dbBank`.`tblAccount` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tblTransaction_tblTransactionCategory1`
    FOREIGN KEY (`transaction_category_id`)
    REFERENCES `dbBank`.`tblTransactionCategory` (`transaction_category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
