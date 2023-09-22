import React from 'react';
declare const _default: {
    title: string;
    component: ({ data, columns, customTitle, showHeader, enableSelectAll, selectionMode, onSelect }: {
        data: any;
        columns: any;
        onSelect: (any: any) => void;
        enableSelectAll?: boolean;
        showHeader?: boolean;
        selectionMode?: "single" | "multi";
        customTitle?: string;
    }) => React.JSX.Element;
    parameters: {
        docs: {
            page: (props: any) => JSX.Element;
        };
    };
    argTypes: {
        data: {
            control: string;
        };
        columns: {
            control: string;
        };
        selectionMode: {
            control: string;
            options: string[];
        };
        enableSelectAll: {
            control: string;
        };
        showHeader: {
            control: string;
        };
        customTitle: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: (args: any) => React.JSX.Element;
export declare const withCheckbox: () => React.JSX.Element;
export declare const withRadio: () => React.JSX.Element;
export declare const withSorting: () => React.JSX.Element;
