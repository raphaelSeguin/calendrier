export const lastDayDate = (day, fromDateObject = new Date() ) => {
  const date     = new Date(fromDateObject);
  const fromDate = date.getDate();
  const fromDay  = date.getDay();
  return new Date((new Date()).setDate(day <= fromDay ? fromDate - fromDay + day : fromDate - fromDay - 7 + day));
}

export const nextDayDate = (day, fromDateObject = new Date() ) => {
  const date     = new Date(fromDateObject);
  const fromDate = date.getDate();
  const fromDay  = date.getDay();
  return new Date( ( new Date() ).setDate(day > fromDay ? fromDate - fromDay + day : fromDate - fromDay + day + 7))
}

export const dateToString = date => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export const dateToTimeString = date => {
  const d = new Date(date);
  const minutes = d.getMinutes();
  return `${d.getHours()}:${minutes < 10 ? '0': ''}${minutes}`;
}

export const followingDays = (n, date = new Date()) => {
  const fromDate = new Date(date).getDate();
  return [...Array(n).fill(0)].map( (_, i) => new Date(new Date(date).setDate(fromDate + i)) )
}