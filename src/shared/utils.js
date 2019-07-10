const getYear = (date) => {
  const newdate = new Date(date);
  return newdate.getFullYear();
};

export default getYear;
