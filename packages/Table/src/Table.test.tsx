import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 35 },
];

const columns = [
  {
    header: 'ID',
    key: 'id',
    render: (item) => <span role={'table-col-id'} data-testid={`row-${item.id}-id`}>{item.id}</span>,
  },
  {
    header: 'Name',
    key: 'name',
    render: (item) => <strong role={'table-col-name'} data-testid={`row-${item.id}-name`}>{item.name}</strong>,
  },
  {
    header: 'Age',
    key: 'age',
    render: (item) => <span role={'table-col-age'} data-testid={`row-${item.id}-age`}>{item.age}</span>,
    sortable: true,
  },
];

test('renders a table with single-select and radio buttons', () => {
  const { getByText, getAllByRole } = render(
    <Table
      data={data}
      columns={columns}
      selectionMode={'single'}
      onSelect={() => { }}
    />
  );

  expect(getByText('ID')).toBeInTheDocument();
  expect(getByText('Name')).toBeInTheDocument();
  expect(getByText('Age')).toBeInTheDocument();

  const radioButtons = getAllByRole('radio');
  expect(radioButtons).toHaveLength(data.length);

  fireEvent.click(radioButtons[1]);
  expect(radioButtons[1]).toBeChecked();
});

test('handles sorting of data', () => {
  const { getByText, getByRole, getAllByRole } = render(
    <Table
      data={data}
      columns={columns}
      onSelect={() => { }}
    />
  );

  expect(getByText('ID')).toBeInTheDocument();
  expect(getByText('Name')).toBeInTheDocument();
  expect(getByText('Age')).toBeInTheDocument();

  const sortBtn = getByRole('sort-btn');
  const tableCols = getAllByRole('table-col-age');

  fireEvent.click(sortBtn);

  expect(tableCols[0]).toHaveTextContent('25');
  expect(tableCols[1]).toHaveTextContent('30');
  expect(tableCols[2]).toHaveTextContent('35');
});

test('handles single select using radio buttons', () => {
  const handleSelect = jest.fn();

  render(
    <Table
      data={data}
      columns={columns}
      selectionMode={'single'}
      onSelect={handleSelect}
    />
  );

  const radioButtons = screen.getAllByRole('radio');

  fireEvent.click(radioButtons[1]);
  expect(radioButtons[1]).toBeChecked();
  expect(handleSelect).toHaveBeenCalledWith(data[1]);

  fireEvent.click(radioButtons[0]);
  expect(radioButtons[0]).toBeChecked();
  expect(radioButtons[1]).not.toBeChecked();
  expect(handleSelect).toHaveBeenCalledWith(data[0]);
  expect(handleSelect).toHaveBeenCalledTimes(2);
});

test('handles multi-select using checkboxes', () => {
  const handleSelect = jest.fn();

  render(
    <Table
      data={data}
      columns={columns}
      selectionMode={'multi'}
      onSelect={handleSelect}
    />
  );

  const checkboxes = screen.getAllByRole('checkbox');

  fireEvent.click(checkboxes[1]);
  expect(checkboxes[1]).toBeChecked();
  expect(handleSelect).toHaveBeenCalledWith([data[1]]);
});


test('handles select all using checkboxes', () => {
  const handleSelect = jest.fn();

  render(
    <Table
      data={data}
      columns={columns}
      enableSelectAll={true}
      selectionMode={'multi'}
      onSelect={handleSelect}
    />
  );

  const checkboxes = screen.getAllByRole('checkbox');

  fireEvent.click(checkboxes[0]);
  expect(checkboxes[0]).toBeChecked();
  expect(handleSelect).toHaveBeenCalledWith(data);
});

test('handles empty data', async () => {
  render(
    <Table
      data={[]}
      columns={columns}
      onSelect={() => { }}
    />
  );
  const errorBox = screen.getByRole('error');
  expect(errorBox).toHaveTextContent('No data to display.');
});

test('handles empty column', async () => {
  render(
    <Table
      data={data}
      columns={[]}
      onSelect={() => { }}
    />
  );
  const errorBox = screen.getByRole('error');
  expect(errorBox).toHaveTextContent('No columns to display.');
});

