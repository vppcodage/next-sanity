import React from 'react'
import PlanContactInformation from './PlanContactInformation'
import PlanContactForm from './PlanContactForm'

const PlancontactSection = ({ setCurStep }) => {
    return (
        <section className="pt-[3rem] sm:pt-[6rem] emd:pt-[8.625rem] pb-[2rem] em:pb-[3rem] sm:pb-[5rem]">
            <div className='container'>
                <div className='mt-14 sm:mt-20 p-[0.5rem] emd:p-[2.375rem] bg-pricing-gradient shadow-pricing-box rounded-xl block emd:flex'>
                    <PlanContactInformation />
                    <PlanContactForm setCurStep={setCurStep} />
                </div>
            </div>

        </section>
    )
}

export default PlancontactSection
