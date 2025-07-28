import Skills from "@/components/skills";
import Introduction from "@/components/introduction";
import Journey from "@/components/journey";
import ContactMe from "@/components/contact-me";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Skills />
      <Journey />
      <ContactMe />
    </div>
  );
}
