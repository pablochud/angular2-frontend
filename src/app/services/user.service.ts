import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'jwt ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

    }
}