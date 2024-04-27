import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "@/components/inputs";
import { Button } from "@/components/button";
import styles from "./index.module.scss";
import { handleClientData } from "@/app/actions";

type Props = {
  onSubmit: SubmitHandler<any>;
};

export const ClientForm: FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, control, reset } = useForm<any>({
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
      <Button text="Save Client" type="submit" />
    </form>
  );
};
