import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   url: string;
  constructor() { 
  
  }

  ngOnInit(): void {
  
    this.url = "https://instance.shivsofts.com/alam_salon/qr/index.php?branch_id=UzN4eE9JUEUzaUltOERvTTJKVVNGUT09";
  }

  
}
