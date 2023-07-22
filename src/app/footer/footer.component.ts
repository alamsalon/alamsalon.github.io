import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  url: string;
  constructor() { 
  
  }

  ngOnInit(): void {
  
    this.url = "https://instance.shivsofts.com/alam_salon/qr/index.php?branch_id=UzN4eE9JUEUzaUltOERvTTJKVVNGUT09";
  }

}
