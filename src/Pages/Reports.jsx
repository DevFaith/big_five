import React, { useState } from 'react';

const sections = [
  {
    title: "Lion",
    content: "Safety of people with the Lion: Always maintain a safe distance and avoid sudden movements."
  },
  {
    title: "Elephant",
    content: "Safety of people with the Elephant: Do not approach the elephants and follow the guide's instructions."
  },
  {
    title: "Giraffe",
    content: "Safety of people with the Giraffe: Stay calm and do not feed the giraffes without supervision."
  },
  {
    title: "Zebra",
    content: "Safety of people with the Zebra: Do not make loud noises or sudden movements near zebras."
  },
  {
    title: "Rhino",
    content: "Safety of people with the Rhino: Keep a safe distance and avoid standing directly in their path."
  },
  {
    title: "Cheetah",
    content: "Safety of people with the Cheetah: Do not run or make sudden movements near cheetahs."
  }
];

const AnimalsSeen = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleCheckboxChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <div className="p-8 bg-gray-100">
      {sections.map((section, index) => (
        <Section 
          key={index}
          title={section.title} 
          content={section.content}
        />
      ))}
      <FormSection 
        sections={sections} 
        selectedAnimal={selectedAnimal} 
        onCheckboxChange={handleCheckboxChange} 
      />
    </div>
  );
}

const Section = ({ title, content }) => (
  <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8 last:mb-0">
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        {content}
      </p>
    </div>
  </div>
);

const FormSection = ({ sections, selectedAnimal, onCheckboxChange }) => (
  <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Report an Animal</h2>
    <form>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <label className="text-lg text-gray-600">
            <input 
              type="checkbox" 
              value={section.title} 
              checked={selectedAnimal === section.title} 
              onChange={onCheckboxChange} 
              className="mr-2"
            />
            {section.title}
          </label>
        </div>
      ))}
    </form>
  </div>
);

export default AnimalsSeen;