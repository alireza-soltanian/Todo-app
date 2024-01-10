import { object, string, number } from "yup";


const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const registerSchema = object().shape({
  name: string().min(3).max(12).required(),
  email: string().email().required(),
  gender: string(),
  phone: number().required(),
  idcard: number().required(),
  address: string(),
  Password: string().required().matches(passwordRegex),
});

export default registerSchema;
