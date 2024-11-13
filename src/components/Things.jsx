import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Things = () => {
    return (
        <div className="min-h-[550px] bg-zinc-800 p-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white my-12">
            Things You Might Be Wondering
          </h2>
          <div className="w-full max-w-6xl">
            <div className="space-y-4">
              <div className="border-none">
                <button
                  className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
                >
                  What is social media marketing?
                  <IoIosArrowDown className="ml-2 text-white" />
                </button>
              </div>
    
              <div className="border-none">
                <button
                  className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
                >
                  Why is social media marketing important for my business?
                  <IoIosArrowDown className="ml-2 text-white" />
                </button>
              </div>
    
              <div className="border-none">
                <button
                  className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
                >
                  How do you measure the success of a social media marketing campaign?
                  <IoIosArrowDown className="ml-2 text-white" />
                </button>
              </div>
    
              <div className="border-none">
                <button
                  className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
                >
                  How long does it take to see results from social media marketing?
                  <IoIosArrowDown className="ml-2 text-white" />
                </button>
              </div>
    
              <div className="border-none">
                <button
                  className="bg-zinc-600/50 hover:bg-zinc-600/70 rounded-lg px-6 py-4 text-white text-left w-full focus:outline-none flex justify-between items-center"
                >
                  Which social media platforms should I focus on?
                  <IoIosArrowDown className="ml-2 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};


export default Things