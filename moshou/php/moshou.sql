set names UTF8;
drop database if exists moshou;
create database moshou CHARSET=UTF8;
use moshou;
create table user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uuid varchar(32),
   uname varchar(32) ,
   upwd varchar(16),
   email varchar(32)
);
insert into user values('','331021190008083333','tom','123123','123456@qq.com');