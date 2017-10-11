import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log('PostService Initialized... ');
    }
    // getPosts(){
    //     return this.http.get('https://jsonplaceholder.typicode.com/posts')
    //         .map(res => res.json());
    // }
    getPosts(){
        return this.http.get('http://localhost:8000/employees/')
            .map(res => res.json());
    }

}