set names UTF8;
drop database if exists myy;
create database myy CHARSET=UTF8;
use myy;
create table user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname varchar(32) ,
   upwd varchar(16),
   uxing varchar(16),
   uming varchar(16)
);
insert into user values('0','123456@163.com','1234','liu','dong');
create table detail(
  did int primary key auto_increment,
  url varchar(32),
  des varchar(64)
);
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/7.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/8.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/9.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/9.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/7.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/8.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/7.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/9.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/8.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/9.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/5.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/7.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/8.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/8.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/9.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/2.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/3.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/6.jpg','数据库的环境是否还是减肥就开始');
insert into detail  values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/4.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/10.jpg','数据库的环境是否还是减肥就开始');
insert into  detail values('','img/detail1/1.jpg','数据库的环境是否还是减肥就开始');
