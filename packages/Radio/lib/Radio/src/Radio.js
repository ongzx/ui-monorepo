import React from "react";
import styles from "./Radio.module.scss";
var Radio = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, children = _a.children;
    var radio = (React.createElement("input", { className: styles.radio, type: "radio", checked: checked, disabled: disabled, onChange: onChange }));
    if (!children) {
        return radio;
    }
    return (React.createElement("div", { className: styles.container },
        radio,
        React.createElement("label", { className: styles.label }, children)));
};
export default Radio;
//# sourceMappingURL=Radio.js.map