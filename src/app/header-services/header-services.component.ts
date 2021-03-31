import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import * as $ from 'jquery'

@Component({
    selector: 'services',
    templateUrl: './header-services.component.html',
    styleUrls: ['./header-services.component.scss']
})
export class HeaderServiceComponent implements OnInit {

    constructor() {


    }
    showDiv = "Hair Style";
    ngOnInit(): void {

    }
    collapse() {

        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    }
    goToSection(e) {
        this.showDiv = e.target.innerText;
        $('#sidebar').removeClass('active');
        $(this).removeClass('active');
    }
}