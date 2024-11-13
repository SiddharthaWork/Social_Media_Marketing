import React from 'react';

const Social = () => {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-medium mb-6">
                        Social Media Marketing Agency
                        <br />
                        For Businesses in Nepal
                    </h2>
                    <p className="text-gray-600 mb-8 text-justify max-w-full md:max-w-[500px]">
                        Being the top social media marketing company, we understand your target audience, examine their online activity,
                        and choose the best time to publish content to increase interaction. As the top social media marketing company
                        in Nepal, we produce excellent social media content that perfectly reflects your brand. Additionally, we make
                        use of paid advertising techniques to improve conversion rates through efficient advertising and immediate
                        visibility. Our writers and designers are committed to creating excellent content and running campaigns that
                        increase the effect of your brand.
                    </p>
                    <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 w-32 h-10 font-medium text-white">Let&apos;s team up</button>
                </div>
                <div className="relative ">
                    <img
                        src="socialing.png"
                        alt="Social Media Marketing"
                        className="w-[300px] md:w-[420px] mx-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Social;
