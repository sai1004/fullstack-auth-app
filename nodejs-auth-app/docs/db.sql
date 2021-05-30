create database auth_app_db;


use auth_app_db;
 
create table contacts (
	
    id varchar(245) primary key not null,
    name varchar(245) not null,
    picture varchar(245),
    company varchar(245),
    title varchar(245),
    mobile varchar(245) not null,
    work varchar(245),
    email varchar(245) not null,
    dob varchar(245),
	notes text(246),
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()
    
);