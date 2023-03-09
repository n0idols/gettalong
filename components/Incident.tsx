import { format, parse, parseISO } from "date-fns";
import CleanDate from "./CleanDate";

export default function Incident({ incident }) {
  return (
    <div className="incident">
      <CleanDate dateTime={incident.dateTime} />

      <p className="flex items-center">
        <span className="">Topic: </span>
        {"   "}
        {incident.argument.name}
      </p>
      <p className="flex items-center">
        <span className="">Intensity: </span>
        {"   "}
        {incident.intensity.amount}
      </p>
      <p className="flex items-center">
        <span className="">Details: </span>
        {"   "}
        <p>{incident.name}</p>
      </p>
    </div>
  );
}
