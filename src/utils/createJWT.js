/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
async function createJWT() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const data = JSON.stringify({
    'user': `${process.env.USER_API_WEATHER}`,
    'password': `${process.env.PASSWORD_API_WEATHER}`,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };

  fetch('https://weather-app-own.herokuapp.com/https://fnw-us.foreca.com/authorize/token?expire_hours=2', requestOptions)
    .then((response) => response.body)
    .then((body) => {
      const reader = body.getReader();

      return new ReadableStream({
        start(controller) {
          return pump();

          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close();
                return;
              }

              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.json())
    .then((info) => {
      localStorage.removeItem('tokenW');
      localStorage.setItem('tokenW', (info.access_token));
    })
    .catch((err) => console.error(err));
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response/body

export default createJWT;
