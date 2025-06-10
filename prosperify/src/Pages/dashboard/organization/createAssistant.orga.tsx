import React, { useState } from 'react';
import CreateAssistantButton from '../../../components/common/dashboardComponent/Organization/create-assistantbutton.orga';

interface Assistant {
  id: number;
  name: string;
  description: string;
  color: string;
}

const CreateAssistantOrga: React.FC = () => {
  const [assistants, setAssistants] = useState<Assistant[]>([
    {
      id: 1,
      name: 'IT Assistant',
      description: 'An AI assistant to optimize the management of your information systems and solve technical issues.',
      color: '#3b82f6', // Blue color for IT Assistant
    },
    {
      id: 2,
      name: 'Design Assistant',
      description: 'An AI assistant that facilitates the creation and optimization of your designs to improve your branding.',
      color: '#fbbf24', // Yellow color for Design Assistant
    },
    {
      id: 3,
      name: 'Productivity Assistant',
      description: 'An AI assistant designed to enhance daily productivity by automating repetitive tasks and providing smart suggestions.',
      color: '#ef4444', // Red color for Productivity Assistant
    },
  ]);

  const handleAddAssistant = (name: string, description: string, color: string) => {
    const newAssistant = {
      id: assistants.length + 1,
      name,
      description,
      color,
    };
    setAssistants((prev) => [...prev, newAssistant]);
  };

  return (
    <div className="p-4 bg-white ">
    <div className="p-4 rounded-lg w-full">
    <h2 className="text-base font-semibold mb-2">Create assistant</h2>
    <p className="mt-1 text-sm text-gray-600">
          Select an assistant to start a new conversation and get the support you need for your projects.
        </p>
    <div className="flex flex-col items-center w-full px-4">
     
      <div className='w-full flex justify-end items-center m-10'>
      <CreateAssistantButton onSave={handleAddAssistant} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {assistants.map((assistant) => (
          <div
            key={assistant.id}
            className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl"
          >
            <div className="h-36 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: assistant.color }}></div>
            <div className="p-4">
              <span className="block mb-1 text-xs font-semibold uppercase" style={{ color: assistant.color }}>
                {assistant.name.toUpperCase()}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{assistant.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{assistant.description}</p>
            </div>
          </div>
        ))}

        {/* Updated button container */}
        <div className="flex justify-center items-center h-full">
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CreateAssistantOrga;
