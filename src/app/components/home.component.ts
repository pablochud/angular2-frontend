import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    
})

export class HomeComponent implements OnInit {
    //users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        
    }

}