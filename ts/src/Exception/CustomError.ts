/**
 * Represents a custom error with a specific code and message.
 */
export class CustomError extends Error {
    private code: number;
    private isError: boolean;

    /**
     * Creates a new instance of the CustomError class.
     * @param code The error code.
     * @param message The error message.
     */
    constructor(code: number, message: string, isError: boolean = true) {
        super(message);
        this.code = code;
        this.name = this.constructor.name;
        this.isError = isError;
    }

    /**
     * Gets the status code associated with the error.
     * @returns The status code.
     */
    getStatusCode(): number {
        return this.code;
    }

    showAsError(): boolean {
        return this.isError;
    }
}