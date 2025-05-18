// src/app/addpage/addpage.component.ts
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ContactService, Contact } from '../../dashbord.service';

@Component({
  selector: 'app-addpage',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    public dialogRef: MatDialogRef<AddpageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      sex: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData: Partial<Contact> = {
        name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
        email: this.contactForm.value.email,
        address: this.contactForm.value.address,
        phoneNumber: this.contactForm.value.phoneNumber,
        dob: this.contactForm.value.dob,
        sex: this.contactForm.value.sex,
        status: this.contactForm.value.status
      };

      this.contactService.createContact(formData).subscribe({
        next: (response: any) => {
          this.dialogRef.close({ ...formData, id: response.id });
        },
        error: (error: any) => {
          console.error('Error adding contact:', error);
          this.dialogRef.close();
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}