export class Auth {
    email: string;
    userid: string;
    password: string;
    role: string;
    token: any;
    provider: string = 'email';
    rememberMe: boolean = false;
}
