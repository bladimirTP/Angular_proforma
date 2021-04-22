import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onRegister(form): void{
    console.log(form.value);
    this.authservice.register(form.value).subscribe(res=>{
      if (!this.authservice.getToken()) {
          console.log(res);
      }else{
           this.router.navigateByUrl('/login');
           console.log("logueado");
      }
   
    })
  }

}
