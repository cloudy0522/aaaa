CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `user_name` VARCHAR(20) NOT NULL,
    `profile_image` VARCHAR(100) NOT NULL,
    `profile_message` VARCHAR(100) NOT NULL,
    `is_unregister` TINYINT(1) NOT NULL DEFAULT 0,
    `registed_date` DATETIME NOT NULL, 
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `owner` INT NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `maximum` INT NOT NULL,
    `is_unregister` TINYINT(1) NOT NULL DEFAULT 0,
    `created_date` DATETIME NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGNKEY (`owner`)
    REFERENCES `users`(`id`) ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `contents` TEXT NOT NULL,
    `sender` INT NOT NULL,
    `channel` INT NOT NULL,
    `date` DATETIME NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGNKEY (`sender`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGNKEY (`channels`)
    REFERENCES `channels`(`id`) ON DELETE CASCADE,
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `followee` INT NOT NULL,
    `date` DATETIME NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGNKEY (`follower`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGNKEY (`followee`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocker` INT NOT NULL,
    `blocked` INT NOT NULL,
    `date` DATETIME NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGNKEY (`blocker`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGNKEY (`blocked`)
    REFERENCES `users`(`id`) ON DELETE CASCADE,
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
