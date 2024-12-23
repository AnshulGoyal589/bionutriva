import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const faqData = [
    {
      question: "How do I get started with the nutrifit website?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
    },
    {
      question: "How can I get products from nutrifit?",
      answer: "Our products are available through our online store and at select retail locations. You can browse our complete catalog and make purchases directly through our website's product section."
    },
    {
      question: "How do I schedule a consultation with a nutritionist?",
      answer: "You can schedule a consultation through our online booking system. Simply visit the consultation page, select your preferred nutritionist, choose an available time slot, and complete the booking process."
    },
    {
      question: "Where are the nutrifit clinic branches?",
      answer: "We have multiple clinic branches located across various cities. You can find your nearest branch using our clinic locator tool on our website or contacting our customer service team."
    }
  ];

  return (
    <div className="w-full max-w-[80vw] mx-auto py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services and products. Can't find what you're looking for? Contact our support team.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-6">
        {faqData.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <AccordionTrigger 
              className="px-6 py-5 text-left hover:no-underline group"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xl font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                {/* <Plus className="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 group-data-[state=open]:rotate-45" /> */}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-600">
              <div className="pt-2 text-lg leading-relaxed">
                {faq.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          Still have questions?{' '}
          <a href="#contact" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default Faq;