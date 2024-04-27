import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Select, TextArea, TextInput } from "@/components/inputs";
import { Button } from "@/components/button";
import { handleClientData } from "@/app/actions";
import { CLIENT_ACCOUNT_OPTIONS } from "@/consts";
import styles from "./index.module.scss";

export const ClientForm: FC = () => {
  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      name: "",
    },
  });

  const action: () => void = handleSubmit(async (data) => {
    await handleClientData(data);
  });

  return (
    <form className={styles.ClientForm} action={action}>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextInput {...field} />}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextArea {...field} />}
      />
      <Controller
        name="accountType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select {...field} options={CLIENT_ACCOUNT_OPTIONS} />
        )}
      />
      <Button text="Save Client" type="submit" />
    </form>
  );
};
