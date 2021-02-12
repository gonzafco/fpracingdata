import styles from "./Contact.module.scss";
import Input from "../Input";
export default function index({ id } = props) {
  return (
    <section id={`${id}`} className={styles.Contact}>
      <div className={styles.InputWrapper}>
        <Input inputName={"name"} inputValue={"Nombre"} inputType={"text"} />
        <Input
          inputName={"lastname"}
          inputValue={"Apellido"}
          inputType={"text"}
        />
      </div>
      <div className={styles.InputWrapper}>
        <Input inputName={"email"} inputValue={"Email"} inputType={"email"} />
        <Input inputName={"number"} inputValue={"Celular"} inputType={"text"} />
      </div>
      <div className={styles.InputWrapper}>
        <Input inputName={"query"} inputValue={"Consulta"} inputType={""} />
      </div>
      <button className={styles.BtnForm}>Consultar</button>
    </section>
  );
}
