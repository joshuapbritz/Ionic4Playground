import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    public getTodos(): Promise<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').toPromise();
    }

    public getTodo(id): Promise<Todo> {
        return this.http
            .get<Todo>(`https://jsonplaceholder.typicode.com/todos/${String(id).trim()}`)
            .toPromise();
    }

    public getUser(id): Promise<User> {
        return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${String(id).trim()}`).toPromise();
    }
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}
