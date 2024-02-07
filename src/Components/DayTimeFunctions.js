function generateTime(date) {
  let now = new Date(date * 1000);
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  return `${currentHours}:${currentMinutes}`;
}

function generateDay(date) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date(date * 1000);
  let currentDay = daysOfWeek[now.getDay()];
  return currentDay;
}

export { generateTime, generateDay };
