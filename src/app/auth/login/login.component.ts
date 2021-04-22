import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form): void{
    console.log(form.value);
    this.authservice.login(form.value).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/principal');
    })
  }

}
