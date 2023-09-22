import React from "react";
import styles from "./Checkbox.module.scss";
var Checkbox = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, children = _a.children;
    var checkbox = (React.createElement("label", { className: styles.checkbox },
        React.createElement("input", { type: "checkbox", checked: checked, onChange: onChange, disabled: disabled }),
        React.createElement("span", { className: styles.checkmark })));
    if (!children) {
        return checkbox;
    }
    return (React.createElement("div", { className: styles.container },
        checkbox,
        React.createElement("label", { className: styles.label }, children)));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map