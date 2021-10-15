const fs = require('fs');

fs.writeFileSync('./.env', `WEATHER_API_KEY=${process.env.WEATHER_API_KEY}\n  LOCATION_API_KEY=${process.env.LOCATION_API_KEY}\n `);
