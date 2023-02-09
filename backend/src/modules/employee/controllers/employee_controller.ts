import Express from "express";

import { commonResponse } from "../../../utils/response";
import * as commonResponseType from "../../../static/static.json";
import EmployeeService from '../services/employee_service'

const viewAllEmployeesController = async (req: Express.Request, res: Express.Response) => {
  try {
    const data = await EmployeeService.viewAllEmployeesControllerService(req,res);

    console.log("data---------",data);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      {
        data,
      },
      "",
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
  viewAllEmployeesController,
};
