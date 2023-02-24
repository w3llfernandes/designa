import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
public form: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl ('', [Validators.required, Validators.email]),
  role: new FormControl('dev')
})
public save(): void {
  if(this.form.valid){
    alert("Form Válido");
    console.log(this.form.value);
  } else {
    alert("Form Inválido")
  }
}
}



