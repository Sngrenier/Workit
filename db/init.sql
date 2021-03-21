CREATE TABLE membership (
membership_id serial primary key,
membership_type varchar(200),
price numeric(2000),
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

insert into profile (email, password, profile_pic, first_name, last_name, birthday, membership_id)
values('stacy@testmail.com', 'stacy', 'Stacy', 'Grenier' );


CREATE TABLE instructor(
 instructor_id serial primary key,
 first_name varchar(255),
 last_name varchar(255),
 instructor_description varchar (2000)   
);



CREATE TABLE circuit_moves(
circuit_id serial primary key,
name varchar(255),
description varchar(2000),
instructor_id int references instructor(instructor_id)

);

CREATE TABLE circuit_completed (
completed_id serial primary key,
circuit_id references circuit_moves(circuit_id),
user_id references profile(user_id),
date date

);

CREATE TABLE quit_reasons (
    reason_id serial primary key,
    reason varchar(300),
    user_id references profile(user_id),
    date date

);

CREATE TABLE photos (
    photo_id serial primary key,
    photo text,
    circuit_id references circuit_moves(circuit_id)
);

