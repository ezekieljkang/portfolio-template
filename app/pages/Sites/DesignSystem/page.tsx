import Footer from "@/components/Footer";
import FooterNavBar from "@/components/FooterNavBar";
import CSHero from "@/components/CSHero";
import CSContent from "@/components/CSContent";

export default function Page() {
  return (
    <main className="max-w-screen-[1620px] mx-auto">
      <div className="md:border border-black md:m-3">
        <CSHero
          company='/spy.svg'
          heading='DESIGN FRAMEWORK'
          content='I developed a flexible design framework for VisionWorks, achieving a 35% reduction in design and development time.'
          timeline='MARCH 2024 – JULY 2024'
          role='UX DESIGNER'
          tools='FIGMA, JIRA, WEBFLOW'
        />
        <CSContent
          problemText="At CreativeHub, the task was to revamp and standardize over 25 unique brand identities. The legacy design framework was inefficient and outdated, leading to frequent design inconsistencies and a lengthy QA process with over 500 recurring issues. Limited design resources and reliance on external contractors further exacerbated delays and resource strain."
          solutionText={`We introduced a new design framework, named SYNERGY, to consolidate design elements and streamline the development process. This integrated platform was designed to enhance both design efficiency and collaboration.\n\nIn just six weeks, we assembled a detailed catalog of design elements, components, and templates. SYNERGY was rolled out across three major redesign projects over a three-month period to test and refine its effectiveness. This real-world application helped tailor the system to address practical design challenges and ensure its robustness.`}
          resultText="Previously, design projects averaged five to six months in duration. With the SYNERGY framework, we reduced this to three to four months. As the framework evolves, we expect even greater efficiencies. Additionally, the new system significantly lowered the number of post-launch issues, with a reduction to an average of 150 bugs. Feedback from stakeholders has been overwhelmingly positive, highlighting the improved alignment and faster turnaround times."
        />
        <Footer />
        <FooterNavBar />
      </div>
    </main>
  );
}
