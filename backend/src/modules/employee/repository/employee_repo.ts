import Express from "express";

import { Employee } from "../../../models/Employee";
import commonResponseType from "../../../static/static.json";

const getAllEmployeeRepo = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const data = await Employee.find({});
    return data;
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_INTERNAL_SERVER_ERROR)
      .json(err);
  }
};

const addEmployeeRepo = async (req: Express.Request, res: Express.Response) => {
  try {
    console.log("req---------", req);
    const data = await Employee.create(req.body);
    return data;
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_INTERNAL_SERVER_ERROR)
      .json(err);
  }
};

export default {
  getAllEmployeeRepo,
  addEmployeeRepo,
};
