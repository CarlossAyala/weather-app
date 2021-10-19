const fs = require('fs');

const path = './.env';
const vars = `LOCATION_API_KEY=${process.env.LOCATION_API_KEY}\n
              USER_API_WEATHER=${process.env.USER_API_WEATHER}\n 
              PASSWORD_API_WEATHER=${process.env.PASSWORD_API_WEATHER}`;

fs.writeFileSync(path, vars);
