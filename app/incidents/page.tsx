import Hero from "@/components/Hero";
import IncidentForm from "@/components/IncidentForm";
import Incidents from "@/components/Incidents";

export default function page() {
  return (
    <section>
      <Incidents />
      <IncidentForm />
    </section>
  );
}
