import { Schema, model } from "mongoose";

interface IEmployee {
  first_name: string;
  last_name: string;
  email?: string;
  number?: string;
  gender?: string;
  photo?: string;
}

const employeeSchema = new Schema<IEmployee>(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = model<IEmployee>("employees", employeeSchema);
export { Employee };
