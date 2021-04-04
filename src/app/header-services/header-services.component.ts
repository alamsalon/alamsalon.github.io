import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ActivatedRoute } from '@angular/router';
import Utils from '../utility/utils';

@Component({
    selector: 'services',
    templateUrl: './header-services.component.html',
    styleUrls: ['./header-services.component.scss']
})
export class HeaderServiceComponent implements OnInit {

    cardTitle: string;
    device:string;
    constructor(private route: ActivatedRoute) {}

    showDiv = "Please click on side menu to know more about services.";
    ngOnInit(): void {
        this.device = Utils.getDevice()
        this.route.queryParams.subscribe(params => {
            this.cardTitle = params['cardTitle'];
            if(!this.cardTitle) this.cardTitle = "BRIDAL";
                this.goToSection(this.cardTitle, true);
        });

    }
    collapse() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    }
    goToSection(e, isNavigation?: any) {
        let text = (typeof (e) === "string") ? e : e.target.innerText; // if e.target is used for side bar menu item clicked.
       if(!isNavigation){ // if flow is coming from Read More button then We don't have to show header text in servives so making it empty else if flow is coming from side bar then We need to show header text.
        this.showDiv = text;
       }
       
        let id = "#" + text.split(" ")[0].toLowerCase() + "Submenu";
        $(id).addClass("show");
       
        
        if (this.device === "desktop") {
            $('#sidebar').removeClass('active');
            $(this).removeClass('active')
        } else {
            let pos = $("#sidebar").offset().top;
            $('body, html').animate({ scrollTop: pos });
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        }

    }
}
