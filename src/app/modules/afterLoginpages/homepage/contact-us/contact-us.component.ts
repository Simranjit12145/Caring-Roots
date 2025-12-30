import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'caring-roots-contact-us',
  standalone: true,
  imports: [InputTextModule, TextareaModule, CommonModule, ButtonModule, FormsModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  contactForm!: FormGroup;
  http = inject(HttpClient);
  messageService = inject(MessageService);

  businessInfo = [
    { label: 'Phone Number', value: '+1 (506) 623-8013' },
    { label: 'Email', value: 'caringroots@shaw.ca' },
    { label: 'Website', value: 'caringroots.ca' },
    { label: 'Serving', value: 'Miramichi and surrounding communities' }
  ];

  reasonOptions = [
    { label: 'Schedule a Free Consultation', value: 'Free Consultation' },
    { label: 'Employment Opportunity Enquiry', value: 'Job Enquiry' },
    { label: 'Immediate Care Assistance Required', value: 'Urgent Care Needed' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  sendEmail() {
    this.http.post('https://api.emailjs.com/api/v1.0/email/send', {
      lib_version: "4.4.1",
      user_id: "du3dXHM4-ZJrclpu2",
      service_id: "service_2gh1g3d",
      template_id: "template_yaf5asu",
      template_params: { ...this.contactForm.value }
    }, {
      responseType: "text"
    }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Mail Sent',
          detail: 'Thank you for contacting us. We will get back to you shortly.',
          life: 4000
        });
        this.contactForm.reset({
          name: '',
          email: '',
          title: '',
          message: ''
        });
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
        console.log('sent');
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed to Send',
          detail: 'Something went wrong. Please try again later.',
          life: 4000
        });
      }
    })
  }
}
