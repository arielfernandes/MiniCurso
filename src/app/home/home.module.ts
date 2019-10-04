import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import { GatinhoService } from 'src/app/gatinho.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]) 
    //Como home não rotas filho, declara-se aqui mesmo.
    //Nesse caso se usa o forChild.
  ],
  providers:[
    GatinhoService,
    HttpClient
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

