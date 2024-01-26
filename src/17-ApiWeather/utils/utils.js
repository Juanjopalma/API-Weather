export const obtenerFecha = (string) => {
  if (string) {
    const string_splited = string.split(' ');
    return string_splited[0];
  }
}

export const obtenerHora = (string) => {
  if (string) {
    const string_splited = string.split(' ');
    return string_splited[1].slice(0, -3);
  }
}

export const formatearFecha = (string) => {
  if (string) {
    const string_splited = string.split(' ');
    const fecha = new Date(string_splited);

    // Obtener el día en número
    const dia = fecha.getDate();

    // Obtener el nombre del mes
    const opciones = { month: 'short' };
    const nombreMes = fecha.toLocaleDateString('es-ES', opciones);

    return `${dia} - ${nombreMes}`;
  }
}
