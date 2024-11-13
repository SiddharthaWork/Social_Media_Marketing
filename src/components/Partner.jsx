import React from "react"
import Image from "next/image"

export default function Component() {
    return (
        <div className="bg-[#505051] text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto space-y-8 mt-14">
                <h1 className="text-4xl font-light text-center sm:text-3xl">
                    Partner with Our Premier Social Media Marketing Agency in Nepal
                </h1>

                <p className="text-center text-gray-300 max-w-4xl mx-auto text-sm sm:text-base">
                    At Webstudio Nepal, we are a committed social media advertising company. Our crew of professional entrepreneurs
                    designs personalized campaigns mainly crafted to reinforce your logo&apos;s visibility. Discover the advantages of choosing
                    digital advertising and marketing offerings from Webstudio Nepal.
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-16 space-y-8 sm:space-y-0">
                    {/* Left Column */}
                    <div className="w-full sm:w-1/3 space-y-4 sm:space-y-[300px] text-center sm:text-right">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Swift Execution</h2>
                            <p className="text-sm text-gray-300">
                                Experience speedy, targeted, and zone-particular social media marketing techniques that deliver tangible outcomes.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Reliable Performance</h2>
                            <p className="text-sm text-gray-300">
                                Our dedication to chronic method enhancement ensures sustained excellence in our consequences.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full flex justify-center sm:w-auto">
                        <div className="w-full h-auto overflow-hidden">
                            <Image
                                src="/image.png"
                                alt="Social Media Marketing"
                                width={1200}  
                                height={1200}
                                className="object-contain max-w-full sm:max-w-[400px] md:max-w-[500px]"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full sm:w-1/3 space-y-4 sm:space-y-[300px] text-center sm:text-left">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Expert Management</h2>
                            <p className="text-sm text-gray-300">
                                Our social media experts meticulously reveal, update, and maintain campaigns to optimize performance.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Focused on Outcomes</h2>
                            <p className="text-sm text-gray-300">
                                Our technique is unified by one overarching purpose: driving your business growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <button className="bg-sky-400 hover:bg-sky-500 text-white px-12 py-2 rounded">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}
