export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
