import { hash, compare } from 'bcrypt';

/**
 * Hashes a password using bcrypt.
 * @param password - The password to be hashed.
 * @returns A promise that resolves to the hashed password.
 */
async function hashPassword(password: string): Promise<string> {
    return hash(password, 10);
}

/**
 * Compares a password with its corresponding hash.
 * @param password - The password to compare.
 * @param hash - The hash to compare against.
 * @returns A promise that resolves to a boolean indicating whether the password matches the hash.
 */
async function comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
}

// Export the functions
export {
    hashPassword,
    comparePassword
}