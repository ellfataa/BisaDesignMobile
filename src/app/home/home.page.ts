import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nama = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.nama = this.authService.nama;
  }

  ngOnInit() {}

  async logout() {
    this.authService.logout();
    await this.presentLogoutAlert();
    this.router.navigateByUrl('/login');
  }

  async presentLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Anda berhasil logout.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
