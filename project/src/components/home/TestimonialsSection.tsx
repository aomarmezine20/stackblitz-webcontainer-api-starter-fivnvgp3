import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "This product has completely transformed how we work. The efficiency gains are remarkable.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      text: "The best solution we've found for our needs. Customer support is outstanding.",
      author: "Michael Chen",
      role: "CTO, InnovateX"
    },
    {
      text: "Incredibly intuitive and powerful. It's become an essential part of our daily operations.",
      author: "Emily Rodriguez",
      role: "Operations Director, GlobalTech"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:scale-105"
            >
              <Quote className="h-8 w-8 text-indigo-500 mb-4" />
              <p className="text-gray-800 text-lg mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;