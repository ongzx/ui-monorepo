import React, { useCallback, useState } from 'react';
import styles from '../Table.module.scss';
import { Checkbox } from '@ui/checkbox';
import { Radio } from '@ui/radio';

type Props = {
  isMobile?: boolean;
  selectionMode?: 'single' | 'multi';
  selectedItems?: any;
  columns: any;
  data: any;
  handleSelection: (string, any) => void;
}

const TableRows = ({ isMobile, data, selectionMode, selectedItems, columns, handleSelection }: Props) => {

  const getSelectionMode = useCallback((item) => {
    switch (selectionMode) {
      case "single":
        return (
          <Radio
            checked={selectedItems.includes(item)}
            onChange={() => handleSelection('single', item)}
          />
        )

      case "multi":
        return (
          <Checkbox
            checked={selectedItems.includes(item)}
            onChange={() => handleSelection('multi', item)}
          />
        )
    }
  }, [selectionMode, selectedItems, handleSelection]);

  const renderColumns = useCallback((item, rowIndex) => {
    if (isMobile && columns.length > 3) {
      return (
        <td key={`td_${rowIndex}`}>
          {
            columns.map((column, colIndex) => {
              return <label key={`label_${colIndex}`} className={styles.keyName}><strong>{column.header}</strong>: {column.render(item)}</label>
            })
          }
        </td>
      )
    } else {
      return columns.map((column, colIndex) => {
        return (<td key={`td_${colIndex}`}>{column.render(item)}</td>)
      })
    }
  }, [isMobile, columns]);

  return (
    <tbody>
      {data.map((item, rowIndex) => (
        <>
          <tr
            key={`tr_${rowIndex}`}
            className={selectedItems.includes(item) ? styles['highlight'] : null}
          >
            {selectionMode !== null ? <td key={`td_${rowIndex}`} className={styles.selectCol}>{getSelectionMode(item)}</td> : null}
            {renderColumns(item, rowIndex)}
          </tr>
        </>
      ))}
    </tbody>
  )
}

export default TableRows;
