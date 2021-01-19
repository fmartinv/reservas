
/**
 * Representa una sala de ensayo
 */

export interface ISala {
  name: string;
  
  horarios: IReservas[];
}

/**
 * Es un objeto que tiene dos propiedades son horario y el usuario asignado
 */

export interface IReservas {
  /**
   * rango de horarios para la sala
   */
  rango: string;
  /**
   * usuario asignado a la reserva
   */
  user: string;
}