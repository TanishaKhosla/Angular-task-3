import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  getName = '';
  getEmail = '';
  getNumber = '';
  getCity = '';
  getMemberName: any;
  

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    number: ['', Validators.required],
    city: ['', Validators.required],
    family: this.fb.array([this.pushFamily()])
  });
  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit(): void {
  }

  get family() {
    return this.registerForm.get('family') as FormArray;
  }
  pushFamily(){
    return this.fb.group({
      familyNname: ['', Validators.required],
      relation: ['', Validators.required],
    })
  }
  addFamily() {
    this.family.push(this.pushFamily());
  }
  removeFamily() {
    this.family.removeAt(this.family.length - 1);
  }
  onSubmit() {
    this.getName = this.registerForm.get('fullName')?.value;
    this.getEmail = this.registerForm.get('email')?.value;
    this.getNumber = this.registerForm.get('number')?.value;
    this.getCity = this.registerForm.get('city')?.value;
  }
}