import { Content, _Date, Image } from "@/blogsUI/blogUI";
import Navbar from "@/app/blog/navbar/navbar";
import { Heading, Text, } from "@/blogsUI/blogUI";
import Footer from "@/app/blog/footer/footer";
import { Link } from "lucide-react";

export default function MongoDB() {
  return (
    <>
      <Navbar />
      <Content className="pl-3 pr-3 flex flex-col gap-y-3 justify-center items-center md:items-start pt-10">
        <Heading type="1" variations={["bold"]}>
          Early warning signs of placement struggle
        </Heading>
        <_Date date="May 16 2025" />
        <div className="w-full flex flex-col lg:flex-row gap-x-10">
          <div className="lg:w-1/2">
          <Heading type="3" variations={["bold"]}>
          1. No consistent DSA practice from Day 1
        </Heading>
        <Text size="lg">
          Students who delay starting Data Structures & Algorithms until the pre-final year often find themselves overwhelmed later. As Chayan Sinha (Thapar ’23) admits, “I became inconsistent in solving DSA questions… it’s not a 100-metre sprint but a marathon”—and skipping daily practice early leads to a steep catch-up curve ([Medium][1]).
        </Text>
        <Text size="lg">
          Industry-academia reports show that only 43 % of engineering grads secure jobs, largely because they lack foundational problem-solving habits (e.g., daily coding) ([India Today][2]).
        </Text>
        </div>

        <Image src="/images/dsa.png"  width="400" className="pt-10 pb-10 lg:pt-0 lg:pb-0"/>
        </div>
        <Heading type="3" variations={["bold"]}>
          2. Neglecting hands-on projects and internships
        </Heading>

        <Text size="lg">
          Graduates with little or no internship/project experience struggle more: a Times of India survey identified “limited industry exposure” as a top reason for unplaced engineers ([The Times of India][3], [The Times of India][4]).
        </Text>

        <Text size="lg">
          Those who don’t proactively seek summer internships (even small off-campus ones) miss both skill-building and networking opportunities, making campus rounds their only—and often insufficient—route.
        </Text>

        <Heading type="3" variations={["bold"]}>
          3. Overreliance on campus placements
        </Heading>

        <Text size="lg">
          Assuming that the college placement cell will “take care of everything” often backfires. When senior students see fewer companies visiting (or stricter cutoffs), they panic—by then, it’s often too late to build needed skills ([The Times of India][3]).
        </Text>

        <Heading type="3" variations={["bold"]}>
          4. Sliding CGPA complacency
        </Heading>

        <Text size="lg">
          Letting CGPA dip below the minimum cutoffs (often 7.0–7.5 at top companies) without urgent corrective action is a red flag. Reddit discussions confirm CGPA is primarily a gatekeeper: “there is a cut-off, and what matters is if you are above it” ([Reddit][5]).
        </Text>

        <Text size="lg">
          At Thapar, the informal advice is to maintain at least an 8.5 CGPA to stay eligible for 90 % of on-campus drives ([Medium][1]).
        </Text>

        <Heading type="3" variations={["bold"]}>
          5. Poor soft-skills and networking
        </Heading>

        <Text size="lg">
          Technical chops alone won’t help if you cannot articulate ideas. TOI notes “lack of soft skills” (communication, teamwork) as one of six critical barriers to placement ([The Times of India][3]).
        </Text>

        <Text size="lg">
          Those who don’t build LinkedIn profiles or skip club/peer-network events miss informal referral pipelines—an early-year habit that top performers cultivate intentionally ([Medium][1]).
        </Text>

        <hr />

        <Heading type="2">
          In the Indian market: DSA vs. CGPA?
        </Heading>

        <Heading type="3"> <b>CGPA</b> is a <b>threshold filter</b>: </Heading>
        <Text size="lg">
          Most companies set a minimum (often 6.5–7.5) and rarely look back once you clear it ([Reddit][5]).
        </Text>
        <Text>
          Good CGPA “gets you into the interview room,” but it **does not** win you offers if you can’t solve the problems they put in front of you.
        </Text>
        <Heading type="3">
          <b>DSA (Data Structures & Algorithms)</b> is the <b>real gatekeeper</b>:
        </Heading>
        <Text size="lg">
          Campus drives and off-campus placements almost always include a coding round that tests DSA under time pressure. Strong habitual practice here directly correlates with selection ([Medium][6]).
        </Text>
        <Text size="lg">
          As Chayan from Thapar puts it, “While both DSA and Development have merits, DSA gains prominence during placements… prioritize DSA if you must choose” ([Medium][1]).
        </Text>
        <Heading type="3">
          <b>Soft skills & projects</b> round out your profile:
        </Heading>
        <Text size="lg">
          Once you clear CGPA and DSA hurdles, recruiters look for clear communication, teamwork experience, and domain-relevant projects (especially internships). Neglecting these can still cost you the final offer.
        </Text>
        <Heading type="2">
          Bottom line:
        </Heading>
        <Text size="xl" variations={["bold", "italic"]}>
          <b>Maintain CGPA above the cutoff</b> to get your foot in the door—but <b>build a daily habit of DSA practice</b>, seek internships/projects early, and polish your communication and networking from Year 1. These combined habits are the strongest predictors of successful placement by the end of your fourth year.
        </Text>
        <Heading type="2">Refrences</Heading>
        <div size="md">
          <div className="flex flex-row gap-x-1">
            <Link height="30px" /> <Text size="md">[1]: https://medium.com/%40csinha134/a-roadmap-from-freshman-to-final-year-145b0e80cc5c "A Roadmap from freshman to final year… | by Chayan Sinha | Medium"</Text>
          </div>
        </div> 
        <div size="md">
          <div className="flex flex-row gap-x-1">
            <Link height="30px" /> <Text size="md">[2]: https://www.indiatoday.in/education-today/featurephilia/story/engineering-graduates-struggle-can-colleges-fix-the-skills-gap-2695180-2025-03-18?utm_source=chatgpt.com "Engineering graduates struggle: Can colleges fix the skills gap?"</Text>
          </div>
        </div>
        <div size="md">
          <div className="flex flex-row gap-x-1 ">
            <Link height="30px"/> <Text size="md">[3]: https://timesofindia.indiatimes.com/education/news/six-reasons-why-engineering-graduates-are-struggling-to-find-jobs/articleshow/112141827.cms?utm_source=chatgpt.com "Six Reasons Why Engineering Graduates Are Struggling to Find Jobs"</Text>
          </div>
        </div>
        <div size="md">
          <div className="flex flex-row gap-x-1">
            <Link height="30px" /> <Text size="md">[4]: https://timesofindia.indiatimes.com/education/news/pursuing-engineering-once-a-fad-now-a-dilemma-only-10-percent-of-15-lakh-graduates-likely-to-land-jobs-this-year/articleshow/114686084.cms?utm_source=chatgpt.com "Only 10 percent of 15 lakh graduates likely to land jobs this year"</Text>
          </div>
        </div>
        <div size="md">
          <div className="flex flex-row gap-x-1">
            <Link height="30px" /> <Text size="md">[5]: https://www.reddit.com/r/developersIndia/comments/11a0aii/how_important_is_cgpa_for_placements/?utm_source=chatgpt.com "How important is CGPA for placements? : r/developersIndia - Reddit"</Text>
          </div>
        </div>
        <div size="md">
          <div className="flex flex-row gap-x-1">
            <Link height="30px" /> <Text size="md">[6]: https://saharshsonu40.medium.com/hidden-secret-of-engg-campus-placements-no-one-speaks-about-3e6370dc218?utm_source=chatgpt.com "Hidden Secret of Engg Campus Placements no-one speaks about"</Text>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}