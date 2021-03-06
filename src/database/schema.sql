DROP DATABASE getaway;
CREATE DATABASE getaway;

\c getaway;

CREATE TABLE victims (
	phone_number BIGINT NOT NULL,
	injured BOOLEAN NOT NULL,
	injury varchar(100),
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
	phone_number BIGINT NOT NULL,
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP PRIMARY KEY
);

CREATE TABLE debris (
	phone_number BIGINT NOT NULL,
	size SMALLINT NOT NULL,
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	note VARCHAR(500),
	posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE news (
	id SERIAL PRIMARY KEY,
	header VARCHAR(50) NOT NULL,
	body VARCHAR(500) NOT NULL,
	posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO accounts (phone_number, name, dob) VALUES (4153358620, 'Nuno Neves', 28101989);
INSERT INTO accounts (phone_number, name, dob) VALUES (1112223333, 'Andre Nguyen', 15041993);
INSERT INTO accounts (phone_number, name, dob) VALUES (2223334444, 'Wilson Liu', 07071985);
INSERT INTO accounts (phone_number, name, dob) VALUES (5556667777, 'Nathan Khosla', 01021988);

INSERT INTO victims (phone_number, injured, injury, stuck, priority) VALUES (4153358620, 'true', 'broken leg', 'true', '5');
INSERT INTO location_history (phone_number, lat, lng) VALUES (4153358620, '37.5497', '-122.081');

INSERT INTO victims (phone_number, injured, injury, stuck, priority) VALUES (1112223333, 'true', 'missing an arm', 'false', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (1112223333, '37.538', '-122.085');

INSERT INTO victims (phone_number, injured, stuck, priority) VALUES (2223334444, 'false', 'false', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (2223334444, '37.56', '-122.09');

INSERT INTO victims (phone_number, injured, injury, stuck, priority) VALUES (5556667777, 'true', 'broken feet', 'true', '2');
INSERT INTO location_history (phone_number, lat, lng) VALUES (5556667777, '37.54', '-122.095');

INSERT INTO updates (phone_number, note) VALUES (4153358620, 'Losing lots of blood here! I am type A+');
INSERT INTO updates (phone_number, note) VALUES (5554443333, 'I lost my boy Nuno in the explosion! I know he is still alive out there!');
INSERT INTO updates (phone_number, note) VALUES (1112223333, 'Has anyone seen my left arm lying around anywhere? It was holding on to a can of beer last time I saw it');

INSERT INTO debris (phone_number, size, lat, lng, note) VALUES (4153358620, 2, '37.5497', '-122.081', 'the road collapsed here roughly 12 feet deep, I am stuck in here!');
INSERT INTO debris (phone_number, size, lat, lng, note) VALUES (1112223333, 2, '37.5497', '-122.081', 'I see a hole across the road. do not drive through it.');

INSERT INTO news (header, body) VALUES ('Active Fires', 'There is a an active fire in Market Street, between 6th and 4th Street');

INSERT INTO news (header, body) VALUES ('Broken Roads', 'Stay away from the Tenderloin');

/* 
if postgreSQL is installed and psql is not working, open another window in the terminal and run the bash command:
	pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
*/