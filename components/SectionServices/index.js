import styles from "./SectionServices.module.scss";
export default function SectionServices({ title, text, id = props }) {
  return (
    <section id={`${id}`} className={styles.sectionServices}>
      <div className={styles.BoxServices}>
        <div className={styles.BoxItem}>
          <img
            className={styles.itemDecoration}
            src="/assets/images/diagnostico.svg"
          />
          <div className={styles.itemInformation}>
            Puesta en marcha y diagnósticos a distancia, aporte de asistencia
            técnica telefónica y por intermedio de la web.
          </div>
        </div>
        <div className={styles.BoxItem}>
          <img
            className={styles.itemDecoration}
            src="/assets/images/componentes-electronicos.svg"
          />
          <div className={styles.itemInformation}>
            Reparamos en laboratorios propios, todo tipo de componentes
            electrónicos que estan fuera del alcance de los asistidos.
            {/* <ul>
              <li>Computadoras de Inyección (ECUS).</li>
              <li>Fusileras electrónicas.</li>
              <li>Módulos de Control.</li>
              <li>Chips y sócalos.</li>
              <li>Micro Inyectores</li>
            </ul> */}
          </div>
        </div>
        <div className={styles.BoxItem}>
          <img
            className={styles.itemDecoration}
            src="/assets/images/manuales-herramientas.svg"
          />
          <div className={styles.itemInformation}>
            Proveemos de herramientes manuales y repuestos que necesiten,
            contamos con una base de datos muy importantes para el parque
            automotor que nos rodea.
          </div>
        </div>
      </div>
    </section>
  );
}
