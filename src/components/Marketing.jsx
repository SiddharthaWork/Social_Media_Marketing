import React from 'react'
import Image from 'next/image';

const Marketing = () => {
    return (
        <div>


            <section className="bg-[#505051] text-white py-16 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Partner with Our Premier Social Media Marketing Agency in Nepal
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-200">
                        At Webstudio Nepal, we are a committed social media advertising company. Our crew of professional entrepreneurs
                        designs personalized campaigns mainly crafted to reinforce your logo's visibility. Discover the advantages of choosing
                        digital advertising and marketing offerings from Webstudio Nepal.
                    </p>
                </div>
                <div className="flex justify-between items-center gap-8 mt-16">
                    <div className="w-1/3 space-y-8">
                        <div className="text-right space-y-2">
                            <h2 className="text-xl font-semibold">Swift Execution</h2>
                            <p className="text-sm text-gray-300">
                                Experience speedy, targeted, and zone-particular social media marketing techniques that deliver tangible outcomes.
                            </p>
                        </div>

                        <div className="text-right space-y-2">
                            <h2 className="text-xl font-semibold">Reliable Performance</h2>
                            <p className="text-sm text-gray-300">
                                Our dedication to chronic method enhancement ensures sustained excellence in our consequences.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <div className="w-64 h-64 overflow-hidden">
                            <Image
                                src="/image.png"
                                alt="Social Media Marketing"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-1/3 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Expert Management</h2>
                            <p className="text-sm text-gray-300">
                                Our social media experts meticulously reveal, replace, and maintain campaigns to optimize performance.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Focused on Outcomes</h2>
                            <p className="text-sm text-gray-300">
                                Our technique is unified by one overarching purpose: riding your enterprise boom.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 text-white px-8 py-3 text-lg">
                        Contact Us
                    </button>
                </div>
            </section>


        </div>
    )
}

export default Marketing;
