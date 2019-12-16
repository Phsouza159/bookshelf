import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async confirm(headerText: string, mensagem: string, cancel, confirm) {
    const alert = await this.alertController.create({
      header: headerText,
      message: mensagem,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: cancel
        }, {
          text: 'Sim',
          handler: confirm
        }
      ]
    });

    await alert.present();
  }
}