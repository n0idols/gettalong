"use client";
import { useState } from "react";
import useCreateArgument from "@/hooks/useCreateArgument";
import Modal from "./Modal";

export default function ArgumentForm() {
  const argumentMutation = useCreateArgument();

  const [values, setValues] = useState({
    name: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  async function submitMutation(e: React.FormEvent) {
    e.preventDefault();
    argumentMutation.mutate(values);
    setModalOpen(false);
  }

  return (
    <>
      <div>
        {argumentMutation.isLoading ? (
          <>mutation loading...</>
        ) : (
          //   <Suspense fallback={<Loading />} />
          <>
            {argumentMutation.isError ? (
              <div>An error occurred: {argumentMutation.error.message}</div>
            ) : null}

            {argumentMutation.isSuccess ? <div>Incident added!</div> : null}
          </>
        )}
      </div>

      <button
        className="btn btn-blue"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        Add New
      </button>

      <Modal
        title="New Argument Topic...lol"
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="flex flex-col px-2">
          <form onSubmit={submitMutation} className=" flex flex-col">
            <label htmlFor="Name">Argument Topic Name</label>
            <input
              type="input"
              name="argument"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <button type="submit" className="btn btn-blue">
              Add Argument 😔
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
