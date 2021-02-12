import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({ title, text, img = props }) {
  return (
    <div className={styles.Card}>
      <h3 className={styles.CardTitle}>{title}</h3>
      <img height="60" width="60" className={styles.CardImg} src={`data:image/svg+xml;base64,${img}`} />
      <span className={styles.CardText}>{text}</span>
    </div>
  );
}
