import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatInPage } from '../chat-in/chat-in';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  ChatIn(){
    this.navCtrl.push(ChatInPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Chat Encerrado!',
      subTitle: 'O chat com cliente foi encerrado',
      buttons: ['OK']
    });
    alert.present();
  }
}

