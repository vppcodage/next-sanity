import { ContactInformationSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
const LabelLink = dynamic(() => import("../LabelLink"));
const CustomImage = dynamic(() => import("../CustomImage"));

const ContactInformationSection: React.FC<ContactInformationSectionType> = (
  block
) => {
  const { email, phoneNumber, officeAddress, officeTime, contactUsCard } =
    block || {};
  const { addressTitle, addressDescription, directions } = officeAddress || {};
  const { content } = officeTime || {};
  return (
    <div className="mt-[2em] mb-[5em]">
      <div className="container">
        <div className="contact-info-inner block lg:flex justify-between">
          <div className="contact-left w-full lg:w-[40%] grid-cols-[1fr] sm:grid-cols-[1fr_1fr] grid lg:block">
            <div className="contact-details mb-[2em] col-span-1 sm:col-span-2">
              <h6 className="border-b-[0.0625em] border-[#00000033] inline-block text-base md:text-lg xl:text-xl font-normal tracking-wide text-black-color font-Mont py-[0.25em]">
                {email && <LabelLink block={email} />}
              </h6>
              <h6 className="text-base md:text-lg xl:text-xl font-Mont tracking-wide py-[0.25em] text-black-color">
                {phoneNumber}
              </h6>
            </div>
            <div className="[&>div]:mb-5 mb-[2em] [&>div>h5]:text-left [&>div>h5]:text-sm md:[&>div>h5]:text-lg  xl:[&>div>h5]:text-xl [&>div>h5]:font-medium [&>div>h5]:tracking-wide [&>div>h5]:text-black-color [&>p]:text-xs md:[&>p]:text-sm xl:[&>p]:text-base [&>p]:font-normal [&>p]:font-Mont [&>p]:pb-[0.5em] [&>a]:text-xs md:[&>a]:text-sm xl:[&>a]:text-base [&>a]:text-black-color [&>a]:border-b-dark-pink [&>a]:font-Mont [&>a]:opacity-70 [&>a]:border-b-[0.125em] hover:[&>a]:text-dark-pink  [&>a]:pb-0">
              {addressTitle && <TitleSubtitle block={addressTitle} />}
              {addressDescription && <RichText block={addressDescription} />}
              {directions && <LabelLink block={directions} />}
            </div>
            <div className="office-timings [&>p]:text-xs md:[&>p]:text-sm xl:[&>p]:text-base [&>p]:font-Mont [&>p]:text-[#00000080] [&>p]:pb-[1em] [&>p]:font-normal [&>p>strong]:inline-block [&>p>strong]:font-normal [&>p>strong]:text-black-color [&>p>strong]:min-w-[7em]">
              <h6 className="text-base md:text-lg xl:text-xl font-medium tracking-wide mb-[1em] ">
                {officeTime?.title}
              </h6>
              {content && <RichText block={content} />}
            </div>
          </div>

          <div className="w-full md:w-[80%] lg:w-[55%] mt-[10em] lg:mt-[7em] ml-auto lg:ml-auto mr-auto lg:mr-0">
            <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-x-[1.5em] gap-y-[14em] sm:gap-y-[1.5em]">
              {contactUsCard?.map((item, index) => {
                const { section_description, section_image } = item || {};
                return (
                  <li key={index} className="h-full">
                    <div className="person-details relative block sm:flex justify-between h-full">
                      <div className="person-profile absolute left-0 right-0 -top-[10em] flex justify-center [&>img]:max-w-[9em]">
                        {section_image && <CustomImage block={section_image} />}
                      </div>
                      <div className="person-info bg-white-color pt-[6em] px-[2em] pb-[3em] rounded-2xl text-center shadow-contact-box [&>h6]:text-base md:[&>h6]:text-lg xl:[&>h6]:text-xl [&>h6]:font-medium [&>h6]:font-Mont [&>h6]:mb-[0.5em] [&>p]:font-Mont [&>p]:text-xs xl:[&>p]:text-sm [&>a]:mt-[0.5em] [&>a]:bg-[#222549] [&>a]:rounded [&>a]:text-xs xl:[&>a]:text-sm [&>a]:py-[0.75em] [&>a]:px-[3em] hover:[&>a]:bg-dark-pink [&>a]:hover:text-white-color [&>a]:font-normal flex flex-col items-center justify-between ">
                        {section_description && (
                          <RichText block={section_description} />
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformationSection;
