-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2016 at 07:12 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nano`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cate_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(150) NOT NULL,
  `parentid` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cate_id`, `name`, `description`, `status`, `date`, `image`, `parentid`) VALUES
(1, 'surgicel', 'surgicel', 1, '2016-05-06 11:55:53', '', 0),
(2, 'Dermabond', 'Dermabond', 1, '2016-05-06 11:56:24', '', 0),
(3, 'Abbott', 'Abbott is category', 1, '2016-05-11 11:28:22', '', 0),
(4, '3M', '3M is category', 1, '2016-05-11 11:28:22', '', 2),
(18, 'Ethicon', 'ethicon', 1, '2016-07-09 16:01:04', '', 1),
(19, 'Burner', 'burner', 1, '2016-07-09 16:01:25', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prod_id` int(11) NOT NULL,
  `cate_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `curreny` varchar(5) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `cate_id`, `name`, `description`, `price`, `curreny`, `status`, `date`, `user`) VALUES
(1, 18, 'panadol', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\nFrom advanced energy-based surgical devices to foundational surgical supplies, Covidien offers unmatched clinical and economic value through their range of market-leading brands.\n\nCovidien’s comprehensive surgical product portfolio addresses the full spectrum of clinical needs. This is achieved by working directly with healthcare professionals around the world to design and develop technologies that meet their needs in performance and value.', 500, '$', 1, '2016-05-14 12:14:43', 0),
(2, 4, 'COVIDIEN VALLEYLAB CORD', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\r\n', 500, '$', 1, '2016-05-14 12:15:45', 0),
(3, 4, 'COVIDIEN VALLEYLAB CORD', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\r\n', 500, '$', 1, '2016-05-14 12:15:51', 0),
(4, 18, 'COVIDIEN VALLEYLAB CORD', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\r\n', 500, '$', 1, '2016-05-14 12:15:57', 0),
(5, 19, 'COVIDIEN VALLEYLAB CORD', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\r\n', 500, '$', 1, '2016-05-14 12:16:01', 0),
(6, 18, 'COVIDIEN VALLEYLAB CORD', 'COVIDIEN VALLEYLAB CORD, MONOPOLAR LAPAROSCOPIC\r\n', 500, '$', 1, '2016-05-14 12:16:05', 0),
(22, 18, 'Ethicon', 'this is ethicon products', 120, 'USD', 1, '2016-07-09 16:39:16', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `image_id` int(11) NOT NULL,
  `image_name` varchar(150) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`image_id`, `image_name`, `product_id`) VALUES
(1, 'HUGGER.jpg', 22),
(2, 'IMG-33534.jpg', 6),
(3, 'HUGGER.jpg', 5),
(4, 'HUGGER.jpg', 4),
(5, 'IMG-33534.jpg', 3),
(6, 'IMG-33534.jpg', 2),
(7, 'HUGGER.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `email`, `password`, `status`) VALUES
(1, 'meer', 'meer@nanoarthplus.net', 'meer', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cate_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `cate_id` (`cate_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
