import { Component} from '@angular/core';


interface Producto {
  nombre: string;
  descripcion: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = [];
  productos: Producto[] = [
    {
      nombre: 'Manuel Vargas',
      descripcion: 'Profesor de Aritmetica',
      imagenUrl: 'https://infoes.goconqr.com/files/2017/05/mate12.jpg'
    },
    {
      nombre: 'Giakomo Causso',
      descripcion: 'Profesor de Informática',
      imagenUrl: 'https://www.superprof.es/blog/wp-content/uploads/2021/02/precios-clases-programacion.jpg'
    },
    {
      nombre: 'Jesica Jaramillo',
      descripcion: 'Profesora de Arte',
      imagenUrl: 'https://media.istockphoto.com/id/530007875/es/foto/retrato-de-un-sonriente-empresaria-con-largo-cabello-oscuro.jpg?s=612x612&w=0&k=20&c=f1dvnwkZoKpNydL21-6fWSYtO2BxRVt3FCj5prZIAlc='
    },
    {
      nombre: 'Alessandro Vega',
      descripcion: 'Profesor de Marketing',
      imagenUrl: 'https://www.dimajobs.com/wp-content/uploads/2018/01/foto-profe-min.jpg'
    },
    {
      nombre: 'Juanito Alcachofa',
      descripcion: 'Profesor de Razonamiento matemática',
      imagenUrl: 'https://media.istockphoto.com/id/1153469287/es/foto/foto-de-pasaporte-masculino-frontal-aislado-sobre-fondo-blanco-normalizaci%C3%B3n-de-la-ue.jpg?s=612x612&w=0&k=20&c=jq40kQlLHR7TrKpi46CDVah9Aznt1xoAzrqWF-gz0ZE='
    },
      {
      nombre: 'Maria Magdalena Villar',
      descripcion: 'Profesora de Matemática',
      imagenUrl: 'https://media.istockphoto.com/id/480956708/es/foto/retrato-de-una-mujer-rubia-en-camisa-azul-alem%C3%A1n.jpg?s=612x612&w=0&k=20&c=7uN_a2wb5k0p4t7HQdhCOnXD6ucsW6spz3z96RX9mak='
    },
    {
      nombre: 'Alfredo Cuellar',
      descripcion: 'Profesor de Arte',
      imagenUrl: 'https://media.istockphoto.com/id/453256953/es/foto/retrato-de-un-joven-hombre-profesional.jpg?s=612x612&w=0&k=20&c=EEr1GzpMvg_hbb6Pq9xbe5MYWRLz9LQJnxWTAq68oL0='
    },
    {
      nombre: 'Magdalena Salgado',
      descripcion: 'Profesora de Matemática básica',
      imagenUrl: 'https://media.istockphoto.com/id/486649262/es/foto/pasaporte-imagen-de-una-mujer-moderna-africana.jpg?s=612x612&w=0&k=20&c=WeLCMvNxQRdCStgE3rW2rBL3tcgSQWMACRQJBZ--pLQ='
    },
    {
      nombre: 'Hugo Moro',
      descripcion: 'Profesor de Geografía',
      imagenUrl: 'data:image/jpeg;base64,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'
    },
    {
      nombre: 'Nicole Cardona',
      descripcion: 'Profesora de Trigonometría',
      imagenUrl: 'https://media.istockphoto.com/id/180841890/es/foto/mujer-joven-hispana.jpg?s=612x612&w=0&k=20&c=F5i4z_afRH8nP6k3ca7grr9zCcKEibZ5Ku9FxdPP_IQ=  '
    },
    {
      nombre: 'Mateo Jiménez',
      descripcion: 'Profesor de Geometría',
      imagenUrl: 'https://c8.alamy.com/compes/cfjdy3/retrato-de-un-hombre-barbado-de-mediana-edad-aburrido-cfjdy3.jpg'
    },
    {
      nombre: 'Bernabe Barros',
      descripcion: 'Profesor de Física',
      imagenUrl: 'https://media.istockphoto.com/id/913062404/es/foto/cara-de-hombre-de-negocios-contra-el-fondo-blanco.jpg?s=612x612&w=0&k=20&c=KWNbHS35bjiMRjHFXg5FLCMNOpBI7rTEAfyds_3XQ-8='
    },
    {
      nombre: 'Irati Camacho',
      descripcion: 'Profesor de Lengua y Literatura',
      imagenUrl: 'https://www.usgbc.org/sites/default/files/profiles/para-hombres-j_venes_2.jpg'
    },
    {
      nombre: 'Tamara Duarte',
      descripcion: 'Profesora de Ciencias Sociales',
      imagenUrl: 'https://media.istockphoto.com/id/477815446/es/foto/pasaporte-imagen-de-una-mujer-con-cabello-oscuro-y-blusa.jpg?s=612x612&w=0&k=20&c=Fy0YV5Uk9SKgbJyXrPOvicGIU_CHD84L26qKH7Xt_0U='
    },
    {
      nombre: 'Iago Cerezo',
      descripcion: 'Profesor de Historia',
      imagenUrl: 'https://i.pinimg.com/originals/8c/1b/0e/8c1b0e6e09d8feb1dad6d59a2e96eacc.jpg'
    },
  ];
}
