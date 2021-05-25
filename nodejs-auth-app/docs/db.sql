create database auth_app_db;


use auth_app_db;

create table profile (

    id varchar(245) not null primary key,
    name varchar(199) not null,
    email varchar(199) not null,
    password varchar(199) not null,
    mobile varchar(199) ,
    token varchar(245) not null,    
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()
    
);