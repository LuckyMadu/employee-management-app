import Express from "express";
import EmployeeRepo from "../repository/employee_repo";

const getAllEmployeeService = (req: Express.Request, res: Express.Response) =>
  EmployeeRepo.getAllEmployeeRepo(req, res);
const addEmployeeService = (req: Express.Request, res: Express.Response) =>
  EmployeeRepo.addEmployeeRepo(req, res);

export default {
  getAllEmployeeService,
  addEmployeeService,
};
