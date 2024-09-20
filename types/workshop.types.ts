export type Workshop = {
    created_at: string;
    name: string;
    description: string | null;
    startdate: string;
    enddate: string | null;
    is_active: boolean;
    subject: Subject;
    teachers: Teacher[];
    students: Student[];
}

export type Subject = {
    created_at: string;
    name: string;
}

export type Teacher = {
    created_at: string;
    abbreviation: string;
    first_name: string;
    last_name: string;
}

export type Student = {
    ldap_id: number;
}