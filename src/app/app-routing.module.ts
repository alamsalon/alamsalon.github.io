import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';
import { HeaderServiceComponent } from './header-services/header-services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { OffersComponent } from './offers/offers.component';
import { BranchesComponent } from './branches/branches.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'services',
    component: HeaderServiceComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },
  {
    path: 'branches',
    component: BranchesComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
