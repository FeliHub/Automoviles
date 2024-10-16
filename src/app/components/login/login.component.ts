import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent  implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit() {}

  async login() {
    try{
      await this.authService.login(this.email, this.password);
      alert("Ha entrado a su cuenta");
      this.router.navigate(['/index']);

    }catch(error){
      console.error("Ha ocurrido un error con el login:  " +error);
    }
  }//fin de Login

  async register(){
    try{
      await this.authService.register(this.email, this.password);
      alert("Usuario registrado exitosamente");

    }catch(error){
      console.error("Ha ocurrido un problema con el registro:  " +error);
    }
  }//fin de Register
}