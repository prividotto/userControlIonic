import { Component } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CadastroPage } from '../cadastro/cadastro';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public user;
//public usuario;
  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.user={};
  }

cadastrarNovo(){
  this.navCtrl.push(CadastroPage);
}

chamarList(){
  this.navCtrl.push(ListaPage);
}

login(){
  this.http.post('http://localhost:8080/userControlService/resource/usuario/login', this.user).map(res => res.json()).subscribe(data => {
      if (data != false) {
        console.log('Login');
      this.chamarList();
      } else {
          console.log('nao encontrado')
      }
  });
}
}
