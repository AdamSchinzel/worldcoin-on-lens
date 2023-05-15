import moment from "moment";

const formatDate = (timestamp: string): string => {
  return moment(timestamp).format("DD.MM.YYYY");
};

export default formatDate;
