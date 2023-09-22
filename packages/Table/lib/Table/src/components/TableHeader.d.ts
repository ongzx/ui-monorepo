import React from 'react';
declare type Props = {
    showHeader?: boolean;
    selectionMode?: 'single' | 'multi';
    enableSelectAll?: boolean;
    handleSelectAll?: () => void;
    handleSort?: (string: any) => void;
    checked?: boolean;
    columns: any;
    customTitle?: any;
    isMobile?: any;
    getSortIndicator?: (string: any) => string;
};
declare const TableHeader: ({ showHeader, customTitle, selectionMode, enableSelectAll, handleSelectAll, handleSort, checked, columns, isMobile, getSortIndicator }: Props) => React.JSX.Element;
export default TableHeader;
