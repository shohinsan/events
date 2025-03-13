export interface ProjectData {
    name: string
    description: string
    tags: string[]
    href: string
    host: string
    state: string
    category: string
}

export type Data = {
    name: string;
    email: string;
    phone: string | undefined;
    message: string;
};

export interface Validation {
    nameMissing?: string;
    emailMissing?: string;
    messageMissing?: string;
    emailFormat?: string;
    phoneFormat?: string;
    phoneLimit?: string;
}
