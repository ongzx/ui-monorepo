import React from "react";
declare type Props = {
    data: any;
    columns: any;
    onSelect: (any: any) => void;
    enableSelectAll?: boolean;
    showHeader?: boolean;
    selectionMode?: 'single' | 'multi';
    customTitle?: string;
};
declare const Table: ({ data, columns, customTitle, showHeader, enableSelectAll, selectionMode, onSelect }: Props) => React.JSX.Element;
export default Table;
