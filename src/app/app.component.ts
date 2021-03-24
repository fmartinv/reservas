import { Component, OnInit } from '@angular/core';
import { ISala, IReservas } from './types/main-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservas';
  /**
   * Usuario activo actualmente selecionado
   */
  currentUser: string;
  /**
   * Lista de usuarios disponibles.
   */
  users = ['Jimi Hendrix', 'Gustavo Cerati', 'Ricardo Mollo'];


  salas: ISala[];

  ngOnInit() {
    this.currentUser = this.users[0];

    this.salas = [
      {
        name: 'Sala 1',
        horarios: this.getHorarios('LMV'),
      },
      {
        name: 'Sala 2',
        horarios: this.getHorarios('MJS'),
      },
      {
        name: 'Sala 3',
        horarios: this.getHorarios('MJS'),
      },
      {
        name: 'Sala 4',
        horarios: this.getHorarios('LMV'),
      },
    ];

  }
/**
 * 
 * @param event parametro que captura la selección del usuario que ha sido elegido
 */
  changeActiveUser(event) {
    this.currentUser = event.target.value;
  }
  /**
   * Actualiza las reservas con el usuario seleccionado.
   * @param horario el objeto que se va a actualizar con el usuario
   */

  makeReservation(horario) {
    horario.user = this.currentUser;
  }

  /**
   *
   * @param dias Cuando es LMV devuelve los horaios de lunesMiercolesViernes y MJS martesJuevesSabado que son los horarios disponibles.
   */
  private getHorarios(dias: 'LMV' | 'MJS'): IReservas[] {
    const lunesMiercolesViernes: IReservas[] = [
      { rango: 'Lunes 14:00 - 15:00', user: null },
      { rango: 'Miercoles 16:00 - 17:00', user: null },
      { rango: 'Viernes 17:00 - 18:00', user: null },
    ];

    const martesJuevesSabado: IReservas[] = [
      { rango: 'Martes 14:00 - 15:00', user: null },
      { rango: 'Jueves 16:00 - 17:00', user: null },
      { rango: 'Sabado 17:00 - 18:00', user: null },
    ];

    return dias === 'LMV' ? lunesMiercolesViernes : martesJuevesSabado;
  }
}
