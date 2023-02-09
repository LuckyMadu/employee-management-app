import Express from "express";
import EmployeeRepo from '../repository/employee_repo'


const getAllEmployeeService = (req: Express.Request, res: Express.Response) => EmployeeRepo.getAllEmployeeRepo(req,res)

export default {
    getAllEmployeeService,
};
