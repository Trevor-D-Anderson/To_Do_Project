require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// setting up express
const app = express();
const port = 8000;

// enabling cors and json
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json(), express.urlencoded({ extended: true }));

// enabling cookie parser to decode contents of cookies
app.use(cookieParser());

// project specific requirements
require("./config/mongoose.config");

// routes
require("./routes/user.routes")(app);
require("./routes/goal.routes")(app);
require("./routes/comment.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
