-- SEEDING DATA INTO CATEGORY
INSERT INTO public."Category" (name, color)
VALUES ('Kreativer Denksport', 'blue'),
       ('Musik', 'red'),
       ('Bewegung', 'emerald'),
       ('Sport', 'yellow'),
       ('Technologie und Logik', 'rose');

-- SEEDING DATA INTO SUBJECT
INSERT INTO public."Subject" (name)
VALUES ('SEW'),
       ('D'),
       ('AM'),
       ('NW-BIO');

-- SEEDING DATA INTO STUDENT
INSERT INTO public."Student" (ldap_id)
VALUES (10001),
       (10002),
       (10003),
       (10004);

-- SEEDING DATA INTO TEACHER
INSERT INTO public."Teacher" (first_name, last_name, abbreviation)
VALUES ('Heinz', 'Schweiger', 'SCHH'),
       ('Peter', 'Rathgeb', 'RATP'),
       ('Wolfgang', 'Reisinger', 'REWO'),
       ('Monika', 'Rohrweck', 'ROMO');

-- SEEDING DATA INTO WORKSHOP
INSERT INTO public."Workshop" (name, description, subject_id, max_member)
VALUES ('Akustik und Singen', '',
        (SELECT uuid FROM public."Subject" WHERE name = 'AM'), 40),
       ('Programmieren', 'In diesem Workshop lernst du, wie man durch Einsatz einer Game-Engine mit der Sprache C# einfache 3D-Spiele entwickeln kann.',
        (SELECT uuid FROM public."Subject" WHERE name = 'SEW'), 10),
       ('Klettern', '',
        (SELECT uuid FROM public."Subject" WHERE name = 'D'), 15),
       ('Orientalischer Tanz', '',
        (SELECT uuid FROM public."Subject" WHERE name = 'NW-BIO'), 8),
       ('Praktikum', '',
        (SELECT uuid FROM public."Subject" WHERE name = 'SEW'), 5);

-- SEEDING DATA INTO WORKSHOP_CATEGORY
INSERT INTO public."Workshop_Category" (category_id, workshop_id)
VALUES ((SELECT uuid FROM public."Category" WHERE name = 'Musik'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Akustik und Singen')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Kreativer Denksport'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Programmieren')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Sport'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Klettern')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Bewegung'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Musik'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Sport'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Technologie und Logik'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Programmieren'));

-- SEEDING DATA INTO SUBSCRIPTION
INSERT INTO public."Subscription" (student_id, workshop_id)
VALUES ((SELECT uuid FROM public."Student" WHERE ldap_id = 10001),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Akustik und Singen')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10002),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Programmieren')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10003),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Klettern')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10004),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz'));

-- SEEDING DATA INTO WORKSHOP_TEACHER
INSERT INTO public."Workshop_Teacher" (workshop_id, teacher_id)
VALUES ((SELECT uuid FROM public."Workshop" WHERE name = 'Akustik und Singen'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'SCHH')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Programmieren'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'RATP')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Klettern'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'REWO')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'ROMO')),
        ((SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz'),
            (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'SCHH'));

-- SEEDING DATA INTO DAY
INSERT INTO public."Day" (start_time, end_time, workshop_id, date)
VALUES ('10:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Akustik und Singen'), '2024-10-15'),
       ('12:00:00', '14:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Programmieren'), '2024-10-16'),
       ('09:00:00', '11:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Klettern'), '2024-10-17'),
       ('16:00:00', '18:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Orientalischer Tanz'), '2024-10-18'),
       ('09:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Praktikum'), '2024-10-14'),
       ('09:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Praktikum'), '2024-10-15'),
       ('09:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Praktikum'), '2024-10-16'),
       ('09:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Praktikum'), '2024-10-17'),
       ('09:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Praktikum'), '2024-10-18');
