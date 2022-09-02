const express = require("express");
const AppError = require("./errors/AppError");

const app = express();
const router = require("./routes");

app.use(express.json());
app.use(router);
app.use((error, request, response, next) => {
  console.error(error);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 500,
    message: "Internal server error",
  });
});

app.listen(3333, () => console.log("listening on port 3000"));
