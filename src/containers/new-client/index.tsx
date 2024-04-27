"use client";

import { ClientForm } from "@/components";
import { Tabs } from "@/components/tabs";
import { TabPane } from "@/components/tabs/tab-pane";
import { FC } from "react";
import styles from "./index.module.scss";

export const NewClient: FC = () => (
  <section className={styles.NewClient}>
    <h1>Create a new client!</h1>
    <Tabs>
      <TabPane title="Client One">
        <ClientForm />
      </TabPane>
      <TabPane title="Client Two">Client Two</TabPane>
    </Tabs>
  </section>
);
