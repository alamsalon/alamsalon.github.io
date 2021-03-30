import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
    selector: 'services',
    templateUrl: './header-services.component.html',
    styleUrls: ['./header-services.component.scss']
})
export class HeaderServiceComponent implements OnInit {

    constructor() {


    }
    showDiv = "";
    ngOnInit(): void {

    }

    goToSection(e) {
        console.log("event--->", e)
        this.showDiv = e.target.innerText;
        console.log(this.showDiv);
    }
}
