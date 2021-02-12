import styles from "./SectionServices.module.scss";
import Image from "next/image";

export default function SectionServices({ title, text, id = props }) {
  return (
    <section id={`${id}`} className={styles.sectionServices}>
      <Image
        src="/assets/images/TeamWorkMonochromatic.svg"
        alt="Trabajo en equipo"
        width={300}
        height={300}
      />
      <div className={styles.sectionText}>
        <span className={styles.sectionTitle}>{title}</span>
        <span className={styles.sectionText}>{text}</span>
      </div>
    </section>
  );
}
