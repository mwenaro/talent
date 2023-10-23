import { SectionTitle, SectionWrapper, Typography } from "@/components";
import Mission from "./Mission";

interface AboutSectionProps {
  imageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ imageUrl }) => {
  return (
    <SectionWrapper sectionId="about" className="max-w-[1000px]">
      <SectionTitle className="text-center text-4xl p-2 md:p-10 ">
        About us
      </SectionTitle>
      <Typography variant="p" className="text-lg max-w-[1000px] mx-auto  mb-4">
        TalentFlow is a non-profit organization dedicated to empowering
        individuals, Schools and Corprates through technology. We believe that
        access to technology and digital literacy skills are essential for
        personal and professional growth in the modern world. Our organization
        strives to bridge the digital divide and create opportunities for
        underserved communities to thrive in the digital age.
      </Typography>

      <div className="w-full flex flex-col py-2 md:py-4 md:gap-4">
        <Mission
          className=" w-full flex flex-col sm:flex-row justify-center items-center"
          title="Our Mission"
          // icon={<Icon variant="arrowRight" />}
          description="We are on a mission to provide exceptional education that equips individual with skills and knowledge needed to thrive in a dynamic world,  fostering a culture of continuous growth and development."
        />
        <Mission
          className=" w-full flex flex-col sm:flex-row justify-center items-center"
          title="Our Vision"
          // icon={<Icon variant="arrowRight" />}
          description=" To become a premier training institute, dedicated to excellence and innovation"
        />
      </div>
      <p className="mb-20"></p>
    </SectionWrapper>
  );
};

export default AboutSection;
