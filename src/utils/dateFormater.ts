const fromUTCTimestamp = (utcTimeStamp: string, format: string): string => {
  const dateObj = new Date(utcTimeStamp);

  const day = dateObj.getUTCDate().toString().padStart(2, "0");
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getUTCFullYear();

  let formatedDate = `${day}-${month}-${year}`;

  switch (format) {
    case "dd/mm/yyyy":
      formatedDate = `${day}/${month}/${year}`;
      break;
    default:
      break;
  }

  return formatedDate;
};

export default fromUTCTimestamp;
