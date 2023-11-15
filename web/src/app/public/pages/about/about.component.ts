import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  username: string = '';
  password: string = '';

  login() {
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, verificar las credenciales en un servicio.
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Redirige al usuario a la página de inicio después del inicio de sesión exitoso.
      // Puedes usar Angular Router para esto.
    } else {
      alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  }
}

