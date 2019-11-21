/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100130
 Source Host           : localhost:3306
 Source Schema         : russia_2018

 Target Server Type    : MySQL
 Target Server Version : 100130
 File Encoding         : 65001

 Date: 12/04/2018 23:49:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app_groups
-- ----------------------------
DROP TABLE IF EXISTS `app_groups`;
CREATE TABLE `app_groups` (
  `serial_id` varchar(8) DEFAULT NULL,
  `A1` int(11) DEFAULT NULL,
  `A2` int(11) DEFAULT NULL,
  `B1` int(11) DEFAULT NULL,
  `B2` int(11) DEFAULT NULL,
  `C1` int(11) DEFAULT NULL,
  `C2` int(11) DEFAULT NULL,
  `D1` int(11) DEFAULT NULL,
  `D2` int(11) DEFAULT NULL,
  `E1` int(11) DEFAULT NULL,
  `E2` int(11) DEFAULT NULL,
  `F1` int(11) DEFAULT NULL,
  `F2` int(11) DEFAULT NULL,
  `G1` int(11) DEFAULT NULL,
  `G2` int(11) DEFAULT NULL,
  `H1` int(11) DEFAULT NULL,
  `H2` int(11) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for app_leaderboard
-- ----------------------------
DROP TABLE IF EXISTS `app_leaderboard`;
CREATE TABLE `app_leaderboard` (
  `prediction_id` int(11) NOT NULL,
  `serial_id` varchar(8) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_points` int(11) DEFAULT NULL,
  PRIMARY KEY (`prediction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for app_matches
-- ----------------------------
DROP TABLE IF EXISTS `app_matches`;
CREATE TABLE `app_matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `id_local_team` int(11) DEFAULT NULL,
  `gols_local_team` int(11) DEFAULT NULL,
  `gols_visitor_team` int(11) DEFAULT NULL,
  `id_visitor_team` int(11) DEFAULT NULL,
  `id_stadium` int(11) DEFAULT NULL,
  `id_group` varchar(11) DEFAULT NULL,
  `timestamp` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_matches
-- ----------------------------
BEGIN;
INSERT INTO `app_matches` VALUES (1, '2018-06-14 18:00:00', 24, 3, 8, 25, 1, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (2, '2018-06-15 17:00:00', 9, NULL, NULL, 32, 4, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (3, '2018-06-15 18:00:00', 18, NULL, NULL, 14, 11, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (4, '2018-06-15 21:00:00', 23, NULL, NULL, 28, 5, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (5, '2018-06-16 13:00:00', 11, NULL, NULL, 2, 6, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (6, '2018-06-16 16:00:00', 1, NULL, NULL, 13, 10, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (7, '2018-06-16 19:00:00', 21, NULL, NULL, 8, 12, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (8, '2018-06-16 21:00:00', 7, NULL, NULL, 19, 2, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (9, '2018-06-17 16:00:00', 6, NULL, NULL, 27, 8, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (10, '2018-06-17 18:00:00', 12, NULL, NULL, 17, 1, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (11, '2018-06-17 21:00:00', 4, NULL, NULL, 30, 9, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (12, '2018-06-18 15:00:00', 29, NULL, NULL, 16, 7, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (13, '2018-06-18 18:00:00', 3, NULL, NULL, 20, 5, 'GROUP G', NULL);
INSERT INTO `app_matches` VALUES (14, '2018-06-18 21:00:00', 31, NULL, NULL, 10, 3, 'GROUP G', NULL);
INSERT INTO `app_matches` VALUES (15, '2018-06-19 15:00:00', 5, NULL, NULL, 15, 12, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (16, '2018-06-19 18:00:00', 22, NULL, NULL, 26, 10, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (17, '2018-06-19 21:00:00', 24, NULL, NULL, 9, 11, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (18, '2018-06-20 15:00:00', 23, NULL, NULL, 18, 1, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (19, '2018-06-20 18:00:00', 32, NULL, NULL, 25, 9, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (20, '2018-06-20 21:00:00', 14, NULL, NULL, 28, 6, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (21, '2018-06-21 16:00:00', 8, NULL, NULL, 2, 8, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (22, '2018-06-21 20:00:00', 11, NULL, NULL, 21, 4, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (23, '2018-06-21 21:00:00', 1, NULL, NULL, 7, 7, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (24, '2018-06-22 15:00:00', 4, NULL, NULL, 6, 11, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (25, '2018-06-22 18:00:00', 19, NULL, NULL, 13, 3, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (26, '2018-06-22 20:00:00', 27, NULL, NULL, 30, 2, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (27, '2018-06-23 15:00:00', 3, NULL, NULL, 31, 10, 'GROUP G', NULL);
INSERT INTO `app_matches` VALUES (28, '2018-06-23 18:00:00', 16, NULL, NULL, 17, 9, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (29, '2018-06-23 21:00:00', 12, NULL, NULL, 29, 5, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (30, '2018-06-24 15:00:00', 10, NULL, NULL, 20, 7, 'GROUP G', NULL);
INSERT INTO `app_matches` VALUES (31, '2018-06-24 20:00:00', 15, NULL, NULL, 26, 4, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (32, '2018-06-24 21:00:00', 22, NULL, NULL, 5, 6, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (33, '2018-06-25 18:00:00', 32, NULL, NULL, 24, 8, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (34, '2018-06-25 17:00:00', 25, NULL, NULL, 9, 3, 'GROUP A', NULL);
INSERT INTO `app_matches` VALUES (35, '2018-06-25 21:00:00', 14, NULL, NULL, 23, 12, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (36, '2018-06-25 20:00:00', 28, NULL, NULL, 18, 2, 'GROUP B', NULL);
INSERT INTO `app_matches` VALUES (37, '2018-06-26 17:00:00', 8, NULL, NULL, 11, 1, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (38, '2018-06-26 17:00:00', 2, NULL, NULL, 21, 5, 'GROUP C', NULL);
INSERT INTO `app_matches` VALUES (39, '2018-06-26 21:00:00', 19, NULL, NULL, 1, 11, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (40, '2018-06-26 21:00:00', 13, NULL, NULL, 7, 9, 'GROUP D', NULL);
INSERT INTO `app_matches` VALUES (41, '2018-06-27 19:00:00', 17, NULL, NULL, 29, 4, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (42, '2018-06-27 17:00:00', 16, NULL, NULL, 12, 6, 'GROUP F', NULL);
INSERT INTO `app_matches` VALUES (43, '2018-06-27 21:00:00', 27, NULL, NULL, 4, 10, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (44, '2018-06-27 21:00:00', 30, NULL, NULL, 6, 7, 'GROUP E', NULL);
INSERT INTO `app_matches` VALUES (45, '2018-06-28 17:00:00', 15, NULL, NULL, 22, 3, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (46, '2018-06-28 18:00:00', 26, NULL, NULL, 5, 8, 'GROUP H', NULL);
INSERT INTO `app_matches` VALUES (47, '2018-06-28 21:00:00', 20, NULL, NULL, 31, 12, 'GROUP G', NULL);
INSERT INTO `app_matches` VALUES (48, '2018-06-28 20:00:00', 10, NULL, NULL, 3, 2, 'GROUP G', NULL);
COMMIT;

-- ----------------------------
-- Table structure for app_predictions
-- ----------------------------
DROP TABLE IF EXISTS `app_predictions`;
CREATE TABLE `app_predictions` (
  `serial_id` varchar(8) NOT NULL,
  `user_email` varchar(70) NOT NULL,
  `match_id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `id_local_team` int(11) DEFAULT NULL,
  `gols_local_team` int(11) DEFAULT NULL,
  `gols_visitor_team` int(11) DEFAULT NULL,
  `id_visitor_team` int(11) DEFAULT NULL,
  `id_stadium` int(11) DEFAULT NULL,
  `id_group` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`serial_id`,`user_email`,`match_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_predictions
-- ----------------------------
BEGIN;
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 1, '2018-06-14 18:00:00', 24, 5, 6, 25, 1, 'GROUP A', '2018-04-11 09:55:29', 3);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 2, '2018-06-15 17:00:00', 9, 1, 2, 32, 4, 'GROUP A', '2018-04-04 22:15:22', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 3, '2018-06-15 18:00:00', 18, 2, 4, 14, 11, 'GROUP B', '2018-04-06 00:38:41', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 4, '2018-06-15 21:00:00', 23, 2, 1, 28, 5, 'GROUP B', '2018-04-06 00:38:44', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 5, '2018-06-16 13:00:00', 11, 3, 1, 2, 6, 'GROUP C', '2018-04-06 00:38:51', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 6, '2018-06-16 16:00:00', 1, 1, 5, 13, 10, 'GROUP D', '2018-04-06 00:38:53', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 7, '2018-06-16 19:00:00', 21, 5, 7, 8, 12, 'GROUP C', '2018-04-06 00:38:56', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 8, '2018-06-16 21:00:00', 7, 3, 4, 19, 2, 'GROUP D', '2018-04-06 00:38:57', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 9, '2018-06-17 16:00:00', 6, 2, 5, 27, 8, 'GROUP E', '2018-04-06 00:38:58', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 10, '2018-06-17 18:00:00', 12, 3, 6, 17, 1, 'GROUP F', '2018-04-06 00:40:16', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 11, '2018-06-17 21:00:00', 4, 4, 4, 30, 9, 'GROUP E', '2018-04-06 00:40:05', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 12, '2018-06-18 15:00:00', 29, 2, 4, 16, 7, 'GROUP F', '2018-04-06 00:39:00', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 13, '2018-06-18 18:00:00', 3, 2, 4, 20, 5, 'GROUP G', '2018-04-06 00:39:01', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 14, '2018-06-18 21:00:00', 31, 2, 4, 10, 3, 'GROUP G', '2018-04-06 00:39:03', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 15, '2018-06-19 15:00:00', 5, 1, 1, 15, 12, 'GROUP H', '2018-04-06 00:40:00', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 16, '2018-06-19 18:00:00', 22, 3, 2, 26, 10, 'GROUP H', '2018-04-06 00:39:08', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 17, '2018-06-19 21:00:00', 24, 1, 3, 9, 11, 'GROUP A', '2018-04-06 00:39:11', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 18, '2018-06-20 15:00:00', 23, 2, 4, 18, 1, 'GROUP B', '2018-04-06 00:39:53', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 19, '2018-06-20 18:00:00', 32, 2, 3, 25, 9, 'GROUP A', '2018-04-06 23:10:22', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 20, '2018-06-20 21:00:00', 14, 1, 2, 28, 6, 'GROUP B', '2018-04-06 00:39:46', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 21, '2018-06-21 16:00:00', 8, 2, 1, 2, 8, 'GROUP C', '2018-04-06 00:39:40', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 22, '2018-06-21 20:00:00', 11, 2, 1, 21, 4, 'GROUP C', '2018-04-06 00:39:15', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 23, '2018-06-21 21:00:00', 1, 2, 2, 7, 7, 'GROUP D', '2018-04-06 00:39:38', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 24, '2018-06-22 15:00:00', 4, 1, 3, 6, 11, 'GROUP E', '2018-04-06 00:39:33', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 25, '2018-06-22 18:00:00', 19, 2, 3, 13, 3, 'GROUP D', '2018-04-06 00:39:17', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 26, '2018-06-22 20:00:00', 27, 1, 2, 30, 2, 'GROUP E', '2018-04-06 00:39:30', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 27, '2018-06-23 15:00:00', 3, 1, 1, 31, 10, 'GROUP G', '2018-04-06 00:39:18', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 28, '2018-06-23 18:00:00', 16, 2, 3, 17, 9, 'GROUP F', '2018-04-06 00:39:28', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 29, '2018-06-23 21:00:00', 12, 4, 2, 29, 5, 'GROUP F', '2018-04-06 00:40:21', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 30, '2018-06-24 15:00:00', 10, 2, 3, 20, 7, 'GROUP G', '2018-04-06 23:10:01', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 31, '2018-06-24 20:00:00', 15, 2, 1, 26, 4, 'GROUP H', '2018-04-06 23:09:46', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 32, '2018-06-24 21:00:00', 22, 1, 2, 5, 6, 'GROUP H', '2018-04-06 00:40:33', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 33, '2018-06-25 18:00:00', 32, 4, 1, 24, 8, 'GROUP A', '2018-04-06 00:40:38', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 34, '2018-06-25 17:00:00', 25, 1, 4, 9, 3, 'GROUP A', '2018-04-06 00:40:36', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 35, '2018-06-25 21:00:00', 14, 3, 1, 23, 12, 'GROUP B', '2018-04-06 00:40:47', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 36, '2018-06-25 20:00:00', 28, 2, 2, 18, 2, 'GROUP B', '2018-04-06 00:40:45', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 37, '2018-06-26 17:00:00', 8, 4, 1, 11, 1, 'GROUP C', '2018-04-06 00:40:51', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 38, '2018-06-26 17:00:00', 2, 2, 2, 21, 5, 'GROUP C', '2018-04-06 00:40:52', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 39, '2018-06-26 21:00:00', 19, 3, 3, 1, 11, 'GROUP D', '2018-04-06 00:40:54', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 40, '2018-06-26 21:00:00', 13, 5, 4, 7, 9, 'GROUP D', '2018-04-06 00:41:05', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 41, '2018-06-27 19:00:00', 17, 1, 1, 29, 4, 'GROUP F', '2018-04-06 00:41:11', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 42, '2018-06-27 17:00:00', 16, 1, 2, 12, 6, 'GROUP F', '2018-04-06 00:41:08', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 43, '2018-06-27 21:00:00', 27, 1, 1, 4, 10, 'GROUP E', '2018-04-06 00:41:13', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 44, '2018-06-27 21:00:00', 30, 1, 1, 6, 7, 'GROUP E', '2018-04-06 00:41:14', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 45, '2018-06-28 17:00:00', 15, 1, 1, 22, 3, 'GROUP H', '2018-04-06 00:41:16', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 46, '2018-06-28 18:00:00', 26, 3, 2, 5, 8, 'GROUP H', '2018-04-06 00:41:20', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 47, '2018-06-28 21:00:00', 20, 1, 2, 31, 12, 'GROUP G', '2018-04-06 00:41:28', NULL);
INSERT INTO `app_predictions` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', 48, '2018-06-28 20:00:00', 10, 1, 1, 3, 2, 'GROUP G', '2018-04-06 00:41:23', NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 1, '2018-06-14 18:00:00', 24, 3, 8, 25, 1, 'GROUP A', '2018-04-11 09:55:29', 5);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 2, '2018-06-15 17:00:00', 9, 4, 6, 32, 4, 'GROUP A', '2018-04-04 23:11:16', NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 3, '2018-06-15 18:00:00', 18, NULL, NULL, 14, 11, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 4, '2018-06-15 21:00:00', 23, NULL, NULL, 28, 5, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 5, '2018-06-16 13:00:00', 11, NULL, NULL, 2, 6, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 6, '2018-06-16 16:00:00', 1, NULL, NULL, 13, 10, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 7, '2018-06-16 19:00:00', 21, NULL, NULL, 8, 12, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 8, '2018-06-16 21:00:00', 7, NULL, NULL, 19, 2, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 9, '2018-06-17 16:00:00', 6, NULL, NULL, 27, 8, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 10, '2018-06-17 18:00:00', 12, NULL, NULL, 17, 1, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 11, '2018-06-17 21:00:00', 4, NULL, NULL, 30, 9, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 12, '2018-06-18 15:00:00', 29, NULL, NULL, 16, 7, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 13, '2018-06-18 18:00:00', 3, NULL, NULL, 20, 5, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 14, '2018-06-18 21:00:00', 31, NULL, NULL, 10, 3, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 15, '2018-06-19 15:00:00', 5, NULL, NULL, 15, 12, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 16, '2018-06-19 18:00:00', 22, NULL, NULL, 26, 10, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 17, '2018-06-19 21:00:00', 24, NULL, NULL, 9, 11, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 18, '2018-06-20 15:00:00', 23, NULL, NULL, 18, 1, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 19, '2018-06-20 18:00:00', 32, NULL, NULL, 25, 9, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 20, '2018-06-20 21:00:00', 14, NULL, NULL, 28, 6, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 21, '2018-06-21 16:00:00', 8, NULL, NULL, 2, 8, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 22, '2018-06-21 20:00:00', 11, NULL, NULL, 21, 4, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 23, '2018-06-21 21:00:00', 1, NULL, NULL, 7, 7, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 24, '2018-06-22 15:00:00', 4, NULL, NULL, 6, 11, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 25, '2018-06-22 18:00:00', 19, NULL, NULL, 13, 3, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 26, '2018-06-22 20:00:00', 27, NULL, NULL, 30, 2, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 27, '2018-06-23 15:00:00', 3, NULL, NULL, 31, 10, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 28, '2018-06-23 18:00:00', 16, NULL, NULL, 17, 9, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 29, '2018-06-23 21:00:00', 12, NULL, NULL, 29, 5, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 30, '2018-06-24 15:00:00', 10, NULL, NULL, 20, 7, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 31, '2018-06-24 20:00:00', 15, NULL, NULL, 26, 4, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 32, '2018-06-24 21:00:00', 22, NULL, NULL, 5, 6, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 33, '2018-06-25 18:00:00', 32, NULL, NULL, 24, 8, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 34, '2018-06-25 17:00:00', 25, NULL, NULL, 9, 3, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 35, '2018-06-25 21:00:00', 14, NULL, NULL, 23, 12, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 36, '2018-06-25 20:00:00', 28, NULL, NULL, 18, 2, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 37, '2018-06-26 17:00:00', 8, NULL, NULL, 11, 1, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 38, '2018-06-26 17:00:00', 2, NULL, NULL, 21, 5, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 39, '2018-06-26 21:00:00', 19, NULL, NULL, 1, 11, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 40, '2018-06-26 21:00:00', 13, NULL, NULL, 7, 9, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 41, '2018-06-27 19:00:00', 17, NULL, NULL, 29, 4, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 42, '2018-06-27 17:00:00', 16, NULL, NULL, 12, 6, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 43, '2018-06-27 21:00:00', 27, NULL, NULL, 4, 10, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 44, '2018-06-27 21:00:00', 30, NULL, NULL, 6, 7, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 45, '2018-06-28 17:00:00', 15, NULL, NULL, 22, 3, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 46, '2018-06-28 18:00:00', 26, NULL, NULL, 5, 8, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 47, '2018-06-28 21:00:00', 20, NULL, NULL, 31, 12, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', 48, '2018-06-28 20:00:00', 10, NULL, NULL, 3, 2, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 1, '2018-06-14 18:00:00', 24, NULL, NULL, 25, 1, 'GROUP A', '2018-04-11 09:54:15', 0);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 2, '2018-06-15 17:00:00', 9, NULL, NULL, 32, 4, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 3, '2018-06-15 18:00:00', 18, NULL, NULL, 14, 11, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 4, '2018-06-15 21:00:00', 23, NULL, NULL, 28, 5, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 5, '2018-06-16 13:00:00', 11, NULL, NULL, 2, 6, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 6, '2018-06-16 16:00:00', 1, NULL, NULL, 13, 10, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 7, '2018-06-16 19:00:00', 21, NULL, NULL, 8, 12, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 8, '2018-06-16 21:00:00', 7, NULL, NULL, 19, 2, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 9, '2018-06-17 16:00:00', 6, NULL, NULL, 27, 8, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 10, '2018-06-17 18:00:00', 12, NULL, NULL, 17, 1, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 11, '2018-06-17 21:00:00', 4, NULL, NULL, 30, 9, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 12, '2018-06-18 15:00:00', 29, NULL, NULL, 16, 7, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 13, '2018-06-18 18:00:00', 3, NULL, NULL, 20, 5, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 14, '2018-06-18 21:00:00', 31, NULL, NULL, 10, 3, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 15, '2018-06-19 15:00:00', 5, NULL, NULL, 15, 12, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 16, '2018-06-19 18:00:00', 22, NULL, NULL, 26, 10, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 17, '2018-06-19 21:00:00', 24, NULL, NULL, 9, 11, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 18, '2018-06-20 15:00:00', 23, NULL, NULL, 18, 1, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 19, '2018-06-20 18:00:00', 32, NULL, NULL, 25, 9, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 20, '2018-06-20 21:00:00', 14, NULL, NULL, 28, 6, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 21, '2018-06-21 16:00:00', 8, NULL, NULL, 2, 8, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 22, '2018-06-21 20:00:00', 11, NULL, NULL, 21, 4, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 23, '2018-06-21 21:00:00', 1, NULL, NULL, 7, 7, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 24, '2018-06-22 15:00:00', 4, NULL, NULL, 6, 11, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 25, '2018-06-22 18:00:00', 19, NULL, NULL, 13, 3, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 26, '2018-06-22 20:00:00', 27, NULL, NULL, 30, 2, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 27, '2018-06-23 15:00:00', 3, NULL, NULL, 31, 10, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 28, '2018-06-23 18:00:00', 16, NULL, NULL, 17, 9, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 29, '2018-06-23 21:00:00', 12, NULL, NULL, 29, 5, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 30, '2018-06-24 15:00:00', 10, NULL, NULL, 20, 7, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 31, '2018-06-24 20:00:00', 15, NULL, NULL, 26, 4, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 32, '2018-06-24 21:00:00', 22, NULL, NULL, 5, 6, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 33, '2018-06-25 18:00:00', 32, NULL, NULL, 24, 8, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 34, '2018-06-25 17:00:00', 25, NULL, NULL, 9, 3, 'GROUP A', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 35, '2018-06-25 21:00:00', 14, NULL, NULL, 23, 12, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 36, '2018-06-25 20:00:00', 28, NULL, NULL, 18, 2, 'GROUP B', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 37, '2018-06-26 17:00:00', 8, NULL, NULL, 11, 1, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 38, '2018-06-26 17:00:00', 2, NULL, NULL, 21, 5, 'GROUP C', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 39, '2018-06-26 21:00:00', 19, NULL, NULL, 1, 11, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 40, '2018-06-26 21:00:00', 13, NULL, NULL, 7, 9, 'GROUP D', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 41, '2018-06-27 19:00:00', 17, NULL, NULL, 29, 4, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 42, '2018-06-27 17:00:00', 16, NULL, NULL, 12, 6, 'GROUP F', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 43, '2018-06-27 21:00:00', 27, NULL, NULL, 4, 10, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 44, '2018-06-27 21:00:00', 30, NULL, NULL, 6, 7, 'GROUP E', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 45, '2018-06-28 17:00:00', 15, NULL, NULL, 22, 3, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 46, '2018-06-28 18:00:00', 26, NULL, NULL, 5, 8, 'GROUP H', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 47, '2018-06-28 21:00:00', 20, NULL, NULL, 31, 12, 'GROUP G', NULL, NULL);
INSERT INTO `app_predictions` VALUES ('E75I9UIN', 'anajlezama@gmail.com', 48, '2018-06-28 20:00:00', 10, NULL, NULL, 3, 2, 'GROUP G', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for app_serials
-- ----------------------------
DROP TABLE IF EXISTS `app_serials`;
CREATE TABLE `app_serials` (
  `id` varchar(8) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `verified_date` datetime DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_serials
-- ----------------------------
BEGIN;
INSERT INTO `app_serials` VALUES ('5SKX286L', 'kigahn@aol.com', '234243424', 0, NULL, NULL, 12, 0);
INSERT INTO `app_serials` VALUES ('7EAS0TQX', 'anajlezama@gmail.com', '888888', 1, '2018-02-20 08:02:08', NULL, 4, 0);
INSERT INTO `app_serials` VALUES ('807ZP1M8', 'Aresalan@sdfsf.com', 'sdf', 0, NULL, NULL, 5, 0);
INSERT INTO `app_serials` VALUES ('8FJF7ALW', 'anajlezama@gmail.com', '342423', 1, '2018-04-05 05:04:10', NULL, 2, 0);
INSERT INTO `app_serials` VALUES ('8LS14PEK', 'keviangnulo@fsfsd.com', '2432342', 0, NULL, NULL, 1, 0);
INSERT INTO `app_serials` VALUES ('9YJCMY15', 'kigahn@aol.com', '234243424', 0, NULL, NULL, 12, 0);
INSERT INTO `app_serials` VALUES ('A5RVBRH7', 'dsddssd@sdssd.com', 'sadas', 0, NULL, NULL, 6, 0);
INSERT INTO `app_serials` VALUES ('AYQ7L45T', 'legend@ofthephenix.com', '23323', 0, NULL, NULL, 7, 0);
INSERT INTO `app_serials` VALUES ('D4AM5JLC', 'legend@ofthephenix.com', '43433', 0, NULL, NULL, 11, 0);
INSERT INTO `app_serials` VALUES ('E75I9UIN', 'anajlezama@gmail.com', '342423', 1, '2018-04-08 00:04:42', NULL, 2, 0);
INSERT INTO `app_serials` VALUES ('FMUDO39X', 'keviangnulo@fsfsd.com', '2432342', 0, NULL, NULL, 1, 0);
INSERT INTO `app_serials` VALUES ('H81JNZCN', 'anajlezama@gmail.com', '23423', 0, NULL, NULL, 3, 0);
INSERT INTO `app_serials` VALUES ('HQ0KHXA3', 'anajlezama@gmail.com', '888888', 0, NULL, NULL, 4, 0);
INSERT INTO `app_serials` VALUES ('PKILE6RM', 'anajlezama@gmail.com', '342423', 0, NULL, NULL, 2, 0);
INSERT INTO `app_serials` VALUES ('SKE3GW71', 'Aresalan@sdfsf.com', 'sdf', 0, NULL, NULL, 5, 0);
INSERT INTO `app_serials` VALUES ('T9HU1WCO', 'keviangnulo@fsfsd.com', '2432342', 0, NULL, NULL, 1, 0);
INSERT INTO `app_serials` VALUES ('ZPVS11XE', 'kigahn@aol.com', '234243424', 0, NULL, NULL, 12, 0);
INSERT INTO `app_serials` VALUES ('ZR870S01', 'anajlezama@gmail.com', '342423', 0, NULL, NULL, 2, 0);
INSERT INTO `app_serials` VALUES ('ZWU49M8A', 'anajlezama@gmail.com', '342423', 0, NULL, NULL, 2, 0);
COMMIT;

-- ----------------------------
-- Table structure for app_stadiums
-- ----------------------------
DROP TABLE IF EXISTS `app_stadiums`;
CREATE TABLE `app_stadiums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_stadiums
-- ----------------------------
BEGIN;
INSERT INTO `app_stadiums` VALUES (1, 'Luzhniki Stadium', 'Moscow', 'The main stadium for Russia 2018 was originally built to host the first nationwide summer Spartakiad in 1956. Since then, Luzhniki Stadium has hosted a multitude of major sporting and cultural events, including the 1980 Summer Olympics, world championships in ice hockey, athletics and rugby and concerts featuring some of the world\'s greatest musicians. Throughout this period, however, football has played a special role, with the stadium having hosted more than 3,000 matches.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/22/2709222_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (2, 'Kaliningrad Stadium', 'Kaliningrad', 'Kaliningrad Stadium was built for Russia 2018 on Oktyabrsky Island, right in the heart of Kaliningrad. The selection of Kaliningrad as a host city has prompted the local authorities to develop the island, which for many centuries has been a wilderness, left largely untouched. After the 2018 World Cup, a new residential development will be built around the stadium, with parks, quays and embankments alongside the Pregola river.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/25/2709225_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (3, 'Volgograd Arena', 'Volgograd', 'Volgograd Arena was built on the site of the Central stadium, at the foot of the Mamayev Kurgan war memorial. The location of the previous stadium is a Mecca for local football supporters, with the more seasoned among them able to remember European victory over Manchester United and domestic battles with Spartak Moscow.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/21/2709221_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (4, 'Ekaterinburg Arena', 'Ekaterinburg', 'Home to one of the country\'s oldest football clubs, FC Ural, the stadium was built in 1953. Since then, it has been refurbished on a number of occasions. The last of these refits has been made for the 2018 FIFA World Cup™. On each occasion, however, the stadium\'s historical façade remained untouched, as an architectural legacy. Architectural and decorative features typical of Soviet neo-Classicism were used lavishly in the construction of the stands, along with decorative art in the form of sculptures, vases and banners.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/91/99/2709199_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (5, 'Fisht Stadium', 'Sochi', 'Located in the Olympic Park in Imeretin Valley in Sochi, Fisht Stadium was built for the Winter Olympics in February 2014, and hosted the opening and closing ceremonies.The stadium has been reconstructed for the 2018 FIFA World Cup™ and was re-opened in 2017, where the venue hosted FIFA Confederations Cup matches.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/18/2709218_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (6, 'Kazan Arena', 'Kazan', 'Kazan Arena was built in preparation for the Summer World University Games in 2013, when it hosted the opening and closing ceremonies. A football pitch was installed once the games were over. The stadium hosted its first match in August 2013, when Rubin Kazan drew 1:1 with Lokomotiv Moscow, and also served as a FIFA Confederations Cup 2017 venue.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/01/2709201_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (7, 'Nizhny Novgorod Stadium', 'Nizhny Novgorod', 'Nizhny Novgorod Stadium is being built in one of the city\'s most picturesque locations, at the confluence of the Volga and Oka rivers, near the Alexander Nevsky Cathedral. The area offers a wonderful view of the Nizhny Novgorod Kremlin, situated on the other side of the Oka.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/02/2709202_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (8, 'Samara Arena', 'Samara', 'Samara Arena will be built in the Radiotsentr district. Under current plans, the stadium will be surrounded by a residential development and good-quality infrastructure. Stadium construction officially started on 21 July 2014.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/15/2709215_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (9, 'Rostov Arena', 'Rostov-on-Don', 'Rostov Arena is situated on the left bank of the Don River. Buoyed by its selection as a host city, Rostov-on-Don will be able to expand in size by developing its left bank, where the local tourism facilities and restaurants have traditionally attracted locals and visitors alike.', 'http://img.fifa.com/mm/photo/tournament/destination/02/84/12/14/2841214_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (10, 'Spartak Stadium', 'Moscow', 'Spartak Moscow, the \"people\'s team\", is one of Russia\'s most popular football clubs. And yet, ever since it was founded in 1922, it has had to make do without its own stadium. The club has played home games at Moscow\'s Dynamo, Luzhniki and Lokomotiv stadiums, at the Khimki Arena just outside Moscow and even in Ekaterinburg.\r\n\r\nIn spring 2010, on the site of Moscow\'s former airfield in the district of Tushino, Spartak started building its own 45,000-seater stadium. The venue hosted its first match on 5 September 2014, when Spartak drew 1:1 with Red Star Belgrade, and was also a 2017 FIFA Confederations Cup stadium.', 'http://img.fifa.com/mm/photo/tournament/loc/02/92/25/46/2922546_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (11, 'Saint Petersburg Stadium', 'Saint Petersburg', 'Saint Petersburg\'s new, super-modern stadium is built on the site of the Kirov Stadium on Krestovsky Island, which, in its day, was one of the country\'s largest stadiums, with a capacity of 110,000. The tender to build Saint Petersburg Stadium was won by the renowned Japanese architect Kisho Kurosawa. The stadium hosted the Opening Match and Final of the 2017 FIFA Confederations Cup.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/14/2709214_full-lnd.jpg');
INSERT INTO `app_stadiums` VALUES (12, 'Mordovia Arena', 'Saransk', 'Work on Mordovia Arena began in 2010, the 1000th anniversary of the unification of the Mordovian people with Russia\'s other ethnic groups. The arena is located in the centre of the city, on the bank of the Insar river.', 'http://img.fifa.com/mm/photo/tournament/destination/02/70/92/16/2709216_full-lnd.jpg');
COMMIT;

-- ----------------------------
-- Table structure for app_teams
-- ----------------------------
DROP TABLE IF EXISTS `app_teams`;
CREATE TABLE `app_teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `id_group` varchar(11) DEFAULT NULL,
  `abbr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_teams
-- ----------------------------
BEGIN;
INSERT INTO `app_teams` VALUES (1, 'ARGENTINA', 'GROUP D', 'ARG');
INSERT INTO `app_teams` VALUES (2, 'AUSTRALIA', 'GROUP C', 'AUS');
INSERT INTO `app_teams` VALUES (3, 'BELGIUM', 'GROUP G', 'BEL');
INSERT INTO `app_teams` VALUES (4, 'BRAZIL', 'GROUP E', 'BRA');
INSERT INTO `app_teams` VALUES (5, 'COLOMBIA', 'GROUP H', 'COL');
INSERT INTO `app_teams` VALUES (6, 'COSTA RICA', 'GROUP E', 'CRC');
INSERT INTO `app_teams` VALUES (7, 'CROATIA', 'GROUP D', 'CRO');
INSERT INTO `app_teams` VALUES (8, 'DENMARK', 'GROUP C', 'DEN');
INSERT INTO `app_teams` VALUES (9, 'EGYPT', 'GROUP A', 'EGY');
INSERT INTO `app_teams` VALUES (10, 'ENGLAND', 'GROUP G', 'ENG');
INSERT INTO `app_teams` VALUES (11, 'FRANCE', 'GROUP C', 'FRA');
INSERT INTO `app_teams` VALUES (12, 'GERMANY', 'GROUP F', 'GER');
INSERT INTO `app_teams` VALUES (13, 'ICELAND', 'GROUP D', 'ISL');
INSERT INTO `app_teams` VALUES (14, 'IRAN', 'GROUP B', 'IRN');
INSERT INTO `app_teams` VALUES (15, 'JAPAN', 'GROUP H', 'JPN');
INSERT INTO `app_teams` VALUES (16, 'KOREA REPUBLIC', 'GROUP F', 'KOR');
INSERT INTO `app_teams` VALUES (17, 'MEXICO', 'GROUP F', 'MEX');
INSERT INTO `app_teams` VALUES (18, 'MOROCCO', 'GROUP B', 'MAR');
INSERT INTO `app_teams` VALUES (19, 'NIGERIA', 'GROUP D', 'NGA');
INSERT INTO `app_teams` VALUES (20, 'PANAMA', 'GROUP G', 'PAN');
INSERT INTO `app_teams` VALUES (21, 'PERU', 'GROUP C', 'PER');
INSERT INTO `app_teams` VALUES (22, 'POLAND', 'GROUP H', 'POL');
INSERT INTO `app_teams` VALUES (23, 'PORTUGAL', 'GROUP B', 'POR');
INSERT INTO `app_teams` VALUES (24, 'RUSSIA', 'GROUP A', 'RUS');
INSERT INTO `app_teams` VALUES (25, 'SAUDI ARABIA', 'GROUP A', 'KSA');
INSERT INTO `app_teams` VALUES (26, 'SENEGAL', 'GROUP H', 'SEN');
INSERT INTO `app_teams` VALUES (27, 'SERBIA', 'GROUP E', 'SRB');
INSERT INTO `app_teams` VALUES (28, 'SPAIN', 'GROUP B', 'ESP');
INSERT INTO `app_teams` VALUES (29, 'SWEDEN', 'GROUP F', 'SWE');
INSERT INTO `app_teams` VALUES (30, 'SWITZERLAND', 'GROUP E', 'SUI');
INSERT INTO `app_teams` VALUES (31, 'TUNISIA', 'GROUP G', 'TUN');
INSERT INTO `app_teams` VALUES (32, 'URUGUAY', 'GROUP A', 'URU');
COMMIT;

-- ----------------------------
-- Table structure for app_users
-- ----------------------------
DROP TABLE IF EXISTS `app_users`;
CREATE TABLE `app_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `register_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of app_users
-- ----------------------------
BEGIN;
INSERT INTO `app_users` VALUES (6, 'Kevin', 'keviangnulo@fsfsd.com', '2432342', NULL, '0000-00-00 00:00:00');
INSERT INTO `app_users` VALUES (7, 'Ana Josefina Lezama', 'anajlezama@gmail.com', '888888', NULL, '0000-00-00 00:00:00');
INSERT INTO `app_users` VALUES (9, 'As', 'Aresalan@sdfsf.com', 'sdf', NULL, '0000-00-00 00:00:00');
INSERT INTO `app_users` VALUES (10, 'kekeke', 'dsddssd@sdssd.com', 'sadas', NULL, '0000-00-00 00:00:00');
INSERT INTO `app_users` VALUES (11, 'Oscar del valle', 'legend@ofthephenix.com', '43433', NULL, '0000-00-00 00:00:00');
INSERT INTO `app_users` VALUES (12, 'kevin Kigan', 'kigahn@aol.com', '234243424', NULL, '0000-00-00 00:00:00');
COMMIT;

-- ----------------------------
-- Triggers structure for table app_matches
-- ----------------------------
DROP TRIGGER IF EXISTS `points_calculation`;
delimiter ;;
CREATE DEFINER = `root`@`localhost` TRIGGER `points_calculation` AFTER UPDATE ON `app_matches` FOR EACH ROW BEGIN

UPDATE app_predictions p 
SET p.points = 0 
WHERE 
NEW.id = p.match_id 
AND NEW.gols_local_team IS NOT NULL 
AND NEW.gols_visitor_team IS NOT NULL;

UPDATE app_predictions p 
SET p.points = 1 
WHERE 
NEW.id = p.match_id 
AND 
NEW.gols_local_team IS NOT NULL 
AND 
NEW.gols_visitor_team IS NOT NULL 
AND 
(NEW.gols_local_team = NEW.gols_visitor_team
 AND p.gols_local_team = p.gols_visitor_team 
AND NEW.gols_local_team <> p.gols_local_team);

UPDATE app_predictions p 
SET p.points = 3 
WHERE 
NEW.id = p.match_id 
AND 
NEW.gols_local_team IS NOT NULL 
AND 
NEW.gols_visitor_team IS NOT NULL 
AND (
(NEW.gols_local_team > NEW.gols_visitor_team AND p.gols_local_team > p.gols_visitor_team)
OR 
(NEW.gols_local_team < NEW.gols_visitor_team AND p.gols_local_team < p.gols_visitor_team)
);

UPDATE app_predictions p 
SET p.points = 4 
WHERE 
NEW.id = p.match_id 
AND 
NEW.gols_local_team IS NOT NULL 
AND 
NEW.gols_visitor_team IS NOT NULL 
AND (NEW.gols_local_team = NEW.gols_visitor_team AND p.gols_local_team = p.gols_visitor_team AND NEW.gols_local_team = p.gols_local_team);

UPDATE app_predictions p 
SET p.points = 5 
WHERE 
NEW.id = p.match_id 
AND 
NEW.gols_local_team IS NOT NULL 
AND 
NEW.gols_visitor_team IS NOT NULL 
AND
NEW.gols_local_team <> NEW.gols_visitor_team
AND
NEW.gols_local_team = p.gols_local_team
AND 
NEW.gols_visitor_team = p.gols_visitor_team;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
