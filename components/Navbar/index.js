import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ nav } = props) {
  const [menu, setMenu] = useState({ showMenu: false });

  function handleClick() {
    setMenu(
      (prevState) => (
        console.log(prevState),
        {
          ...prevState.menu,
          showMenu: !prevState.showMenu,
          class: !prevState.showMenu ? styles.showMenu : styles.hiddenMenu,
        }
      )
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>FP Racing Data</div>
      <img
        className={styles.menuSvg}
        width={20}
        height={21}
        src="/assets/images/menu.svg"
        onClick={handleClick}
      />
      <div className={`${styles.menuContainer} ${menu.class}`}>
        {nav.map((value, key) => (
          <Link href={`#${value}`}>
            <li onClick={handleClick} className={styles.menuItem}>
              {value}
            </li>
          </Link>
        ))}
      </div>
    </nav>
  );
}
