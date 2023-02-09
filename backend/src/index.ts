import type { ErrorRequestHandler } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

import connectDB from "./config/db";
import { commonResponse } from "./utils/response";
import commonResponseType from "./static/static.json";
import { employeeRouter } from "./modules/employee/routers/employee_route";
import { healthcheckRouter } from "./modules/healthcheck/routers/healthcheck_route";

//defined port
const PORT = 3000;
const app = express();

// configure env variables
dotenv.config();

//connect database
connectDB();

// enable cors
app.use(cors());
app.use(express.json());

//health check API
app.use("/", healthcheckRouter);
// Employee route
app.use("/employee", employeeRouter);

// error handling function
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // render the error page
  let response = commonResponse(
    commonResponseType.RESPONSE_SUCCESS.FALSE,
    {},
    commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
    {}
  );
  return res
    .status(commonResponseType.HTTP_RESPONSE.HTTP_BAD_REQUEST)
    .json(response);
};

// error handler middleware
app.use(errorHandler);

//swagger documentation
//swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Management Project",
      version: "1.0.0",
      description:
        "Backend server build with nodeJS and mongoDB using REST API",
      contact: {
        name: "Lahiru Amaratunga",
        email: "lahiruamarathunga526@gmail.com",
      },
    },

    servers: [
      {
        url: "http://localhost:3000/",
        description: "Development server",
      },
    ],
  },
  apis: ["./modules/employee/routers/employee_route"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT || PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);