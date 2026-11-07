function parseTime(timeString) {
  const timeArray = timeString.split(':');

  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
}

function isWithinWorkingDay(startWorkDay, endWorkDay, startMeeting, durationMeeting) {
  startWorkDay = parseTime(startWorkDay);
  endWorkDay = parseTime(endWorkDay);
  startMeeting = parseTime(startMeeting);
  const endMeeting = startMeeting + durationMeeting;

  if (startMeeting < startWorkDay) {
    return false;
  }

  if (endMeeting > endWorkDay) {
    return false;
  }

  return true;
}

// eslint-disable-next-line no-console
console.info(isWithinWorkingDay('08:00', '17:30', '14:00', 90));
// eslint-disable-next-line no-console
console.info(isWithinWorkingDay('8:0', '10:0', '8:0', 120));
// eslint-disable-next-line no-console
console.info(isWithinWorkingDay('08:00', '14:30', '14:00', 90));
// eslint-disable-next-line no-console
console.info(isWithinWorkingDay('14:00', '17:30', '08:0', 90));
// eslint-disable-next-line no-console
console.info(isWithinWorkingDay('8:00', '17:30', '08:00', 900));
