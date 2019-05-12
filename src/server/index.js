const { app } = require('../middlewares/index')
function initServer() {
  const port = process.env.PORT || 4200
  app.listen(port, () => {
    console.log(`Server started in port ${port}`)
  })
}
module.exports = {
  initServer
}