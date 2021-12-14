export declare class User {
    id: string;
    email: string;
    password: string;
    photo: string;
    license_num: string;
    address: string;
    active_rental: boolean;
    role: string;
    hashPassword(): Promise<void>;
}
