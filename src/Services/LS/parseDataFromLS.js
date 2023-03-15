export const parseDataFromLS = (key, userId, initialValue = []) => {
  try {
    const dataLs = JSON.parse(localStorage.getItem(key)) ?? initialValue;
    if (dataLs.length > 0) {
      return dataLs.filter(data => data.id === userId);
    }
    return initialValue;
  } catch (error) {
    console.log(error);
  }
};
