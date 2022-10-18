import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
form: FormGroup;
  constructor() { }
onSubmit(){
  const email = this.form.get("email")?.value
  this.form.get("email")?.setValue("mauricio@correo.com")
  console.log(email)
}
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
    });
  }

}
