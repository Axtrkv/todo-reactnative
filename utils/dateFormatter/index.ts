const dateFormatter = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentDate);
  return formattedDate;
};

export default dateFormatter;
