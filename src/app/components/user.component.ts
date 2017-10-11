import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  //template: ``,
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
     name: string;
     email: string;
     address: address;
     hobbies: string[];
     showHobbies: boolean;
     posts: Post[];

     constructor(private postsService: PostsService){
         this.name = 'John Doe';
         this.email = 'john@gmail.com';
         this.address = {
             street: '12 Main st',
             city: 'Boston',
             state: 'MA'
          }
         this.hobbies = ['Music', 'Movies', 'Sport'];
         this.showHobbies = false; 
         this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;            
           //console.log(posts);
     });
    }

     toggleHobbies(){
        if(this.showHobbies == true){
          this.showHobbies = false;
        }else{
          this.showHobbies = true;
        }
     }

     addHobby(hobby){
        this.hobbies.push(hobby);
     }

     deleteHobby(i){
       this.hobbies.splice(i,1)
     }

}

interface address {
   street: string;
   city: string;
   state: string;
}

//interface Post {
//  id: number;
//  title: string;
//  body: string;
//}

interface Post {
  number: number;
  first_name: string;
  last_name: string;
}