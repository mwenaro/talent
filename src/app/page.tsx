import {
  AboutSection,
  AuthNav,
  CoursesSection,
  CreateStoreSection,
  FAQSection,
  FlexibleSection,
  Footer,
  HeroSection,
  LinkBioSection,
  LinkWhatsappSection,
  ManageOrdersSection,
  MyMarquee,
  OurPartnersSection,
  PricingSection,
  RegistrationForm,
  SaveTimeSection,
  SecondaryCTASection,
  SectionTemplate,
  Typography,
  VendorHeader,
} from "@/components";
import Carousel from "@/components/organisms/Carousel";
import { GALLARY_IMAGES } from "./assets/images";

export default function Home() {
  return (
    <div className="w-full flex flex-col  max-w-7xl mx-auto ">
      <VendorHeader logoImageSrc={"/big-logo.png"}>
        <ul className="flex"></ul>
        {/* <AuthNav /> */}
      </VendorHeader>

      <main className="w-full px-6 mt-24 flex flex-col justify-center items-center">
        {/* hero */}
        <MyMarquee>
          Hurry Up {new Date().toLocaleString("en-EN", { month: "long" })}{" "}
          intake is on-going
        </MyMarquee>
        <div className="w-full">
          <Carousel images={GALLARY_IMAGES} />
        </div>
        <AboutSection imageUrl="/assets/images/about.jpg" />
        <CoursesSection />
        <RegistrationForm />

        {/* <HeroSection /> */}

        {/*savetime  */}
        {/* <SaveTimeSection /> */}

        {/* Flexible */}
        {/* <FlexibleSection /> */}

        {/* ManageOrders */}
        {/* <ManageOrdersSection /> */}
        {/* <SectionTemplate
          heading="Manage orders efficiently"
          subHeading="No more spreadsheets or missed orders. Track your order status, payment status, daily sales and customer data all in one place."
          imgSrc="/vendors/vendor/manage_order.webp"
        /> */}

        {/* CreateStore */}
        {/* <CreateStoreSection /> */}
        {/* <SectionTemplate
          heading="Create online store in minutes"
          subHeading="Beautiful product catalog. Built-in search engine optimisations."
          imgSrc="/vendors/vendor/create_store.webp"
          rowReverse = {true}
        /> */}

        {/* LinkBio */}
        {/* <LinkBioSection /> */}
        {/* <SectionTemplate
          heading="Link In Bio"
          subHeading="Turn your followers to sales."
          imgSrc="/vendors/vendor/link_bio.webp"
          // rowReverse = {true}
        /> */}

        {/* LinkWhatsapp */}
        {/* <LinkWhatsappSection />
        <SectionTemplate
          heading="Link in WhatsApp Auto Reply"
          subHeading="Minimise customer waiting time."
          imgSrc="/vendors/vendor/link_to_whatsapp.webp"
          // rowReverse = {true}
        /> */}
        {/* Support
        <SupportSection /> */}

        {/* OurPartners */}
        {/* <OurPartnersSection /> */}

        {/* Pricing */}
        {/* <PricingSection /> */}

        {/* FAQ */}
        {/* <FAQSection /> */}

        {/* SecondaryCTA */}
        {/* <SecondaryCTASection /> */}
      </main>
      <Footer />
    </div>
  );
}
