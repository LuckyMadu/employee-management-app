import Express from "express";
import EmployeeRepo from '../repository/employee_repo'


const viewAllEmployeesControllerService = (req: Express.Request, res: Express.Response) => EmployeeRepo.viewAllEmployeesControllerRepo(req,res)

export default {
    viewAllEmployeesControllerService,
};
