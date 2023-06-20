function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
        },
        function(error) {
          console.log('Error occurred. Error code:', error.code);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  getCurrentLocation();
  