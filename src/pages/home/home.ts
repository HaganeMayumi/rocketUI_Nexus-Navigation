import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { animationsList } from '../../app/animations';
import { FaqPage } from '../faq/faq';
import { ChatPage } from '../chat/chat';
import{ProdutosPage} from '../produtos/produtos';
import{UsuariosPage} from '../usuarios/usuarios';
import{HistoricoPage} from '../historico/historico';
import{ AuditoriaPage} from '../auditoria/auditoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: animationsList
})
export class HomePage {
  isOpen: boolean;
  startAnim: string;
  public tap: number = 0;

  constructor(public navCtrl: NavController) {

  }

  openNexus() {
    this.isOpen = !this.isOpen;
  }

  animStart(e) {
    console.log(e);

  }
  animEnd(e) {
    console.log(e);
    this.startAnim = 'animate-running';
  }
  Faq() {
    this.navCtrl.push(FaqPage);
  }
  Chat() {
    this.navCtrl.push(ChatPage);
  }
  goToAuditoria() {
    this.navCtrl.push(AuditoriaPage);
  }
  goToUsuarios() {
    this.navCtrl.push(UsuariosPage);
  }
  goToHistorico() {
    this.navCtrl.push(HistoricoPage);
  }
  details() {
    this.navCtrl.push(ProdutosPage);
  }
  aumentar(e) {
    this.tap++
  }
  diminuir(e) {
    this.tap--
  }
}
