import * as bcrypt from 'bcrypt';

export class Encryptation {
    // método static elimina la obligatoriedad de instanciar la clase
    static async encryptPassword(password: string) {
        return await bcrypt.hash(password, 10)
    }

    static async comparePassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}