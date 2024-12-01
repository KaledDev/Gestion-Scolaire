import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-enseignants',
  templateUrl: './gestion-enseignants.page.html',
  styleUrls: ['./gestion-enseignants.page.scss'],
})
export class GestionEnseignantsPage implements OnInit {

  teacher = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }

  async addTeacher() {
    if (this.teacher.email && this.teacher.password) {
      this.http.post('http://localhost/iamBD/add_teacher.php', this.teacher).subscribe(
        async (response: any) => {
          const alert = await this.alertCtrl.create({
            header: response.success ? 'Succès' : 'Erreur',
            message: response.message,
            buttons: ['OK'],
          });
          await alert.present();
        },
        async (error) => {
          const alert = await this.alertCtrl.create({
            header: 'Erreur',
            message: 'Impossible de se connecter au serveur.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  ngOnInit() {
  }

}
