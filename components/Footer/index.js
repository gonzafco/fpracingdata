import styles from "./Footer.module.scss";
import Link from "next/link";
export default function Footer({ nav } = props) {
  return (
    <footer className={styles.Footer}>
      <nav className={styles.FooterNav}>
        {nav.map((value, key) => (
          <Link href={`#${value}`}>
            <li className={styles.FooterNavItem}>{value}</li>
          </Link>
        ))}
      </nav>
      <div className={styles.FooterBrandContainer}>
        <span className={styles.FooterBrand}>FP RACING DATA</span>
        <span className={styles.FooterText}>
          La mejor atención 100% garantizada
        </span>
      </div>
      <div className={styles.FooterContactInfo}>
        <div className={`${styles.ItemContactInfo} ${styles.Cellphone}`}>
          <Link className={styles.contact} href="https://api.whatsapp.com/send?phone=5491157133502&text=Hola,%20lo%20contacto%20a%20traves%20de%20su%20web%20por%20asesoramiento">
            <span> +54 9 11 5713-3502</span>
          </Link>
        </div>
        <div className={`${styles.ItemContactInfo} ${styles.Cellphone}`}>
          <span>fpracing@gmail.com</span>
        </div>
        <div className={`${styles.ItemContactInfo} ${styles.Cellphone}`}>
          <Link className={styles.contact} href="https://goo.gl/maps/PUcoU2EaExMQck1e9">
            <span>Ladines 191 - Tablada - Buenos aires</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
