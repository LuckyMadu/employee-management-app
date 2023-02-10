import express from "express";
import EmployeeController from "../controllers/employee_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Employee
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
router.get("/list", EmployeeController.getAllEmployeeController);

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Add new employee
 * /employee:
 *   post:
 *     summary: Add new employee
 *     tags: [Employee]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employee'
 *
 *     responses:
 *       200:
 *         description: Employee added successfully!
 *       400:
 *         description: Employee added failed!
 *       500:
 *         description: Some server error!
 *
 */
router.post("/", EmployeeController.addEmployeeController);

const employeeRouter = router;
export { employeeRouter };
