import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  title = 'Stay updated!';
  summary = 'Join 60,000+ product managers receiving monthly updates on:';
  items = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  email = new FormControl('', [Validators.email, Validators.required]);
}
