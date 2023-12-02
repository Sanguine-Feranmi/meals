import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  step = [
    {
      id: 1,
      detail: "Select Food"
    },
    {
      id: 2,
      detail: "Fill the Details"
    },
    {
      id: 3,
      detail: "Your order delivered in minutes"
    }
  ]
  constructor(private service:OrderDetailsService){}
  foodData : any;
  ngOnInit(){
    this.foodData = this.service.foodDetails;
  }
}
