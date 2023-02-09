import express from 'express';
import EmployeeController from '../controllers/employee_controller'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: The employee managing API
 * /employee/list:
 *   get:
 *     summary: Get all employee list
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: Employee list fetched successfully!
 *       400:
 *         description: Employee list fetched failed!
 *       500:
 *         description: Some server error!
 *
 */
router.get('/list', EmployeeController.getAllEmployeeController);

const employeeRouter = router
export {employeeRouter}