import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsService } from '../../services/order-details.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private service:OrderDetailsService){}
  foodData: any;
 ngOnInit() {
   this.foodData = this.service.foodDetails;
 }
}
