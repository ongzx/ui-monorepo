var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import React, { useState } from "react";
import styles from "./Table.module.scss";
var Table = function (_a) {
    var data = _a.data, columns = _a.columns, isMultiSelect = _a.isMultiSelect, onSelect = _a.onSelect;
    var _b = __read(useState(null), 2), sortedColumn = _b[0], setSortedColumn = _b[1];
    var _c = __read(useState("asc"), 2), sortDirection = _c[0], setSortDirection = _c[1];
    var _d = __read(useState(data), 2), sortedData = _d[0], setSortedData = _d[1];
    var _e = __read(useState([]), 2), selectedItems = _e[0], setSelectedItems = _e[1];
    var headers = columns.map(function (column) { return column.header; });
    var sortData = function (key) {
        var direction = key === sortedColumn && sortDirection === "asc" ? "desc" : "asc";
        var sorted = __spread(data).sort(function (a, b) {
            var valueA = a[key];
            var valueB = b[key];
            if (typeof valueA === "number" && typeof valueB === "number") {
                return direction === "asc" ? valueA - valueB : valueB - valueA;
            }
            if (typeof valueA === "string" && typeof valueB === "string") {
                return direction === "asc"
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }
            return 0;
        });
        setSortedColumn(key);
        setSortDirection(direction);
        setSortedData(sorted);
    };
    var handleSort = function (key) {
        sortData(key);
    };
    var handleCheckboxChange = function (item) {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(function (selectedItem) { return selectedItem !== item; }));
        }
        else {
            setSelectedItems(__spread(selectedItems, [item]));
        }
    };
    var handleRadioChange = function (item) {
        setSelectedItems([item]);
        onSelect(item);
    };
    var getSortIndicator = function (column) {
        if (column === sortedColumn) {
            return sortDirection === "asc" ? "↑" : "↓";
        }
        return null;
    };
    return (React.createElement("div", { className: styles.tableContainer },
        React.createElement("table", { className: styles.table },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    isMultiSelect && React.createElement("th", null),
                    headers.map(function (header, index) { return (React.createElement("th", { key: index, onClick: function () { return handleSort(header); } },
                        header,
                        React.createElement("span", { className: styles.sortIndicator }, getSortIndicator(header)))); }))),
            React.createElement("tbody", null, sortedData.map(function (item, rowIndex) { return (React.createElement("tr", { key: rowIndex, className: selectedItems.includes(item) ? styles.highlight : null },
                isMultiSelect ? (React.createElement("td", null)) : (React.createElement("td", null)),
                columns.map(function (column, colIndex) { return (React.createElement("td", { key: colIndex }, column.render(item))); }))); })))));
};
export default Table;
//# sourceMappingURL=Table.js.map