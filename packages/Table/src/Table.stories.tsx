import React, { useState } from 'react';
import { Table } from '.';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';

import mdx from './Table.stories.mdx';
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

const MD = "";
// const MD = '```json
// {
//   "firstName": "John",
//     "lastName": "Smith",
//       "age": 25
// }
// ```'

// const MD = '
// <br />
// ### Usage guide
// <br />


// import { Table } from "@ui/table";
// const data = [
//   { id: 1, operator: "*Celcom Axiata (LTE)", name: "CELCOM / My Celcom / 502 19", value: "Yes" },
//   { id: 2, operator: "*DiGi Telecom (LTE)", name: "DiGi 1800 / DiGi /  MYMY18", value: "Yes" },
//   { id: 3, operator: "*Maxis (LTE)", name: "U Mobile / MYS 18 / MY 18", value: "Yes" },
//   { id: 4, operator: "*U Mobile (LTE)", name: "U Mobile / MYS 18 / MY 18", value: "Yes" },
// ];

//   const columns = [
//     {
//       header: "Operator",
//       key: "operator",
//       render: (item) => <span>{item.operator}</span>,
//       sortable: true // [optional]: set to true to enable sorting for this column
//     },
//     {
//       header: "Headset Display",
//       key: "name",
//       render: (item) => <span>{item.name}</span>,
//     },
//     {
//       header: "3G Availability",
//       key: "value",
//       render: (item) => (
//         <span >
//           {item.value}
//         </span>
//       ),
//     },
//   ];

//   // default usage
//    <Table
//     data={data}
//     columns={columns}
//     onSelect={handleSelect}
//     {...args}
//   />
//   '
// `;

export default {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      page: null
    },
  },
  argTypes: {
    data: {
      control: 'object'
    },
    columns: {
      control: 'object'
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multi']
    },
    enableSelectAll: {
      control: 'boolean'
    },
    showHeader: {
      control: 'boolean'
    },
    customTitle: {
      control: 'text'
    }
  },
};

export const Default = (args) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const data = [
    { id: 1, operator: "*Celcom Axiata (LTE)", name: "CELCOM / My Celcom / 502 19", value: 'Yes' },
    { id: 2, operator: "*DiGi Telecom (LTE)", name: "DiGi 1800 / DiGi /  MYMY18", value: 'Yes' },
    { id: 3, operator: "*Maxis (LTE)", name: "U Mobile / MYS 18 / MY 18", value: 'Yes' },
    { id: 4, operator: "*U Mobile (LTE)", name: "U Mobile / MYS 18 / MY 18", value: 'Yes' },
  ];

  const columns = [
    {
      header: "Operator",
      key: 'operator',
      render: (item) => <span>{item.operator}</span>,
    },
    {
      header: "Headset Display",
      key: 'name',
      render: (item) => <span>{item.name}</span>,
    },
    {
      header: "3G Availability",
      key: 'value',
      render: (item) => (
        <span >
          {item.value}
        </span>
      ),
    },
  ];

  const handleSelect = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <>
      <Table
        data={data}
        columns={columns}
        onSelect={handleSelect}
        {...args}
      />
      <p>
        {JSON.stringify(selectedItems)}
      </p>
    </>
  );
};

export const withCheckbox = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const data = [
    { id: 1, brn: "198702333K", name: "Blue Ocean International" },
    { id: 2, brn: "198900364N", name: "Red Electronics" },
    { id: 3, brn: "196700335H", name: "Yellow Gaming" },
    { id: 4, brn: "196800306E", name: "Purple Automobiles" },
    { id: 5, brn: "199131124V", name: "Diamond Interiors Holdings" },
    { id: 6, brn: "200201624D", name: "Omnichannel Solutions International" },
  ];

  const columns = [
    {
      header: "BRN",
      key: 'brn',
      render: (item) => <span>{item.brn}</span>,
      width: 150,
    },
    {
      header: "Company Name",
      key: 'name',
      render: (item) => <span>{item.name}</span>,
    },
  ];

  const handleSelect = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <>
      <Table
        selectionMode={'multi'}
        enableSelectAll={true}
        data={data}
        columns={columns}
        onSelect={handleSelect}
      />
      <p>
        {JSON.stringify(selectedItems)}
      </p>
    </>
  );
}


export const withRadio = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const data = [
    { id: 1, name: "Mavis Chen", mobile: "8899 7654", expiry: "Dec 2022", penalty: "$600" },
    { id: 2, name: "Rodney Artichoke", mobile: "9988 7676", expiry: "Dec 2022", penalty: "$300" },
    { id: 3, name: "Valentino Morose", mobile: "8900 7654", expiry: "Dec 2022", penalty: "$300" },
    { id: 4, name: "Eric Widget", mobile: "8900 7654", expiry: "Dec 2022", penalty: "$300" },
  ];

  const columns = [
    {
      header: "Name",
      key: 'name',
      render: (item) => <span>{item.name}</span>,
    },
    {
      header: "Mobile",
      key: 'mobile',
      render: (item) => <span>{item.mobile}</span>,
    },
    {
      header: "Expiry",
      key: 'expiry',
      render: (item) => <span>{item.expiry}</span>,
    },
    {
      header: "Penalty",
      key: 'penalty',
      render: (item) => <span>{item.penalty}</span>,
    },
  ];

  const handleSelect = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <>
      <Table
        selectionMode={'single'}
        data={data}
        columns={columns}
        onSelect={handleSelect}
      />
      <p>
        {JSON.stringify(selectedItems)}
      </p>
    </>
  );
}


export const withSorting = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const data = [
    { id: 1, name: "Mavis Chen", mobile: "8899 7654", expiry: "Dec 2022", penalty: "$600" },
    { id: 2, name: "Rodney Artichoke", mobile: "9988 7676", expiry: "Dec 2022", penalty: "$300" },
    { id: 3, name: "Valentino Morose", mobile: "8900 7654", expiry: "Dec 2022", penalty: "$300" },
    { id: 4, name: "Eric Widget", mobile: "8900 7654", expiry: "Dec 2022", penalty: "$300" },
  ];

  const columns = [
    {
      header: "Name",
      key: 'name',
      render: (item) => <span>{item.name}</span>,
      sortable: true,
    },
    {
      header: "Mobile",
      key: 'mobile',
      render: (item) => <span>{item.mobile}</span>,
    },
    {
      header: "Expiry",
      key: 'expiry',
      render: (item) => <span>{item.expiry}</span>,
    },
    {
      header: "Penalty",
      key: 'penalty',
      render: (item) => <span>{item.penalty}</span>,
      sortable: true,
    },
  ];

  const handleSelect = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  return (
    <>
      <Table
        selectionMode={'single'}
        data={data}
        columns={columns}
        onSelect={handleSelect}
      />
      <p>
        {JSON.stringify(selectedItems)}
      </p>
    </>
  );
}

