import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { GenericListComponent } from './generic-list/generic-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GenericListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GenericListComponent
  ]
})
export class SharedModule { }
