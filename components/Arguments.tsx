"use client";
import useArguments from "@/hooks/useArguments";
import CleanDate from "./CleanDate";

export default function Arguments() {
  const argumentsQuery = useArguments();

  return (
    <div>
      {argumentsQuery.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {argumentsQuery.data?.data.map((argument, idx) => (
            <div key={idx} className="flex flex-col border my-4">
              <h1>
                {argument.name}{" "}
                <span className="font-bold">{argument.Incident.length}</span>{" "}
              </h1>

              {argument.Incident.map((incident, idx) => {
                return (
                  <div key={idx}>
                    <CleanDate dateTime={incident.dateTime} />
                    {/* <div>{theDay}</div> */}
                    <div>
                      <p>Details: {incident.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
