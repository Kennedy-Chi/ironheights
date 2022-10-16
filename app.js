const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const drawingRouter = require("./routes/drawingRoutes");
const viewRouter = require("./routes/viewRoutes");
const goodsRouter = require("./routes/goodsRoutes");
const salesRouter = require("./routes/salesRoutes");
const projectRouter = require("./routes/projectRoutes");
const settingsRouter = require("./routes/settingsRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// app.engine(
//   "hbs",
//   handlebars.engine({
//     layoutsDir: `${__dirname}/views/layouts`,
//     extname: "hbs",
//     defaultLayout: "index",
//     partialsDir: [
//       //  path to your partials
//       path.join(__dirname, "views/partials"),
//     ],
//   })
// );
// app.set("view engine", "hbs");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan
// define first route

app.use("/api/v1/validate", viewRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/drawings", drawingRouter);
app.use("/api/v1/goods", goodsRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/sales", salesRouter);
app.use("/api/v1/settings", settingsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dist/")));
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
}
app.use(globalErrorHandler);

module.exports = app;
