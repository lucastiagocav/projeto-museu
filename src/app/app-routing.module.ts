import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'visitar', loadChildren: './visitar/visitar.module#VisitarPageModule' },
  { path: 'home', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'tela-final', loadChildren: './tela-final/tela-final.module#TelaFinalPageModule' },
  { path: 'obra', loadChildren: './obra/obra.module#ObraPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
