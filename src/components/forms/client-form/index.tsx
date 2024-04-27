import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Select, Switch, TextArea, TextInput } from "@/components/inputs";
import { Button } from "@/components/button";
import { handleClientData } from "@/app/actions";
import { CLIENT_ACCOUNT_OPTIONS } from "@/consts";
import { ClientAccount } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientValidatorSchema } from "@/validators/client";
import styles from "./index.module.scss";

export const ClientForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(clientValidatorSchema),
    defaultValues: {
      name: "",
      description: "",
      accountType: ClientAccount.BASIC,
      status: false,
      contacts: "",
    },
  });

  const action: () => void = handleSubmit(async (data) => {
    await handleClientData(data);
  });

  return (
    <form className={styles.ClientForm}>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            {...field}
            label="I. Name"
            placeholder="Ex: Jane Doe"
            error={errors.name?.message as string}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextArea
            {...field}
            label="II. Description"
            placeholder="Ex: I love skating outside and beach sunsets!"
            error={errors.description?.message as string}
          />
        )}
      />
      <Controller
        name="accountType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            label="III. Account Type"
            options={CLIENT_ACCOUNT_OPTIONS}
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => <Switch {...field} label="IV. Active Status" />}
      />
      <Controller
        name="contacts"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label={`V. Contacts - (separated by ",")`}
            placeholder={`Ex: Juan, Camilo, Silvia, Jesus`}
          />
        )}
      />
      <Button text="Save Client" onClick={action} />
    </form>
  );
};
