import styles from "./Input.module.scss";
import { useState, useEffect } from "react";

export default function index({ inputName, inputValue, inputType } = props) {
  const [value, setValue] = useState(inputValue);

  function handleChange(e) {
    setValue(e.target.value);
  }


  return (
    <input
      className={styles.Input}
      type={inputType}
      name={inputName}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}
