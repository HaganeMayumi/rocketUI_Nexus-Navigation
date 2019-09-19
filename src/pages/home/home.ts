import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  animationsList } from '../../app/animations';
import { FaqPage } from '../faq/faq';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: animationsList
})
export class HomePage {
  isOpen: boolean;
  startAnim:string;

  constructor(public navCtrl: NavController) {

  }

  openNexus(){
    this.isOpen = !this.isOpen;
  }

  animStart(e){
    console.log(e);

  }
  animEnd(e){
    console.log(e);
    this.startAnim='animate-running';
  }
  Faq(){
    this.navCtrl.push(FaqPage);
  }
  Chat(){
    this.navCtrl.push(ChatPage);
  }
}
