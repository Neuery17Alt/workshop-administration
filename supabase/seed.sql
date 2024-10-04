-- Insert into Category table
INSERT INTO public."Category" (name)
VALUES ('Technology'),
       ('Art'),
       ('Science'),
       ('Music');

-- Insert into Subject table
INSERT INTO public."Subject" (name)
VALUES ('Mathematics'),
       ('Physics'),
       ('Literature'),
       ('Programming');

-- Insert into Student table
INSERT INTO public."Student" (ldap_id)
VALUES (1001),
       (1002),
       (1003),
       (1004);

-- Insert into Teacher table
INSERT INTO public."Teacher" (first_name, last_name, abbreviation)
VALUES ('John', 'Doe', 'JD'),
       ('Alice', 'Smith', 'AS'),
       ('Mark', 'Johnson', 'MJ'),
       ('Sarah', 'Brown', 'SB');

-- Insert into Workshop table with subject_id
INSERT INTO public."Workshop" (name, description, start_date, end_date, is_active, subject_id)
VALUES ('Python Programming Basics', 'Introduction to Python for beginners', '2024-10-01 10:00', '2024-12-01 12:00',
        TRUE,
        (SELECT uuid FROM public."Subject" WHERE name = 'Programming')),
       ('Digital Art Workshop', 'Learn how to create digital illustrations', '2024-11-15 09:00', '2024-12-15 16:00',
        TRUE,
        (SELECT uuid FROM public."Subject" WHERE name = 'Art')),
       ('Music Theory Fundamentals', 'Understanding the basics of music theory', '2024-09-01 13:00', '2024-09-30 15:00',
        FALSE,
        (SELECT uuid FROM public."Subject" WHERE name = 'Music')),
       ('Advanced Physics', 'Exploring advanced concepts in physics', '2024-10-05 08:00', NULL, TRUE,
        (SELECT uuid FROM public."Subject" WHERE name = 'Physics'));

-- Insert into Workshop_Category table
INSERT INTO public."Workshop_Category" (category_id, workshop_id)
VALUES ((SELECT uuid FROM public."Category" WHERE name = 'Technology'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Python Programming Basics')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Art'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Digital Art Workshop')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Music'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Music Theory Fundamentals')),
       ((SELECT uuid FROM public."Category" WHERE name = 'Science'),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Advanced Physics'));

-- Insert into Subscription table
INSERT INTO public."Subscription" (student_id, workshop_id)
VALUES ((SELECT uuid FROM public."Student" WHERE ldap_id = 1001),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Python Programming Basics')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 1002),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Digital Art Workshop')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 1003),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Music Theory Fundamentals')),
       ((SELECT uuid FROM public."Student" WHERE ldap_id = 1004),
        (SELECT uuid FROM public."Workshop" WHERE name = 'Advanced Physics'));

-- Insert into Workshop_Teacher table
INSERT INTO public."Workshop_Teacher" (workshop_id, teacher_id)
VALUES ((SELECT uuid FROM public."Workshop" WHERE name = 'Python Programming Basics'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'JD')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Digital Art Workshop'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'AS')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Music Theory Fundamentals'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'MJ')),
       ((SELECT uuid FROM public."Workshop" WHERE name = 'Advanced Physics'),
        (SELECT uuid FROM public."Teacher" WHERE abbreviation = 'SB'));
