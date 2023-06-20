function sendGetRequest() {
    const url = 'https://api.example.com/data';
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', url, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response); // You can process the response data here
      } else {
        console.error('Request failed. Status:', xhr.status);
      }
    };
  
    xhr.onerror = function() {
      console.error('Request failed. An error occurred.');
    };
  
    xhr.send();
  }