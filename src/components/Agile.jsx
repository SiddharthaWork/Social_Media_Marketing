import React from 'react';
import { Lightbulb, MessageSquare, Users, BarChart2, Banknote } from "lucide-react";

const Agile = () => {
    return (
        <div className="bg-gray-100">
            <div className="bg-gray-100 px-4 py-16 md:px-6">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                        Professional Social Media Marketing Agency in Nepal - Agile and Results-Driven Approach
                    </h1>
                    <p className="mx-auto mb-16 max-w-4xl text-gray-600">
                        Being the top social media marketing company in Nepal, we're committed to using our comprehensive digital marketing
                        services to provide measurable results. Our approach includes all aspects, from assessing your company and rivals
                        to pinpointing your intended market. To guarantee transparency and efficiency, we are experts in authoring
                        targeted material, creating and distributing captivating content, auditing campaigns, and delivering thorough
                        monthly reports. Furthermore, our dedication to providing outstanding customer service guarantees a smooth and
                        fulfilling experience for our customers.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-18">
                <div className="relative max-w-4xl mx-auto">
                    {/* Image is now visible on all screen sizes and will scale appropriately */}
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <img src="agile.svg" alt="Agile Image" className="w-full h-full " />
                    </div>

                    {/* Button placed below the image with responsive margin */}
                    <div className="flex justify-center mt-8 md:mt-12">
                        <button className="bg-[#29b7f0] hover:bg-[#29b7f0]/90 text-white px-8 py-3 mb-8 text-base rounded-md">
                            Discuss your project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Agile;
