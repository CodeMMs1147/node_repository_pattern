import "./load-env-vars";

import express from "express";

import { config } from "./config";
import { healthRouter } from "./health/health-router";
<<<<<<< HEAD
=======
import { userRouter } from "./users/user-router";
>>>>>>> 2f8eb19e22ae4a1c9d6b5b0e78a53e4ddc5d70b2

function boostrap() {
  const app = express();

  app.use(express.json());
  app.use("/health", healthRouter);
<<<<<<< HEAD
=======
  app.use("/user", userRouter);
>>>>>>> 2f8eb19e22ae4a1c9d6b5b0e78a53e4ddc5d70b2

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Started application on port ${port}`);
  });
}

boostrap();
