import { Client } from "@/models";
import { FC } from "react";
import { CLIENT_ACCOUNT_LABELS, CLIENT_STATUS_LABELS } from "@/consts";
import styles from "./index.module.scss";

type Props = Omit<Client, "id" | "contacts">;

export const ClientCard: FC<Props> = ({
  name,
  description,
  accountType,
  status,
}) => (
  <div className={styles.ClientCard}>
    <h4>
      {name}
      <br />
      <small>
        Status:{" "}
        <span className={styles[status]}>{CLIENT_STATUS_LABELS[status]}</span>
        {" - "}
        Account Type: <span>{CLIENT_ACCOUNT_LABELS[accountType]}</span>
      </small>
    </h4>
    <p>{description}</p>
  </div>
);
