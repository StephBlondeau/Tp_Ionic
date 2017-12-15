import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-association',
  templateUrl: 'association.html',
})
export class AssociationPage {

  contact = {
    lastname: '',
    firstname: '',
    message: ''
  };

  email = {
    to: 'stephanie.blondeau@laposte.net',
    cc: 'stephanie.blondeau@ynov.com',
    bcc: ['stephanie.blondeau@fobware.com'],
    subject: 'Cordova Mails',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) { }

  sendMail(form) {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    this.emailComposer.open({
      app: 'gmail',
      to: 'stephanie.blondeau@laposte.net',
      subject: 'Association prise de Contact',
      body: `Bonjour
      ${this.contact.message}

      ${this.contact.firstname}  ${this.contact.lastname}`,
      isHtml: true
    });
  }
}
