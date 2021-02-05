import { HttpResponse } from '../protocols/http';

export const badRequest = (error: Error): HttpResponse => ({
    body: error,
    status: 400
});