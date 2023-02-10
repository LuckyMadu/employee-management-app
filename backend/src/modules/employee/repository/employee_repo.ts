import { EmployeeDTO } from "../../../DTO/Employee.dto";
import { Employee } from "../../../models/Employee";

const getAllEmployeeRepo = async () => {
  return Employee.find({});
};

const addEmployeeRepo = async (requestBody: EmployeeDTO) => {
  return Employee.create(requestBody);
};

const updateEmployeeRepo = async (empId: string, requestBody: EmployeeDTO) => {
  const data = await Employee.create(
    {
      _id: empId,
    },
    { $set: requestBody },
    { new: true }
  );
  return data;
};

export default {
  getAllEmployeeRepo,
  addEmployeeRepo,
  updateEmployeeRepo,
};
