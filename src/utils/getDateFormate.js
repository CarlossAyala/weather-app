function getDay(dayInNumber) {
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  return days[dayInNumber];
}
function getDayInNumber(date) {
  return date.slice(8, 10);
}

export function getDayFormate(date) {
  // Output expected --> Lunes (Example)
  const dateToFormate = new Date(date);
  const dayIndex = dateToFormate.getDay();
  const dayName = getDay(dayIndex);

  return dayName;
}

export function dayNumberMonthString(date) {
  // Output expected --> 15 Oct (Example)
  const dateToFormate = new Date(date);
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Agos',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIndex = dateToFormate.getMonth();
  const monthName = months[monthIndex];
  const dayNumber = getDayInNumber(date);

  return `${dayNumber} ${monthName}`;
}
// Output expected --> 12:15 (Example)
export const getHours = (date) => date.slice(11, 16);

export function getTimeCurrent(date) {
  // Output expected --> Lunes 10, 12:15 (Example)
  const dayString = getDayFormate(date);
  const dayNumber = getDayInNumber(date);
  const hours = getHours(date);

  return `${dayString} ${dayNumber}, ${hours}`;
}
