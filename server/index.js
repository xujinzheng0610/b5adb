const express = require("express");
const next = require("next");

const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const { parse } = require("url");

const dev = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;

const app = next({ dir: "./app", dev });
const handle = app.getRequestHandler();
const getRoutes = require("./routes/index");
const routes = getRoutes();

const AppRouter = require("./routes/AppRouter");
const models = require("./db/model");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(
      session({
        secret: uuid.v1(),
        name: "sessionId",
        resave: true,
        saveUninitialized: true
      })
    );

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.use(AppRouter);

    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;

      //pull in front end routes and check request against those routes
      const route = routes[pathname];
      if (route) {
        return app.render(req, res, route.page, query);
      }
      handle(req, res);
    });

    models.sequelize.sync().then(function() {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
    });
  })
  .catch(err => {
    console.error(err);
  });
