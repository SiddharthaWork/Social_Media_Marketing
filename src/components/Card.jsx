import React from 'react'

const Card = () => {
    const caseStudies = [
        {
            title: "SIP Abacus",
            subtitle: "Generating Awareness for a Drawing Competition",
            description: "The case study showcases how team Webstudio Nepal has strategized engaging digital marketing campaigns in six states to drive awareness about an online drawing competition organized by SIP Abacus.",
        },
        {
            title: "Hip Hip HERray",
            subtitle: "Driving Brand Awareness",
            description: "The case study depicts how Webstudio Nepal generated brand awareness for Hip Hip HERray - India's first digital content studio for women - through effective social media marketing campaigns.",
        },
    ]

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto z-20">
                <h2 className="text-3xl font-bold text-center mb-12">CASE STUDY</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-gray-300/40 border-none rounded-3xl p-6 relative z-30">
                            <div className="mb-4">
                                <h3 className="text-[#31B1E7] text-2xl font-bold">{study.title}</h3>
                                <h4 className="text-xl font-semibold mt-2">{study.subtitle}</h4>
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-600">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='relative pt-8 z-10'>
                <div className="absolute mt-[-22rem] md:ml-[20px] big:ml-[410px] 
                 laptop:ml-[332px] xs:mt-[-27rem] xs:ml-32 pm:ml-[520px] user:ml-[410px]
                md:bottom-4  md:mt-6 tab-ml-[410px]
                small:mt-[-22rem] small:ml-[15rem] small:block small2:mt-[-24rem] small2:ml-[12rem] md:block
                
                ">
                    <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 text-white px-4 py-2">
                        Read Blog Post 
                    </button>
                </div>
                </div>

                {/* verysmall:mt-[-23rem] verysmall:pl-12 small:pt-4 small:pl-28 */}
                

                <div className='relative z-10'>
                <div className="absolute right-4 mt-[-50px] md:bottom-4 md:right-2">
                    <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 text-white px-4 py-2">
                        Read Blog Post
                    </button>
                </div>
                </div>
                </div>
            </div>
    ); 
}

export default Card