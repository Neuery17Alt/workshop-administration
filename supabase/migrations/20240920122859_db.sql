create table
    public."Category"
(
    created_at timestamp with time zone not null default now(),
    name       character varying        not null default ''::character varying,
    uuid       uuid                     not null default gen_random_uuid(),
    color      character varying null default 'gray'::character varying,
    constraint category_pkey primary key (uuid)
) tablespace pg_default;

create table
    public."Subject"
(
    created_at timestamp with time zone not null default now(),
    name       character varying        not null default ''::character varying,
    uuid       uuid                     not null default gen_random_uuid(),
    constraint Subject_pkey primary key (uuid)
) tablespace pg_default;

create table
    public."Student"
(
    created_at timestamp with time zone not null default now(),
    ldap_id    bigint null,
    uuid       uuid                     not null default gen_random_uuid(),
    constraint Student_pkey primary key (uuid)
) tablespace pg_default;

create table
    public."Teacher"
(
    created_at   timestamp with time zone not null default now(),
    first_name   character varying null default ''::character varying,
    last_name    character varying null default ''::character varying,
    abbreviation character varying        not null default ''::character varying,
    uuid         uuid                     not null default gen_random_uuid(),
    constraint Teacher_pkey primary key (uuid)
) tablespace pg_default;

create table
    public."Workshop"
(
    created_at  timestamp with time zone not null default now(),
    name        character varying        not null default ''::character varying,
    description character varying null default ''::character varying,
    uuid        uuid                     not null default gen_random_uuid(),
    subject_id  uuid                              default null,
    constraint workshop_pkey primary key (uuid),
    constraint public_workshop_subject_id_fkey foreign key (subject_id) references "Subject" (uuid) on update cascade on delete set null
) tablespace pg_default;

create table
    public."Workshop_Category"
(
    created_at  timestamp with time zone not null default now(),
    category_id uuid                     not null default gen_random_uuid(),
    workshop_id uuid                     not null default gen_random_uuid(),
    constraint Workshop_Category_pkey primary key (category_id, workshop_id),
    constraint public_Workshop_Category_category_id_fkey foreign key (category_id) references "Category" (uuid) on update cascade on delete set null,
    constraint public_Workshop_Category_workshop_id_fkey foreign key (workshop_id) references "Workshop" (uuid) on update cascade on delete set null
) tablespace pg_default;

create table
    public."Subscription"
(
    created_at  timestamp with time zone not null default now(),
    student_id  uuid                     not null default gen_random_uuid(),
    workshop_id uuid                     not null default gen_random_uuid(),
    constraint Subscription_pkey primary key (student_id, workshop_id),
    constraint public_Subscription_student_id_fkey foreign key (student_id) references "Student" (uuid) on update cascade on delete set null,
    constraint public_Subscription_workshop_id_fkey foreign key (workshop_id) references "Workshop" (uuid) on update cascade on delete set null
) tablespace pg_default;

create table
    public."Workshop_Teacher"
(
    created_at  timestamp with time zone not null default now(),
    workshop_id uuid                     not null default gen_random_uuid(),
    teacher_id  uuid                     not null default gen_random_uuid(),
    constraint Workshop_Teacher_pkey primary key (workshop_id, teacher_id),
    constraint public_Workshop_Teacher_teacher_id_fkey foreign key (teacher_id) references "Teacher" (uuid) on update cascade on delete set null,
    constraint public_Workshop_Teacher_workshop_id_fkey foreign key (workshop_id) references "Workshop" (uuid) on update cascade on delete set null
) tablespace pg_default;

create table
    public."Day"
(
    created_at  timestamp with time zone not null default now(),
    start_time  time without time zone not null,
    end_time    time without time zone not null,
    workshop_id uuid                     not null,
    date        date                     not null,
    uuid        uuid                     not null default gen_random_uuid(),
    constraint Day_pkey primary key (uuid)
) tablespace pg_default;

