import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Lista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
  private users;
  private pesquisa;

  constructor(public navCtrl: NavController,  public http:Http) {
    this.users = [];
    this.pesquisa = '';
    this.listar();
  }

  listar(){
    this.http.get('http://localhost:8080/userControlService/resource/usuario/listar').map(res => res.json()).subscribe(data => {
      this.users = data;
    });
  }

  buscarPorNome(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8080/userControlService/resource/usuario/buscarPorNome/'+this.pesquisa).map(res => res.json()).subscribe(data => {
      this.users = data;
    });
  }

   buscarPorCPF(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8080/userControlService/resource/usuario/buscarPorCPF/'+this.pesquisa).map(res => res.json()).subscribe(data => {
      this.users = data;
    });
  }

   buscarPorEmail(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8080/userControlService/resource/usuario/buscarPorEmail/'+this.pesquisa).map(res => res.json()).subscribe(data => {
      this.users = data;
    });
  }

}
