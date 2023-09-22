import React from 'react';
declare type Props = {
    isMobile?: boolean;
    selectionMode?: 'single' | 'multi';
    selectedItems?: any;
    columns: any;
    data: any;
    handleSelection: (string: any, any: any) => void;
};
declare const TableRows: ({ isMobile, data, selectionMode, selectedItems, columns, handleSelection }: Props) => React.JSX.Element;
export default TableRows;
