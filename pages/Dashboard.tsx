import React, { useEffect, useState } from 'react';

interface DiseaseResponse {
  response_text: string;
  // Add other expected properties here
}

const fetchData = async () => {
  const response = await fetch('http://127.0.0.1:5000/twilio/transcribe');
  const data = await response.json();
  return data;
};

// Function to remove markdown formatting
const removeMarkdown = (text: string) => {
  return text.replace(/\*\*/g, ''); // Removes ** from the text
};

const MyComponent = () => {
  const [data, setData] = useState<DiseaseResponse | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      {data ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Information</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">{removeMarkdown(data.response_text.split('\n\n')[0].split(': ')[0])}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">{removeMarkdown(data.response_text.split('\n\n')[1].split(': ')[0])}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">{removeMarkdown(data.response_text.split('\n\n')[2].split(': ')[0])}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">{removeMarkdown(data.response_text.split('\n\n')[3].split(': ')[0])}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;