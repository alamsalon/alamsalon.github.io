import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {


  constructor( private router: Router) { 
   
  }

  ngOnInit(): void {
  }

  readMoreButtonClicked(event){
    // let innerText = event.target.offsetParent.getElementsByClassName("card-title")[0].innerText;
    // let cardTitle = this.getCardTitle(innerText);
    // this.router.navigate(['/services'], { queryParams: { title: cardTitle } });
    window.open("https://instance.shivsofts.com/alam_salon/qr/index.php?branch_id=UzN4eE9JUEUzaUltOERvTTJKVVNGUT09");
  }

  getCardTitle(title){
    switch(title) {
      case "BRIDAL MAKE-UP":
        title = "BRIDAL";
        break;
      case "GROOM MAKE-UP":
        title = "BRIDAL";
        break;
      case "ENGAGEMENT MAKE-UP":
        title = "BRIDAL";
        break;
      case "PARTY MAKE-UP":
        title = "MAKEUP";
        break;
        case ">HAIR STYLING":
        title = "HAIR";
        break;
        case "MANI-PADI SPA":
        title = "SPA";
        break;
        case "CRYSTAL SKIN TREATMENT":
        title = "SKIN";
        break;
        case "THREADING & BLEACH":
        title = "THREAD";
        break;
        case "BODY POLISHING":
        title = "SKIN";
        break;
        case "HAIR PATCH & SYSTEM":
          title = "HAIR";
          break;

      default:
        title = "HAIR";
    }

    return title;

  }

}
