import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';

@Component({
  selector: 'app-menupage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
  getmenuId:any;
  menudata:any;
ngOnInit(){
  this.getmenuId = this.param.snapshot.paramMap.get('id')
  console.log(this.getmenuId, 'getmenu');
  if(this.getmenuId)
  {
    this.menudata = this.service.foodDetails.filter((value =>{
      return value.id == this.getmenuId;
    }))
  }
}}

