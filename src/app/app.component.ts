import { Component } from '@angular/core';
// Passo #6
//interface User {
//  id: number;
//  name: string;
//  email: string;
//  admin: boolean
//}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'designa';
  // Passo #6
 // public user!: User;
 // function fetchUser(): User {
 //   return {
 //     id: 1,
 //     name: 'Wellinson',
 //     email: 'wellinsonfernandes@gmail.com',
 //     admin: true
 //   }
//  }
}
