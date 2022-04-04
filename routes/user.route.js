module.exports = (app) => {
    const user = require("../controllers/user.controller");
    const router = require("express").Router();
    // Create a new User
    router.post("/", user.create);

    app.use("/api/user", router);
};
