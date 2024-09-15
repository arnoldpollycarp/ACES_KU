const { app } = require("./../app");
const authRouter = require("./../controllers/authController");
app.use([authRouter]);
