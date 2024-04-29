"use client";

import { Button, ClientForm } from "@/components";
import { Tabs } from "@/components/tabs";
import { TabPane } from "@/components/tabs/tab-pane";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClientsActions } from "@/redux/clients/actions";
import { ClientInput } from "@/models";
import styles from "./index.module.scss";
import { ClientSelectors } from "@/redux/clients/selectors";
import Link from "next/link";

export const NewClient: FC = () => {
  const dispatch = useDispatch();
  const clientOneInput = useSelector(ClientSelectors.selectClientOneInput);

  return (
    <section className={styles.NewClient}>
      <div className={styles.sectionHeader}>
        <h1>Create a new client!</h1>
        <Link href="/clients" passHref>
          <Button text="Go to clients" />
        </Link>
      </div>
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
          <ClientForm
            canPerformForcedUpdate
            forcedUpdateInput={clientOneInput}
          />
        </TabPane>
      </Tabs>
    </section>
  );
};
