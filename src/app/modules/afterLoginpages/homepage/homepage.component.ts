import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { RouterModule } from '@angular/router';
import { assets } from '../../../core/constants/assets.const';
import { AccordionModule } from 'primeng/accordion';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { Carousel, CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'caring-roots-homepage',
  standalone: true,
  imports: [TabsModule, CommonModule, InputTextModule, FormsModule, InputTextModule, ButtonModule, RouterModule, AccordionModule, ContactUsComponent,CarouselModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
 
  assetsConst = assets;
  activeIndex: number = 0;

services = [
  {
    image: this.assetsConst.serviceImage,
    title: 'Personal Care Assistance',
    description:
      'We support daily personal care needs such as bathing, dressing, grooming, and hygiene. Our caregivers provide this care with dignity, privacy, and respect, always following the individual’s comfort and preferences.'
  },
  {
    image: this.assetsConst.serviceImage2,
    title: 'Companionship & Emotional Support',
    description:
      'Loneliness can affect overall well-being. Our caregivers offer friendly companionship, meaningful conversation, and emotional support to promote mental health, confidence, and a sense of connection.'
  },
  {
    image: this.assetsConst.serviceImage3,
    title: 'Meal Preparation & Light Housekeeping',
    description:
      'We assist with preparing nutritious meals based on dietary needs and preferences. Light housekeeping services include tidying living areas, laundry, dishes, and maintaining a clean, safe home environment.'
  },
  {
    image: this.assetsConst.serviceImage4,
    title: 'Medication Reminders',
    description:
      'Our caregivers provide timely medication reminders to help clients follow prescribed routines. This service supports independence while promoting safety and consistency.'
  },
  {
    image: this.assetsConst.serviceImage5,
    title: 'Mobility & Transfer Assistance',
    description:
      'We help clients move safely around their home, including walking support, transfers from bed to chair, and fall-prevention assistance, while encouraging independence whenever possible.'
  },
  {
    image: this.assetsConst.serviceImage6,
    title: 'Respite Care for Family Caregivers',
    description:
      'Caring for a loved one can be demanding. Our respite care services give family caregivers peace of mind and time to rest, knowing their loved one is in safe and capable hands.'
  },
  {
    image: this.assetsConst.serviceImage7,
    title: 'Post-Hospital & Recovery Support',
    description:
      'We assist individuals transitioning home after hospitalization, surgery, or illness. Our caregivers help with daily tasks, recovery routines, and comfort to support a smooth and safe healing process.'
  },
  {
    image: this.assetsConst.serviceImage8,
    title: '24/7 Care & Assistance',
    description:
      'We offer flexible care options, including around-the-clock and overnight support. Our 24/7 assistance ensures safety, reassurance, and peace of mind for clients and their families.'
  }
];


 accordionItems = [
    {
      value: 0,
      header: 'Care Built on Relationships',
      content: `We believe quality care starts with relationships. That’s why we take the time to understand not only care needs, 
      but also daily routines, personal preferences, and family dynamics. Whenever possible, we aim for consistency in caregivers 
      so clients feel comfortable, respected, and supported.`
    },
    {
      value: 1,
      header: 'Clear Communication for Families',
      content: `Families are an essential part of the care team. We value open, ongoing communication and encourage family 
      involvement to ensure concerns are addressed promptly and care plans evolve as needs change.`
    },
    {
      value: 2,
      header: 'Supporting Independence and Dignity',
      content: `Our approach to care respects independence and personal choice. We encourage clients to remain active and 
      involved in daily life while providing assistance where it is truly needed—always with dignity and respect.`
    },
    {
      value: 3,
      header: 'Flexible, Practical Support',
      content: `We understand that care needs can change unexpectedly. Our services are designed to be flexible and practical, 
      allowing families to adjust care schedules without unnecessary pressure or complexity.`
    },
    {
      value: 4,
      header: 'Added Convenience for Families',
      content: `To help reduce stress for families and clients, Caring Roots Home Care Inc. carries a selection of commonly used 
      incontinence products for added convenience. This allows caregivers to support comfort and continuity of care without 
      families needing to source items separately.`
    },
    {
      value: 5,
      header: 'Why Families Choose Caring Roots',
      content: `Families choose Caring Roots Home Care Inc. because we provide consistent, dependable care; thoughtfully matched 
      caregivers; clear, ongoing communication; flexible, family-friendly scheduling; respect for dignity, privacy, and independence; 
      and a local, community-rooted approach to care.
      <br />
      <strong class"d_block">Because trust matters when caring for someone you love.</strong>`
    }  
  ];
constructor(){
  Carousel.prototype.onTouchMove = () => { };
}



}
