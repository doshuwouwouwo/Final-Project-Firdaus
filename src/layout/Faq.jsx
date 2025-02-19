import { useState } from "react";

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container py-8 sm:py-16 lg:py-16">
      <div className="px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-xl font-bold py-4">FAQ</h1>
          <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl pb-8">Explore Common Questions</h2>
          <p className="px-16 items-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ea magnam veritatis nihil sequi dolore debitis voluptate ducimus consectetur odit.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {[
            {
              question: "How can I get started?",
              answer: "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
            },
            {
              question: "What is the pricing structure?",
              answer: "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
            },
            {
              question: "What kind of support do you provide?",
              answer: "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
            },
            {
              question: "Can I cancel my subscription anytime?",
              answer: "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
            },
          ].map((faq, index) => (
            <div key={index} className="transition-all duration-1000 bg-[#13161f] border border-gray-200 shadow-lg cursor-pointer hover:bg-[#13161f]">
              <button type="button" onClick={() => toggleQuestion(index)} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold text-white">{faq.question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${activeQuestion === index ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-1000 delay-200 ease-in-out ${activeQuestion === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-white">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-300 text-base mt-9">
          Still have questions? <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline text-white">Contact our support</span>
        </p>
      </div>
    </section>
  );
}
