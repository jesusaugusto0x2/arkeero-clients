import { FC, useState } from "react";
import { Controller, Resolver, useForm } from "react-hook-form";
import { Select, Switch, TextArea, TextInput } from "@/components/inputs";
import { Button } from "@/components/button";
import { handleClientData } from "@/app/actions";
import { CLIENT_ACCOUNT_OPTIONS } from "@/consts";
import { ClientAccount, ClientInput } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientValidatorSchema } from "@/validators/client";
import styles from "./index.module.scss";
import { Modal } from "@/components/modal";

export const ClientForm: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<ClientInput>({
    resolver: yupResolver(clientValidatorSchema) as Resolver<ClientInput | any>,
    mode: "all",
    defaultValues: {
      name: "",
      description: "",
      accountType: ClientAccount.BASIC,
      status: "false",
      contacts: "",
    },
  });

  const action: () => void = handleSubmit(async (data) => {
    await handleClientData(data);
  });

  return (
    <>
      <form
        className={styles.ClientForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          render={({ field }) => (
            <Switch {...field} label="IV. Active Status" />
          )}
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
        <Button
          text="Save Client"
          disabled={!isValid}
          onClick={() => setIsModalVisible(true)}
        />
      </form>
      <Modal
        title="Save Data"
        visible={isValid && isModalVisible}
        onButtonClick={() => {
          setIsModalVisible(false);
          action();
          reset();
        }}
        onClose={() => setIsModalVisible(false)}
      >
        <p>Are you sure to save the client data?</p>
      </Modal>
    </>
  );
};
