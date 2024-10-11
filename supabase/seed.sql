-- SEEDING DATA INTO CATEGORY
INSERT INTO public."Category" (name, color)
VALUES ('Technology', 'blue'),
       ('Arts', 'red'),
       ('Science', 'green'),
       ('Sports', 'yellow');

-- SEEDING DATA INTO SUBJECT
INSERT INTO public."Subject" (name)
VALUES ('Mathematics'),
       ('Physics'),
       ('Painting'),
       ('Football');

-- SEEDING DATA INTO STUDENT
INSERT INTO public."Student" (ldap_id)
VALUES (10001),
       (10002),
       (10003),
       (10004);

-- SEEDING DATA INTO TEACHER
INSERT INTO public."Teacher" (first_name, last_name, abbreviation)
VALUES ('John', 'Doe', 'JD'),
       ('Jane', 'Smith', 'JS'),
       ('Emily', 'Clark', 'EC'),
       ('Michael', 'Johnson', 'MJ');

-- SEEDING DATA INTO WORKSHOP
INSERT INTO public."Workshop" (name, description, subject_id)
VALUES ('Intro to AI', 'An introductory workshop to Artificial Intelligence',
        (SELECT uuid FROM public."Subject" WHERE name = 'Mathematics')),
       ('Modern Physics', 'Exploring the world of modern physics',
        (SELECT uuid FROM public."Subject" WHERE name = 'Physics')),
       ('Abstract Painting', 'Discover the techniques of abstract art',
        (SELECT uuid FROM public."Subject" WHERE name = 'Painting')),
       ('Football Basics', 'Learn the basics of football techniques',
        (SELECT uuid FROM public."Subject" WHERE name = 'Football'));

-- SEEDING DATA INTO WORKSHOP_CATEGORY
INSERT INTO public."Workshop_Category" (category_id, workshop_id)
VALUES ((SELECT uuid FROM public."Category" WHERE name = 'Technology'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Intro to AI')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Science'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Modern Physics')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Arts'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Abstract Painting')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Sports'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Football Basics'));

-- SEEDING DATA INTO SUBSCRIPTION
INSERT INTO public."Subscription" (student_id, workshop_id)
VALUES ((SELECT uuid FROM public."Student" WHERE ldap_id = 10001),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Intro to AI')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10002),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Modern Physics')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10003),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Abstract Painting')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 10004),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Football Basics'));

-- SEEDING DATA INTO WORKSHOP_TEACHER
INSERT INTO public."Workshop_Teacher" (workshop_id, teacher_id)
VALUES ((SELECT uuid FROM public."Workshop" WHERE name = 'Intro to AI'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'JD')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Modern Physics'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'JS')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Abstract Painting'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'EC')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Football Basics'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'MJ'));

-- SEEDING DATA INTO DAY
INSERT INTO public."Day" (start_time, end_time, workshop_id, date)
VALUES ('10:00:00', '12:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Intro to AI'), '2024-10-15'),
       ('12:00:00', '14:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Modern Physics'), '2024-10-16'),
       ('09:00:00', '11:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Abstract Painting'), '2024-10-17'),
       ('16:00:00', '18:00:00', (SELECT uuid FROM public."Workshop" WHERE name = 'Football Basics'), '2024-10-18');
