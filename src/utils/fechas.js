export const MESES = [
  'Enero',
  'Febero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]
export function formatearFecha (fechaString) {
  const fecha = new Date(fechaString)
  const mes = MESES[fecha.getMonth()]
  return `${mes} ${fecha.getDate()},  ${fecha.getFullYear()}`
}
