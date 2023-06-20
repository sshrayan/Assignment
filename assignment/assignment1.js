function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  }
  function displayCurrentDayOfWeek() {
    const currentDate = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = currentDate.toLocaleDateString('en-US', options);
  
    console.log('The current day of the week is: ' + dayOfWeek);
  }
  console.log(getDayOfWeek('2023-06-19'));
  displayCurrentDayOfWeek();