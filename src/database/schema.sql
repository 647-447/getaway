DROP DATABASE getaway;
CREATE DATABASE getaway;

\c getaway;

CREATE TABLE victims (
	phone_number BIGINT NOT NULL,
	danger_zone BOOLEAN NOT NULL,
	injured BOOLEAN NOT NULL,
	stuck BOOLEAN NOT NULL,
	priority SMALLINT
);

CREATE TABLE updates (
	id SERIAL PRIMARY KEY,
	phone_number BIGINT NOT NULL,
	note VARCHAR(500) NOT NULL,
	posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
	phone_number BIGINT PRIMARY KEY,
	name VARCHAR(100),
	dob INT
);

CREATE TABLE location_history (
	phone_number BIGINT PRIMARY KEY,
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE debris (
	phone_number BIGINT NOT NULL,
	size SMALLINT NOT NULL,
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	note VARCHAR(500),
	entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO accounts (phone_number, name, dob) VALUES (4153358620, 'Nuno Neves', 28101989);
INSERT INTO accounts (phone_number, name, dob) VALUES (1112223333, 'Andre Nguyen', 15041993);
INSERT INTO accounts (phone_number, name, dob) VALUES (2223334444, 'Wilson Liu', 07071985);
INSERT INTO accounts (phone_number, name, dob) VALUES (5556667777, 'Nathan Khosla', 01021988);

INSERT INTO victims (phone_number, danger_zone, injured, stuck, priority) VALUES (4153358620, 'true', 'true', 'true', '5');
INSERT INTO location_history (phone_number, lat, lng) VALUES (4153358620, '37.5497', '-122.081');

INSERT INTO victims (phone_number, danger_zone, injured, stuck, priority) VALUES (1112223333, 'true', 'false', 'false', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (1112223333, '37.538', '-122.085');

INSERT INTO victims (phone_number, danger_zone, injured, stuck, priority) VALUES (2223334444, 'true', 'true', 'false', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (2223334444, '37.56', '-122.09');

INSERT INTO victims (phone_number, danger_zone, injured, stuck, priority) VALUES (5556667777, 'true', 'false', 'true', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (5556667777, '37.54', '-122.095');

INSERT INTO updates (phone_number, note) VALUES (4153358620, 'Losing lots of blood here! I am type A+');
INSERT INTO updates (phone_number, note) VALUES (5554443333, 'I lost my boy Nuno in the explosion! I know he is still alive out there!');

INSERT INTO debris (phone_number, size, lat, lng, note) VALUES (4153358620, 2, '37.5497', '-122.081', 'the road collapsed here roughly 12 feet deep, I am stuck in here!');
INSERT INTO debris (phone_number, size, lat, lng, note) VALUES (1112223333, 2, '37.5497', '-122.081', 'I see a hole across the road. do not drive through it.');

/* 
if postgreSQL is installed and psql is not working, open another window in the terminal and run the bash command:
	pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
*/