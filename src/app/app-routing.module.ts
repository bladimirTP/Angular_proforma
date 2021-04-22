import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProductoComponent } from './producto/producto.component';



const routes: Routes = [
 
  // {path:'',redirectTo:'/auth',pathMatch:'full'},
  // {path:'auth', loadChildren: './auth/auth.module#AuthModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
