import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeraPagComponent } from './_pages/primera-pag/primera-pag.component';
import { SegundaPagComponent } from './_pages/segunda-pag/segunda-pag.component';
import { TerceraPagComponent } from './_pages/tercera-pag/tercera-pag.component';


const routes: Routes = [
    {path: 'primera-pag', component : PrimeraPagComponent},
    {path: 'segunda-pag', component : SegundaPagComponent},
    {path: 'tercera-pag', component : TerceraPagComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
