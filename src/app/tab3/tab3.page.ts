import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toastController: ToastController) {}
  async toast() {
    const toast = await this.toastController.create({
      message: 'Thank you for your valuable feedback.',
      duration: 3000,
  
    });
    toast.present();
  }

}
