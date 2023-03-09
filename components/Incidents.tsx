"use client";
import useIncidents from "@/hooks/useIncidents";
import Incident from "./Incident";

export default function Incidents() {
  const incidentsQuery = useIncidents();

  return (
    <div>
      <h1>Incidents</h1>
      {incidentsQuery.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {incidentsQuery.data?.data.map((incident, idx) => (
            <Incident key={idx} incident={incident} />
          ))}
        </>
      )}
      <hr />
    </div>
  );
}
