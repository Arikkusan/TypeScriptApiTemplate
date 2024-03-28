import { CustomError } from "./CustomError";

/**
 * Represents a "Not Found" error.
 */
export class NotFoundError extends CustomError {
    /**
     * Creates a new instance of NotFoundError.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(404, message);
        this.name = "Not found";
    }
}

/**
 * Represents a "No Content Found" error.
 */
export class NoContentFoundError extends CustomError {
    /**
     * Creates a new instance of NoContentFoundError.
     * @param message - The error message.
     */
    constructor() {
        super(204, '', false);
        this.name = "No content found";
    }
}

/**
 * Represents a "Bad Request" error.
 */
export class BadRequestError extends CustomError {
    /**
     * Creates a new instance of BadRequestError.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(400, message);
        this.name = "Bad request";
    }
}

/**
 * Represents an "Unauthorized" error.
 */
export class UnauthorizedError extends CustomError {
    /**
     * Creates a new instance of UnauthorizedError.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(401, message);
        this.name = "Unauthorized";
    }
}

/**
 * Represents a "Forbidden" error.
 */
export class ForbiddenError extends CustomError {
    /**
     * Creates a new instance of ForbiddenError.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(403, message);
        this.name = "Forbidden";
    }
}

/**
 * Represents an "Internal Server Error" error.
 */
export class InternalServerError extends CustomError {
    /**
     * Creates a new instance of InternalServerError.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(500, message);
        this.name = "Internal server error";
    }
}

/**
 * Represents a "Not Implemented" error.
 */
export class NotImplemented extends CustomError {
    /**
     * Creates a new instance of NotImplemented.
     * @param message - The error message.
     */
    constructor(message: string) {
        super(501, message);
        this.name = "Not implemented";
    }
}