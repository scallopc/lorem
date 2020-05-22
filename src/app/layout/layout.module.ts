import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FooterComponent, MenuComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    
  ],
  exports: [MainComponent, MenuComponent]
})
export class LayoutModule { }
