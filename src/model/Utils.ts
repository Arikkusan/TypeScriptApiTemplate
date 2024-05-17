import { NextFunction, Request, Response } from "express";
import { CustomError } from "../Exception/CustomError";

/**
 * Check that a condition is true. If the condition is false, an error with the specified message is thrown.
 * @param condition - The condition to be checked.
 * @param message - The error message to be thrown if the condition is false.
 * @throws {Error} If the condition is false.
 */
export function check(condition: boolean, error: CustomError): void {
    if (!condition) {
        throw error;
    }
}

/**
 * Generates a random token.
 * @param length Token length
 * @param caseSensitive Case sensitive
 * @returns Token
 */
export function generateToken(length: number, caseSensitive: boolean = false): string {
    // Set the characters to be used in the token
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (!caseSensitive) {
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    // Generate the token
    let token = "";
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}

/**
 * Middleware function to try executing a function and handle any errors.
 * @param err - The error object.
 * @param _req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 * @returns A promise that resolves when the function is executed.
 */
export function tryExecute(err: Error, _req: Request, res: Response, next: NextFunction): void {

    let message = "Internal Server Error";
    let status: number = 500;
    let showAsError = true;

    if (err instanceof CustomError) {

        message = err.message;
        status = err.getStatusCode();
        showAsError = err.showAsError();

    } else {
        message = err.stack || err.message;
    }

    const resp = showAsError ? {
        error: message
    } : {
        message: message
    };

    console.log(resp);


    res.status(status).json(resp);

}