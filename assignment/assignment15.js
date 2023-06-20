function sendPostRequest() {
    const url = 'https://api.example.com/submit';
    const data = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
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
  
    xhr.send(JSON.stringify(data));
  }
  