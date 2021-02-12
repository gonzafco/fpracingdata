import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <header className={styles.headerWrapper}>
      <div className={[styles.wrapper, styles.wrapperRounded].join(" ")}>
        <p className={styles.primaryText}>
          Diagnóstico y puesta en marcha a distancia.
        </p>
        <p className={styles.secondaryText}>
          Servicio especializado para talleres y mecánicos.
        </p>
      </div>
      <div className={styles.headerDecoration}>
        <Image
          src="/assets/images/heroimage.jpg"
          layout="fixed"
          width={600}
          height={350}
        />
      </div>
    </header>
  );
}
