import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { LayoutModule } from '../layout/layout.module';
import { FormacComponent } from './formac/formac.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [PerfilComponent, FormacComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FontAwesomeModule,
  ],
  exports: [PerfilComponent, FormacComponent]
})
export class PagesModule { }
