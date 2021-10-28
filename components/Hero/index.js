import styles from "./Hero.module.scss";
import { useState, useEffect } from "react";
export default function Hero() {
  const [resize, setResize] = useState({ width: 600, height: 350 });

//   useEffect(() => {
//     checkScreenSize();
//   },[]);

//   function checkScreenSize() {
//     const size = window.screen.width;
    
//     switch (true) {
//       case size <= 320:
//         setResize({ width: 200, height: 250 }, console.log(resize));
//         break;
//       // case size <= 320:
//       //   setResize({ width: 200, height: 250 }, console.log(resize));
//       //   break;
//     }
//   }

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
        <img
          src="/assets/images/heroimage.jpg"
          width={resize.width}
          height={resize.height}
        />
      </div>
    </header>
  );
}
