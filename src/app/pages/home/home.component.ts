import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public name: string = "João"
public age: number = 30;
public movies: string[] = [
  'Matrix', 'Inception', 'The Lord of the Rings'
]
public showTitle: boolean = true
public toggleTitle(): void {
  this.showTitle = !this.showTitle
} 
private isDeveloper: boolean = true;
constructor(private authService: AuthService) {}
}



