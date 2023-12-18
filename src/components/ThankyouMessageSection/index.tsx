import { ThankYouImageType } from "@/lib/sanity/types/page"
import CustomImage from "../CustomImage"

const ThankyouMessageSection: React.FC<ThankYouImageType> = ( block ) => {
    const  {thank_you_image}  = block || {}

    return (
        <div className="pt-[10em] md:pt-[13em] pb-[4em]">
            <div className="container">
                <div className="py-0 sm:py-[3em] lg:py-[5em] mx-auto text-center [&>img]:max-w-[90%] em:[&>img]:max-w-[70%] md:[&>img]:max-w-[50%] [&>img]:mx-auto">
                  {thank_you_image &&  <CustomImage block={thank_you_image} />}
                </div>
            </div>
        </div>
    )
}

export default ThankyouMessageSection
