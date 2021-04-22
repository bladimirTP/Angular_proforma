import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChildren } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// notificasiones ngx-toastr

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { PersonaComponent } from './persona/persona.component';
//para servicio persona
import { PersonaService } from './servicio/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { ProductoComponent } from './producto/producto.component';// para que me reconosca formularios
import {Routes,RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './servicio/categoria.service';
import { from } from 'rxjs';
import { UserComponent } from './Clientes/user.component';
import { ClienteComponent } from './Usuario/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FilterProductoPipe } from './pipes/filter-producto.pipe';
import { FiltercategoriaPipe } from './pipes/filtercategoria.pipe';
import { ProformaComponent } from './proforma/proforma.component';
import { ProformadetalleComponent } from './proformadetalle/proformadetalle.component';
import { FilterEmpresaPipe } from './pipes/filter-empresa.pipe';
import { AdminClienteComponent } from './adminCliente/admin-cliente/admin-cliente.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './principal/home/home.component';
import { HeaderComponent } from './principal/header/header.component';
import { FooterComponent } from './principal/footer/footer.component';
import { MiCuentaComponent } from './principal/mi-cuenta/mi-cuenta.component';
import { VerificarComponent } from './principal/verificar/verificar.component';
import { ProductoDetalleComponent } from './principal/producto-detalle/producto-detalle.component';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { Pagina404Component } from './principal/pagina404/pagina404.component';
import { SeccionPricipalComponent } from './principal/seccion-pricipal/seccion-pricipal.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes=[ //aqui declaramos una array de todas las rutas existentes en la aplicasion

 
  
  //  {path:'auth', loadChildren: './auth/auth.module#AuthModule'},

    {path:'admin',component: AdminComponent,
      children:[
        {path:'contact',component: ContactComponent},
        {path:'persona',component: PersonaComponent},
        {path:'categoria',component: CategoriaComponent},
        {path:'reportes',component: ReportesComponent},
        {path:'user',component: UserComponent},
        {path:'clientes',component: ClienteComponent},
        {path:'vendedor',component: VendedorComponent},
        {path:'empresa',component: EmpresaComponent},
        {path:'producto/:nombre/:iden',component: ProductoComponent},
        {path:"categoria",component: CategoriaComponent},
        {path:"proforma",component: ProformaComponent},
      ]
    },

    {path:'admincli',component: AdminClienteComponent,
    children:[
      {path:'clientes',component: ClienteComponent},
      {path:'producto/:nombre/:iden',component: ProductoComponent},
      {path:"categoria",component: CategoriaComponent},
      {path:"proforma",component: ProformaComponent},
    ]
  },

  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
   
 
  {path:"home",component: WelcomeComponent},
  {path:'principal',component: HomeComponent},
  {path:'',component: HomeComponent}
  
   
  

    // en caso de queramos  pasar parametros  mediante una ruta , se realiza de la siguiente manera
   // {path:'componente2/:id/:titulo',component: Componente2Component},
  // {path:'**',component: Componente0Component}// una ruta de este tipo siempre de ultimo, caso contrario afecta a las otras rutas
  
 
]

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ContactComponent,
    ProductoComponent,
    AdminComponent,
    ReportesComponent,
    CategoriaComponent,
    UserComponent,
    ClienteComponent,
    VendedorComponent,
    EmpresaComponent,
    FilterProductoPipe,
    FiltercategoriaPipe,
    ProformaComponent,
    ProformadetalleComponent,
    FilterEmpresaPipe,
    AdminClienteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MiCuentaComponent,
    VerificarComponent,
    ProductoDetalleComponent,
    ContactoComponent,
    Pagina404Component,
    SeccionPricipalComponent,
 
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule, //aqui tambien lo añadimos
    FormsModule ,         //aqui tambien
    //aqui agregamos esta funcion y le pasmos nuestro array de rutas -> routes declarado arriba
    RouterModule.forRoot(routes),
    
     BrowserAnimationsModule, // required animations module
     ToastrModule.forRoot() // ToastrModule added
   
  ],
  providers: [PersonaService,CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
