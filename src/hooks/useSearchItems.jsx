import { useState, useMemo } from 'react';

function useSearchItems(items) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useMemo(async () => {
    try {
      const result = await items.filter((anyItem) => {
        return `${anyItem.name}`.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredItems(result);
    } catch (error) {
      console.log(error);
    }
  }, [items, query]);

  return { query, setQuery, filteredItems };
}

export default useSearchItems;
