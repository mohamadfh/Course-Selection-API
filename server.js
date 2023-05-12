const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// set port, listen for requests
const PORT = process.env.PORT || 8080;

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

//require("./app/routes/user.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/ITmanager.routes.js")(app);
require("./app/routes/professor.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/course.routes")(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});