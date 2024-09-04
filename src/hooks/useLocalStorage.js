import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = window.localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    window.localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
