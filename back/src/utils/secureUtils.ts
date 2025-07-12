import bcrypt from 'bcrypt';
import { RequestServiceError } from './errors';

const saltRounds = 10;

/**
 *
 * @param password
 * @returns Hashed password
 */
export const passwordSecure = async (password: string): Promise<string> => {
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    if (hashedPassword) return hashedPassword;
    throw new RequestServiceError('Hash');
};

/**
 *
 * @param encryption
 * @returns true if the password-generated hash for it is matched.
 */
export const validateUser = async (password: string, hash: string) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (error) {
        throw new RequestServiceError('validateUser');
    }
};
