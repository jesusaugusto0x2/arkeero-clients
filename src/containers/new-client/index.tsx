"use client";

import { ClientForm } from "@/components";
import { Tabs } from "@/components/tabs";
import { TabPane } from "@/components/tabs/tab-pane";
import { FC } from "react";

export const NewClient: FC = () => (
  <section>
    <Tabs>
      <TabPane title="Client One">
        <ClientForm />
      </TabPane>
      <TabPane title="Client Two">Client Two</TabPane>
    </Tabs>
  </section>
);
