import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact = {
    lastname: '',
    firstname: '',
    message: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer) {
  }

  sendMail(form) {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    this.emailComposer.open({
      app: 'gmail',
      to: 'alvin.berthelot@webyousoon.com',
      subject: 'Contact Association',
      body: `Hello,
      ${this.contact.message}

      ${this.contact.firstname}  ${this.contact.lastname}`,
      isHtml: true
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
