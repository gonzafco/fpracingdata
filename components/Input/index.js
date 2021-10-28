import styles from "./Input.module.scss";
import { useState, useEffect } from "react";

export default function index({ inputName, inputValue, inputType } = props) {
  return (
    <input
      className={styles.Input}
      type={inputType}
      name={inputName}
      placeholder={inputValue}
    />
  );
}
