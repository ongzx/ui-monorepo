import React, { useCallback, useEffect, useState } from "react";
import TableHeader from './components/TableHeader';
import TableRows from './components/TableRows';
import styles from "./Table.module.scss";

type Props = {
  data: any;
  columns: any;
  onSelect: (any) => void;
  enableSelectAll?: boolean;
  showHeader?: boolean;
  selectionMode?: 'single' | 'multi';
  customTitle?: string;
}

const Table = ({ data, columns, customTitle, showHeader = true, enableSelectAll, selectionMode, onSelect }: Props) => {
  const [sortCriteria, setSortCriteria] = useState([]);
  const [sortedData, setSortedData] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
      onSelect([]);
    } else {
      setSelectedItems(sortedData);
      onSelect(sortedData);
    }
  }

  const handleSelection = useCallback((type, item) => {
    switch (type) {
      case 'single': {
        setSelectedItems([item]);
        onSelect(item);
        break;
      }
      case 'multi': {
        let _selectedItems = [];
        if (selectedItems.includes(item)) {
          _selectedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
        } else {
          _selectedItems = [...selectedItems, item];
        }
        setSelectedItems(_selectedItems);
        onSelect(_selectedItems);
        break;
      }
    }
  }, [selectedItems]);

  const handleSort = (key) => {
    const existingSortCriteria = [...sortCriteria];
    const existingIndex = existingSortCriteria.findIndex(([sortKey]) => sortKey === key);

    if (existingIndex !== -1) {
      const [, direction] = existingSortCriteria[existingIndex];
      const newDirection = direction === 'asc' ? 'desc' : 'asc';
      existingSortCriteria[existingIndex] = [key, newDirection];
    } else {
      existingSortCriteria.length = 0;
      existingSortCriteria.push([key, 'asc']);
    }

    setSortCriteria(existingSortCriteria);
  };

  const sortData = () => {
    let sorted = [...data];
    for (const [key, direction] of sortCriteria) {
      sorted = sorted.sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return direction === 'asc' ? valueA - valueB : valueB - valueA;
        }

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }

        return 0;
      });
    }
    setSortedData(sorted);
  };

  const getSortIndicator = (column) => {
    const sortInfo = sortCriteria.find(([key]) => key === column);
    if (sortInfo) {
      return sortInfo[1] === 'asc' ? 'asc' : 'desc';
    }
    return null;
  };

  useEffect(() => {
    sortData();
  }, [sortCriteria]);

  useEffect(() => {
    const detectMob = () => {
      const isMobile = (window.innerWidth <= 800) && (window.innerHeight <= 600);

      if (isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', detectMob);

    return () => {
      window.removeEventListener('resize', detectMob);
    }
  });


  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div role="error">No data to display.</div>;
  }

  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return <div role="error">No columns to display.</div>;
  }

  return (
    <div className={styles['table-container']}>
      <table className={styles.table}>
        <TableHeader
          showHeader={showHeader}
          isMobile={isMobile}
          customTitle={customTitle}
          columns={columns}
          checked={selectedItems?.length === data.length}
          selectionMode={selectionMode}
          enableSelectAll={enableSelectAll}
          handleSelectAll={handleSelectAll}
          handleSort={handleSort}
          getSortIndicator={getSortIndicator}
        />
        <TableRows
          data={sortedData}
          columns={columns}
          handleSelection={handleSelection}
          isMobile={isMobile}
          selectedItems={selectedItems}
          selectionMode={selectionMode}
        />
      </table>
    </div>
  );
};

export default Table;
