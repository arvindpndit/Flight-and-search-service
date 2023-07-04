const express = require("express");

const PORT = 3000;

const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
