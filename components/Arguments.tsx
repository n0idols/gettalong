"use client";
import useArguments from "@/hooks/useArguments";
import { format, parse, parseISO } from "date-fns";
import CleanDate from "./CleanDate";

export default function Arguments() {
  const argumentsQuery = useArguments();

  return (
    <div>
      {argumentsQuery.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {argumentsQuery.data?.data.map((argument) => (
            <div className="flex flex-col border my-4">
              <h1>
                {argument.name}{" "}
                <span className="font-bold">{argument.Incident.length}</span>{" "}
              </h1>

              {argument.Incident.map((incident) => {
                return (
                  <>
                    <CleanDate dateTime={incident.dateTime} />
                    {/* <div>{theDay}</div> */}
                    <div>
                      <p>Details: {incident.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
