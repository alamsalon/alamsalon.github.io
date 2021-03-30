import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';
import { HeaderServiceComponent } from './header-services/header-services.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  }
  ,
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'services',
    component: HeaderServiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
