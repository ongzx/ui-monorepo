import React from "react";
declare type Props = {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    children?: React.ReactNode;
};
declare const Radio: ({ checked, onChange, disabled, children }: Props) => React.JSX.Element;
export default Radio;
