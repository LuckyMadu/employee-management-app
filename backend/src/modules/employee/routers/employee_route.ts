import express from 'express';
import employeeController from '../controllers/employee_controller'

const router = express.Router();

/**
 * @swagger
 * /employee/list
 *  get:
 *   summary: get all employee list
 *   tags: [employee]
 *   description: get all employee list
 *
 *
 *   responses:
 *    200:
 *     description: Employee list retrieve successfully
 *    400:
 *      description: Employee list retrieve failed
 *    500:
 *     description : error
 */
router.get('/list', employeeController.viewAllEmployeesController);

const employeeRouter = router
export {employeeRouter}