import Express from "express";

import { commonResponse } from "../../../utils/response";
import * as commonResponseType from "../../../static/static.json";
import EmployeeService from "../services/employee_service";

const getAllEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const data = await EmployeeService.getAllEmployeeService(req, res);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      data,
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_FETCH_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const addEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const data = await EmployeeService.addEmployeeService(req, res);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      data,
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REGISTER_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

export default {
  getAllEmployeeController,
  addEmployeeController,
};
