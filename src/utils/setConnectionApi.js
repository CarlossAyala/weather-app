/* eslint-disable consistent-return */
/* headers: new Headers({
  'Authorization': 'Basic '+btoa('username:password'),
}),
 */

async function setConnectionApi() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Access-Control-Allow-Origin', '*');

  const data = JSON.stringify({
    'user': 'infocarlosayala',
    'password': 'a9GUrj13dW3q',
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  fetch('https://fnw-us.foreca.com/authorize/token?expire_hours=1', requestOptions)
    .then((response) => {
      response.text();
      console.log(response);
    })
    .then((token) => {
      localStorage.setItem('token', token);
    })
    .catch((error) => console.log('error', error));
}
export default setConnectionApi;
