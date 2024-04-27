import { ClientAccount } from "@/models";
import * as yup from "yup";

export const clientValidatorSchema = yup
  .object({
    name: yup.string().required("Name is required."),
    description: yup
      .string()
      .required("Description is required.")
      .test(
        "len",
        "Description must not be longer than 120 characters",
        (val) => !(val.length > 120)
      )
      .test(
        "len",
        "Description must be at least 5 characters long",
        (val) => !(val.length < 5)
      ),
    accountType: yup.mixed<ClientAccount>().oneOf(Object.values(ClientAccount)),
    status: yup.string(),
    contacts: yup.string(),
  })
  .required();
