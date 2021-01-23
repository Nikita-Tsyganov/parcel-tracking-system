# parcel-tracking-system

## Build Setup

```bash
# install dependencies
$ npm install

# create .env file in the root of the project using this template
PORT = 5000
DB_HOST = "YOUR_DB_IP"
DB_PORT = YOUR_DB_PORT
DB_NAME = "YOUR_DB_NAME"
DB_USERNAME = "YOUR_USERNAME"
DB_PASSWORD = "YOUR_PASSWORD"

# run migrations (run this only if your database is empty)
npx sequelize-cli db:migrate

# run seeds (run this only if your database is empty)
npx sequelize-cli db:seed:all

# run server with hot reload at localhost:5000
$ npm run devserver

# serve frontend with hot reload at localhost:4000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
