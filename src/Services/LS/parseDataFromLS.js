export const parseDataFromLS = (key, userId, initialValue = []) => {
  try {
    const dataLs = JSON.parse(localStorage.getItem(key)) ?? initialValue;
    if (dataLs.length > 0) {
      const acceptUser = dataLs.filter(data => data.id === userId);
      return acceptUser;
    }
    return initialValue;
  } catch (error) {
    return initialValue;
  }
};
