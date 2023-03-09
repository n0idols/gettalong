import { format, parseISO } from "date-fns";

export default function CleanDate({ dateTime }) {
  const theDay = format(parseISO(dateTime), "E MMM do, yyyy");
  return <div>{theDay}</div>;
}
