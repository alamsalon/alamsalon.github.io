import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderServiceComponent } from './header-services/header-services.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { OffersComponent } from './offers/offers.component';
import { BranchesComponent } from './branches/branches.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContactUsComponent,
    HeaderServiceComponent,
    BookAppointmentComponent,
    OffersComponent,
    BranchesComponent,
    GalleryComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
