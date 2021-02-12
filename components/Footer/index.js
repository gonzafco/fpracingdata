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
    </footer>
  );
}
