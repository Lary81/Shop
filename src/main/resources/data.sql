insert into users (id,nazwa,telefon, login, password,email, active) values (1, 'zses',2421,'admin', 'fd66aa8bbeb27853026132a01068de7108a6a5b6d1a6bf3c423cdd1062ae33762eba7bc71bb90b0b','ewefewfw@dvd.pl', true);
insert into authorities (id, name) values(1, 'ROLE_ADMIN');
insert into users_authorities values(1,1);
insert into users (id,nazwa,telefon,login, password,email, active) values (2,'eefres',2424, 'user', 'fd66aa8bbeb27853026132a01068de7108a6a5b6d1a6bf3c423cdd1062ae33762eba7bc71bb90b0b','assfe@ef.pl', true);
insert into authorities (id, name) values(2, 'ROLE_USER');
insert into users_authorities values(2,2);
INSERT INTO products (id, product_name, properities, quantity) VALUES (1,'pielucha','tetrowa',10)