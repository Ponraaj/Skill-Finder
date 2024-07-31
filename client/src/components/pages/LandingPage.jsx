import React from 'react'

function LandingPage() {
  return (
    <div className="grotesk">
    <section className="text-black">
        <div className="inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="pl-10 lg:w-2/3">
                <h2 className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[3.2em] font-bold text-black">
                    An educational app, gain seamless learning experience.
                </h2>
                <p className="mt-4 lg:mt-6 max-w-2xl text-lg sm:text-xl font-semibold text-[#404040] leading-7">
                    We at Skill-Finder will help you develop skills and find jobs which are related to your current skills and past work experiences thereby removing the ideology of dilemma.
                </p>
            </div>
            <div className="pb-10 lg:mt-12 h-auto lg:w-1/3 flex justify-center items-center">
                <img src="https://solutions.technologyadvice.com/wp-content/uploads/2023/06/friendly-chatbot.jpg" alt="Hero" className="w-96 h-96" />
            </div>
        </div>
        <div className="lg:mt-10 bg-white">
            <div className="mx-auto">
                <div className="mx-auto px-4 sm:px-6 lg:px-24">
                    <div className="flex w-full flex-col text-center">
                        <h2 className="mb-5 text-4xl sm:text-4xl lg:text-4xl font-bold text-black">
                            Finding the right skills at the right time.
                        </h2>
                    </div>
                    <div className="pt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 text-center">
                        {["Skills","Education","Experience","Courses","Road Map","Career Guidance"].map((item) => (
                            <div key={item} className="flex items-center justify-center">
                                <p className="w-[68%] block p-2 object-contain text-xl border-solid border-2 rounded-lg bg-green-500 text-white font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-black mt-[100px]">
                <div className="max-w-9xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-24">
                    <div className="w-full py-4 text-center lg:w-2/3">
                        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Key Features of Our Chatbot Application
                        </h2>
                        <p className="mb-4 text-base sm:text-lg leading-relaxed font-semibold text-[#404040]"> 
                        Our chatbot application offers a seamless user experience by 
                        integrating user authentication with Supabase, AI-powered 
                        functionalities using the Gemini API, and a responsive UI 
                        designed with Tailwind CSS. Additionally, it provides robust 
                        educational content management, ensuring a comprehensive and 
                        intuitive learning platform.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center'>
                        <img className="w-full sm:w-64 lg:w-64 mt-8 lg:mt-12 rounded object-cover object-center" src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png" alt="img" />
                        <img className="w-full sm:w-64 lg:w-64 mt-8 lg:mt-12 rounded object-cover object-center" src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png?f=webp" />
                        <img className="w-full sm:w-80 lg:w-80 mt-8 lg:mt-12 rounded object-cover object-center" src="https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/6584a9975ade35940f95e9ba_2.webp" alt="img" />
                        <img className="w-full sm:w-48 lg:w-48 mt-8 lg:mt-12 rounded object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7phlVWLIV0fSW-2Zcu2mdvOV45peFn8439_0N7LwOgHnYuaae3eRLcPOvJcE9HeZCLpc" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-24 pt-24 lg:pt-32 pb-16 lg:pb-24">
            <div className="my-3 flex w-full flex-col text-left lg:text-center">
                <h2 className="bold mb-6 lg:mb-8 text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight text-black">
                Unlock limitless career potential with smart AI, <br className="hidden lg:inline-block" />
                tailored insights, and seamless integrations—your future, reimagined.
                </h2>
            </div>
            <div className="flex w-full flex-col sm:flex-row justify-center pt-16 lg:pt-24 text-center">
                <p className="underline-blue py-2 mb-4 sm:mb-0 sm:mr-4 text-2xl sm:text-2xl font-semibold text-black">Try our chatbot <a href="/login" className='text-green-700 hover:underline'>
                    Login
                </a></p>
            </div>
        </div>
        <footer>
            <div className="flex w-full flex-col sm:flex-row justify-center pt-8 lg:pt-8 text-center pb-8">
                <p className='text-lg'>Null Pointerz &copy;2024</p>
            </div>
        </footer>
    </section>
</div>

  )
}

export default LandingPage