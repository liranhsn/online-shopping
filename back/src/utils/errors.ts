// eslint-disable-next-line max-classes-per-file
export class APIError extends Error {
    // 'message' gets displayed to the API client
    // 'diagnosticMessage' gets displayed to the developer in the console
    constructor(
        public message: string,
        public diagnosticMessage: string = 'An operational error occurred, but no custom diagnostic information was added.',
        public statusCode: number = 500,
    ) {
        super(message);
        this.message = message;
        this.diagnosticMessage = diagnosticMessage || message;
        this.statusCode = statusCode;
    }
}

export class RequestServiceError extends APIError {
    constructor(fnName: string) {
        // undefined is used here so the default message would be used
        super(
            `The error occurred in the ${fnName} function, in the request service.`,
        );
    }
}

export class DBUtilsError extends APIError {
    constructor(fnName: string) {
        super(
            `The error occurred in the database utils module. The exception was thrown in the ${fnName} function.`,
        );
    }
}

export class BadRequestError extends APIError {
    constructor(message: string) {
        super(message, message, 400);
    }
}

export class UnauthorizedError extends APIError {
    constructor(message: string) {
        super(message, message, 401);
    }
}
