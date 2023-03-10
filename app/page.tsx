import Hero from "@/components/Hero";
import IncidentForm from "@/components/IncidentForm";

export default function page() {
  return (
    <>
      <Hero
        hook="Welcome"
        subhook="Experience our legendary service"
        cta="learn more"
      />
      <IncidentForm />
    </>
  );
}
