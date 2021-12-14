export declare class Encryptation {
    static encryptPassword(password: string): Promise<any>;
    static comparePassword(password: string, hash: string): Promise<any>;
}
