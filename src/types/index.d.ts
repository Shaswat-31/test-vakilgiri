
export interface ApiResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data?: object | null;
    errors: string[];
}

export interface UserPayload {
    first_name: string;
    last_name: string;
    email_address: string;
    password?: string;
    phone?: string;
    role?: "MASTER" | "ADMIN" | "AGENT";
}