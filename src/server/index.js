const { app } = require('../middlewares/index')
function initServer() {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started in port ${port}`)
    })
}
module.exports = {
    initServer
}