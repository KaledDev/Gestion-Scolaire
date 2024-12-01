import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  username = '';
  password = '';
  apiUrl = 'http://localhost/iamBD/connexion.php'; // Remplacez par l'URL de votre API

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}

  async login() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Tous les champs sont obligatoires',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Effectuer une requête POST
    this.http.post(this.apiUrl, { username: this.username, password: this.password })
      .subscribe(
        async (response: any) => {
          if (response.status === 'success') {
            const alert = await this.alertController.create({
              header: 'Succès',
              message: 'Connexion réussie',
              buttons: ['OK'],
            });
            await alert.present();

            // Redirection selon le rôle
            if (response.role === 'responsable') {
              this.router.navigate(['tabs'])
            } else if (response.role === 'enseignant') {
              this.router.navigate(['accueil-enseignant'])
            }
          } else {
            const alert = await this.alertController.create({
              header: 'Erreur',
              message: response.message,
              buttons: ['OK'],
            });
            await alert.present();
          }
        },
        async (error) => {
          const alert = await this.alertController.create({
            header: 'Erreur',
            message: 'Erreur de connexion au serveur',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
  }
}
