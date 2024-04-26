"use client";

import {
  Button,
  ClientCard,
  Modal,
  Tabs,
  TextArea,
  TextInput,
} from "@/components";
import { TabPane } from "@/components/tabs/tab-pane";
import { useApiCall } from "@/hooks";
import { Client, ClientAccount, ClientStatus } from "@/models";
import { useState } from "react";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const { data, loading, error } = useApiCall<Client[]>(
    process.env.NEXT_PUBLIC_BASE_URL
  );

  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Error</main>;
  }

  return (
    <main>
      <ul>
        {data?.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
      <Button
        text="Show Modal"
        onClick={() => setModalVisible((prevState) => !prevState)}
      />
      <TextInput />
      <TextArea rows={5} />
      <ClientCard
        name="Test Client"
        accountType={ClientAccount.BASIC}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        status={ClientStatus.ACTIVE}
      />
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onButtonClick={() => setModalVisible(false)}
      >
        <h1>Hola</h1>
      </Modal>

      <Tabs>
        <TabPane title="First Element">
          <h1>First</h1>
        </TabPane>
        <TabPane title="Second Element">
          <h1>Second</h1>
        </TabPane>
      </Tabs>
    </main>
  );
}
