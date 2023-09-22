import React, { useCallback } from 'react';
import { Checkbox } from '@ui/checkbox';
import styles from '../Table.module.scss';
import cx from 'classnames';

type Props = {
  showHeader?: boolean;
  selectionMode?: 'single' | 'multi';
  enableSelectAll?: boolean;
  handleSelectAll?: () => void;
  handleSort?: (string) => void;
  checked?: boolean;
  columns: any;
  customTitle?: any;
  isMobile?: any;
  getSortIndicator?: (string) => string;
}

const TableHeader = ({ showHeader = true, customTitle = null, selectionMode, enableSelectAll, handleSelectAll, handleSort, checked, columns, isMobile, getSortIndicator }: Props) => {

  if (!showHeader) {
    return null;
  }

  if (customTitle !== null || (isMobile && columns.length > 3)) {
    return (
      <thead>
        <tr>
          {selectionMode !== null && <th className={styles.selectCol}></th>}
          <th colSpan={columns.length > 3 ? 0 : columns.length}>
            {customTitle ? customTitle : 'Details'}
          </th>
        </tr>
      </thead>
    )
  }

  const renderHeaderCols = useCallback(() => {
    if (customTitle !== null || (isMobile && columns.length > 3)) {
      return (
        <tr>
          <th>
            {customTitle ? customTitle : 'Details'}
          </th>
        </tr>
      )
    } else {
      return columns.map((column, index) => (
        <th key={`th_${index}`} style={column.width ? { width: column.width } : {}}>
          {column.header}
          {
            column.sortable === true ?
              <span role={'sort-btn'} className={cx(styles['sort-indicator'], styles[`${getSortIndicator(column.key)}`])} onClick={() => handleSort(column.key)} >
              </span>
              : null
          }
        </th>
      ))
    }
  }, [customTitle, isMobile, columns, getSortIndicator]);

  return (
    <thead>
      <tr>
        {
          selectionMode === 'multi' && enableSelectAll ? <th className={styles.selectCol}>
            <Checkbox
              checked={checked}
              onChange={() => handleSelectAll()}
            />
          </th>
            : selectionMode !== null && <th className={styles.selectCol}></th>
        }
        {renderHeaderCols()}
      </tr >
    </thead >
  )
}

export default TableHeader;
