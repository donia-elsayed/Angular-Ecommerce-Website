import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  addresses;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
     this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      emil: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userName: [null, [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      pass: [null, [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
      confirmPass: [null, [Validators.required]],
      addresses: this.fb.array([])
     },
     {
       validator: this.MatchPassword
     })
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  MatchPassword(frmG: FormGroup) {
    return frmG.controls['pass'].value === frmG.controls['confirmPass'].value ? null : { mismatch: true };
  }
  addAddress($event) {
    $event.preventDefault();
    this.addresses = this.registerForm.get('addresses') as FormArray;
    this.addresses.push(this.fb.group({
      address: ['',[Validators.required,Validators.pattern(/^(?![\d ]*$)[a-zA-Z0-9 ]{3,7}$/)]],
      street: ['',[Validators.required,Validators.pattern(/^(?![\d ]*$)[a-zA-Z0-9 ]{3,7}$/)]],
      city: ['',[Validators.required,Validators.pattern(/[A-Za-z]+$/)]],
      country: ['', [Validators.required,Validators.pattern(/[A-Za-z]+$/)]]
    })
    )}
  removeAddress(i:number) {
    this.addresses.removeAt(i);
  }
  register() {
    alert(`Registered Successfully ${this.registerForm.value.name}${this.registerForm.value.emil}`)
  }

}
