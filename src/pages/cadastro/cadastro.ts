import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
public user;


  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.user={};
}

chamarTelaLogin(){
   this.navCtrl.pop();
 }

cadastrar(){
  console.log(this.user);
  this.http.post('http://localhost:8080/userControlService/resource/usuario/cadastrar', this.user).map(res => res.json()).subscribe(data => {
      this.user = {};
      this.chamarTelaLogin();
  });
}



}
