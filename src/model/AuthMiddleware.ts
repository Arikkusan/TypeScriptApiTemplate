import { Request, Response } from "express";

/**
 * Middleware function to check if the user is authenticated.
 *
 * @async
 * @param {Request} _req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 */
export async function authRequired(_req: Request, res: Response, next: Function): Promise<void> {
    // check if user is authenticated (has bearer token)
    // if not, return 401
    // if authenticated, call next()

    const header = _req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }

    // get the token without the 'Bearer ' prefix 
    const token = header.split(" ")[1];
    if (token !== "mysecrettoken") { // TODO: replace with actual token validation function
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }



    next();
}