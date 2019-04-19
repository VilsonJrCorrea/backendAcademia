require('dotenv').config();
const { connectToDB } = require('./db/index')
const { initMiddlewares } = require('./middlewares/index')
const { initServer } = require('./server/index')

connectToDB();
initMiddlewares();
initServer();