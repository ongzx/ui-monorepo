import React from "react";
declare type Props = {
    data: any;
    columns: any;
    isMultiSelect?: boolean;
    isSingleSelect?: boolean;
    onSelect: (any: any) => void;
    enableSelectAll?: boolean;
};
declare const Table: ({ data, columns, isMultiSelect, enableSelectAll, isSingleSelect, onSelect }: Props) => React.JSX.Element;
export default Table;
