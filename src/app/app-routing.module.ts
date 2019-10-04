import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //Redir. padrão
  { path: 'home', //O caminho que se quer redirecionar
    loadChildren: () => import('./home/home.module')
      .then( m => m.HomePageModule)},
    //Onde o caminho irá apontar. Pode ser uma importação direta também.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    //Esquema de rotas que será utilizado. Note o forRoot
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


