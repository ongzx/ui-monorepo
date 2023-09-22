
import React from "react";
import styles from "./Checkbox.module.scss";

type Props = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Checkbox = ({ checked, onChange, disabled, children }: Props) => {

  const checkbox = (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
  if (!children) {
    return checkbox;
  }

  return (
    <div className={styles.container}>
      {checkbox}
      <label role="checkbox-label" className={styles.label}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
