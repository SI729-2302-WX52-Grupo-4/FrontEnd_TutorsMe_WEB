export class Appointment {
  id: number;
  curso: string;
  nombredocente: string;
  diasdeclase: string;
  tareasasignadas: number;
  constructor() {
    this.id = 0;
    this.curso = '';
    this.nombredocente = '';
    this.diasdeclase = '';
    this.tareasasignadas = 0;
  }
}
