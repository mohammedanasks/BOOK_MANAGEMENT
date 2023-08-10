export class ResponseModel<T> {
    item?: T | null;
    items?: T[];
    isOk?: boolean;
    message?: string;
}