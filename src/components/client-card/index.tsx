import { Client } from "@/models";
import { FC } from "react";
import { CLIENT_ACCOUNT_LABELS, CLIENT_STATUS_LABELS } from "@/consts";
import { Button } from "../button";
import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  client: Client;
  onEdit?: (client: Client) => void;
};

export const ClientCard: FC<Props> = ({ client, onEdit }) => (
  <div className={styles.ClientCard}>
    <div className={styles.headerWrapper}>
      <h4>
        {client.name}
        <br />
        <small>
          Status:{" "}
          <span className={styles[client.status]}>
            {CLIENT_STATUS_LABELS[client.status]}
          </span>
          {" - "}
          Account Type: <span>{CLIENT_ACCOUNT_LABELS[client.accountType]}</span>
        </small>
      </h4>
      <Button
        variant="link"
        icon={
          <Image
            src="/images/icons/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        }
        onClick={() => onEdit?.(client)}
      />
    </div>
    <p>{client.description}</p>
  </div>
);
