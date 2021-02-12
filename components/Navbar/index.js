import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar({ nav } = props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>FP Racing data</div>
      <div className={styles.menuContainer}>
        {nav.map((value, key) => (
          <Link href={`#${value}`}>
            <li className={styles.menuItem}>{value}</li>
          </Link>
        ))}
      </div>
    </nav>
  );
}
