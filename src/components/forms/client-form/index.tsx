import { FC, useEffect, useState } from "react";
import { Controller, Resolver, useForm } from "react-hook-form";
import { Select, Switch, TextArea, TextInput } from "@/components/inputs";
import { Button } from "@/components/button";
import { handleClientData } from "@/app/actions";
import { CLIENT_ACCOUNT_OPTIONS, CLIENT_FORM_DEFAULT_VALUES } from "@/consts";
import { ClientInput } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientValidatorSchema } from "@/validators/client";
import { Modal } from "@/components/modal";
import styles from "./index.module.scss";

type Props = {
  canPerformForcedUpdate?: boolean;
  forcedUpdateInput?: ClientInput;
  onFormValuesChange?: (input: Partial<ClientInput>) => void;
};

export const ClientForm: FC<Props> = ({
  canPerformForcedUpdate = false,
  forcedUpdateInput,
  onFormValuesChange,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [forcedUpdateVal, setForcedUpdateVal] = useState(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm<ClientInput>({
    resolver: yupResolver(clientValidatorSchema) as Resolver<ClientInput | any>,
    mode: "all",
    defaultValues: CLIENT_FORM_DEFAULT_VALUES,
  });

  useEffect(() => {
    if (!onFormValuesChange) {
      return;
    }

    const subscription = watch((value) => onFormValuesChange(value));

    return () => subscription.unsubscribe();
  }, [watch, onFormValuesChange]);

  const action: () => void = handleSubmit(async (data) => {
    await handleClientData(data);
  });

  const applyForcedUpdate = () => {
    if (!forcedUpdateInput) {
      return;
    }

    Object.keys(forcedUpdateInput).map((key) => {
      const val = forcedUpdateInput[key as keyof ClientInput];
      setValue(key as keyof ClientInput, val);
    });
  };

  return (
    <>
      <form className={styles.ClientForm} onSubmit={(e) => e.preventDefault()}>
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
            <Switch
              {...field}
              value={field.value?.toString()}
              label="IV. Active Status"
            />
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
      {canPerformForcedUpdate && (
        <div className={styles.UpdateValuesDivider}>
          <hr />
          <Switch
            label={
              <span>
                Load values from <strong>Client One</strong> form.{" "}
                <small>(Can only be done once.)</small>
              </span>
            }
            value={forcedUpdateVal.toString()}
            onChange={(e) => {
              const value = e.target.checked;

              if (forcedUpdateVal) {
                return;
              }

              setForcedUpdateVal(value);
              applyForcedUpdate();
            }}
            variant="small"
          />
        </div>
      )}
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
