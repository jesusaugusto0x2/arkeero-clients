"use client";

import { ClientForm } from "@/components";
import { Tabs } from "@/components/tabs";
import { TabPane } from "@/components/tabs/tab-pane";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { ClientsActions } from "@/redux/clients/actions";
import { ClientInput } from "@/models";
import styles from "./index.module.scss";

export const NewClient: FC = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.NewClient}>
      <h1>Create a new client!</h1>
      <Tabs>
        <TabPane title="Client One">
          <ClientForm
            onFormValuesChange={(values) =>
              dispatch(
                ClientsActions.updateClientOneInput(values as ClientInput)
              )
            }
          />
        </TabPane>
        <TabPane title="Client Two">
          <ClientForm />
        </TabPane>
      </Tabs>
    </section>
  );
};
