
Drop table if exists circuit_completed;
Drop table if exists quit_reasons;
Drop table if exists moves;
Drop table if exists circuit;
Drop table if exists profile;
Drop table if exists instructor;
Drop table if exists membership;


CREATE TABLE membership (
membership_id serial primary key,
membership_type varchar(200),
price numeric(1000),
start_date date,
end_date date
);



CREATE TABLE profile (
user_id serial primary key,
email varchar(100) NOT NULL,
password varchar (5000) NOT NULL,
profile_pic text,
first_name varchar(100) NOT NULL,
last_name varchar(100) NOT NULL,
birthday date,
membership_id INT REFERENCES membership(membership_id)

);


CREATE TABLE instructor(
 instructor_id serial primary key,
 first_name varchar(255),
 last_name varchar(255),
 instructor_description varchar (2000)   
);


insert into instructor (first_name, last_name, instructor_description)
values ('Gina', 'Linetti', 'Gina has 6 years of fitness instructor experience'),
('Sarah', 'Moss', 'Sarah has 3 years of fitness instructor experience and got her start in gymnastics'),
('Shae', 'Peterson', 'Shae got her start instructing fitness on youtube and has over 3 million followers'),
('Heather', 'Carson', 'Heather is passionate about nutrition and physical exercise and has been training for 12 years');


CREATE TABLE circuit(
circuit_id serial primary key,
title varchar(255),
subtitle varchar(255),
mainImg text,
info varchar(2000),
instructor_id int references instructor(instructor_id)
);






CREATE TABLE moves(
move_id serial primary key,
move_title varchar(200) NOT NULL,
step1 varchar(2000),
step2 varchar(2000),
step3 varchar(2000),
step4 varchar(2000),
step5 varchar(2000),
step6 varchar(2000),
circuit_id int references circuit(circuit_id),
image text,
reps varchar(100),
gif text

);



CREATE TABLE circuit_completed (
completed_id serial primary key,
circuit_id int references circuit(circuit_id),
user_id int references profile(user_id),
date date

);

CREATE TABLE quit_reasons (
    reason_id serial primary key,
    reason varchar(300),
    user_id int references profile(user_id),
    date date

);



select * from membership;
select * from profile;
select * from instructor;
select * from circuit;
select * from moves;
select * from circuit_completed;
select * from quit_reasons;





