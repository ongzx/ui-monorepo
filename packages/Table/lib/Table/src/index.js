import React from "react";
import Table from "./Table";
var App = function () {
    var data = [
        { operator: "*Celcom Axiata (LTE)", name: "John", age: 30 },
        { operator: "*DiGi Telecom (LTE)", name: "Jane", age: 25 },
        { operator: "*Maxis (LTE)", name: "Doe", age: 35 },
    ];
    var columns = [
        {
            header: "Operator",
            render: function (item) { return React.createElement("span", null, item.operator); },
        },
        {
            header: "Headset Display",
            render: function (item) { return React.createElement("strong", null, item.name); },
        },
        {
            header: "3G Availability",
            render: function (item) { return (React.createElement("span", { style: { color: item.age > 30 ? "red" : "green" } }, item.age)); },
        },
    ];
    var handleSelect = function (selectedItems) {
        console.log("Selected items:", selectedItems);
    };
    return (React.createElement("div", null,
        React.createElement(Table, { data: data, columns: columns, isMultiSelect: true, onSelect: handleSelect })));
};
export default App;
//# sourceMappingURL=index.js.map