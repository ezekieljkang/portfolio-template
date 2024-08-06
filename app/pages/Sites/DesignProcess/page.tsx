import Footer from "@/components/Footer";
import FooterNavBar from "@/components/FooterNavBar";
import CSHero from "@/components/CSHero";
import CSContent2 from "@/components/CSContent2";

export default function Page() {
  return (
    <main className="max-w-screen-[1620px] mx-auto">
      <div className="md:border border-black md:m-3">
        <CSHero
          company='/spy.svg'
          heading='DESIGN PROCESS'
          content='I improved the design workflow at MediaWorks, leading redesign projects for platforms such as CultureSync, TrendSetters, ViewFinder, InsightMag, and WebFusion.'
          timeline='EACH DESIGN INITIATIVE TOOK AROUND 4-6 MONTHS'
          role='UX DESIGNER'
          tools='SKETCH, Figma'
        />
        <CSContent2
          problemText="At DigitalMedia Co., the design approach was heavily centered around in-house guidelines, often overlooking the input from external brand partners. This led to final products that were misaligned with partner expectations and content goals, causing friction and delays. Understanding the need for better alignment, we developed a new strategy to actively involve external stakeholders from the beginning to ensure design success and satisfaction."
          solutionText={`I led the overhaul of DigitalMedia Co.'s design methodology, establishing a collaborative framework that facilitated regular feedback from external brand partners, content creators, and project teams.\n\nTo enhance collaboration and streamline decision-making, I restructured the design phases into distinct, iterative steps. This approach ensured ongoing dialogue with stakeholders and validated their input throughout the project, leading to more aligned and successful redesigns.`}
          resultText="While previous projects averaged six to seven months, the new approach reduced timelines to four to five months. This efficiency is expected to improve as the design methodology evolves with ongoing feedback. Additionally, the new process significantly lowered the number of post-launch issues, averaging 150 bugs compared to the previous 300. Stakeholder feedback has been overwhelmingly positive, noting the improved alignment and faster delivery."
        />
        <Footer />
        <FooterNavBar />
      </div>
    </main>
  );
}
