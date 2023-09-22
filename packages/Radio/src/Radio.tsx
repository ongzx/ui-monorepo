
import React from "react";
import styles from "./Radio.module.scss";

type Props = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Radio = ({ checked, onChange, disabled, children }: Props) => {

  const radio = (
    <input
      className={styles.radio}
      name="radio"
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
  if (!children) {
    return radio;
  }

  return (
    <div className={styles.container} >
      {radio}
      <label role="radio-label" className={styles.label}>
        {children}
      </label>
    </div>
  );
};

export default Radio;
