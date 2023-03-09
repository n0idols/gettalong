"use client";

import { useState } from "react";

import useCreateIncident from "@/hooks/useCreateIncident";
import useArguments from "@/hooks/useArguments";
import useIntensity from "@/hooks/useIntensity";
import { FormEvent } from "react";

export default function AddIncidentForm() {
  const incidentMutation = useCreateIncident();
  const argumentQuery = useArguments();
  const intensityQuery = useIntensity();

  const [values, setValues] = useState({
    name: "",
    argumentId: "",
    intensityId: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleArgument = (e: FormEvent) => {
    setValues({
      ...values,
      argumentId: e.target.value,
    });
  };
  const handleIntensity = (e: FormEvent) => {
    setValues({
      ...values,
      intensityId: e.target.value,
    });
  };

  async function submitMutation(e: FormEvent) {
    e.preventDefault();
    incidentMutation.mutate(values);
    setModalOpen(false);
  }

  return (
    <>
      <div>
        {incidentMutation.isLoading ? (
          <>mutation loading...</>
        ) : (
          //   <Suspense fallback={<Loading />} />
          <>
            {incidentMutation.isError ? (
              <div>An error occurred: {incidentMutation.error.message}</div>
            ) : null}

            {incidentMutation.isSuccess ? <div>Incident added!</div> : null}
          </>
        )}
      </div>

      <h1>Add New Incident</h1>
      <div className="flex flex-col px-2">
        <form onSubmit={submitMutation} className=" flex flex-col">
          <label htmlFor="argument">Argument Topic</label>
          <select name="" id="" onChange={handleArgument}>
            {argumentQuery.data?.data.map((argument, idx) => (
              <option key={idx} value={argument.id}>
                {argument.name}
              </option>
            ))}
          </select>
          <label htmlFor="date">Intensity</label>
          <select name="" id="" onChange={handleIntensity}>
            {intensityQuery.data?.data.map((intense, idx) => (
              <option key={idx} value={intense.id}>
                {intense.amount + " - " + intense.description}
              </option>
            ))}
          </select>
          <label htmlFor="Name">Details</label>
          <input
            type="textarea"
            placeholder="Details"
            name="incident"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-400 p-2 text-sm"
          >
            Add Incident 😔
          </button>
        </form>
      </div>
    </>
  );
}
