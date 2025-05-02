
import { useState } from 'react';

export default function NewProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [urls, setUrls] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <main className="bg-[#FAFAFA] min-h-screen p-6 sm:p-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
        <div className="flex items-center mb-6">
          <img src="/images/netmen-ai-studio-logo.png" width="100" alt="Logo" />
          <h1 className="ml-4 text-2xl font-bold text-gray-900">Create Your Amazon Listing Project</h1>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Project Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Product Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Competitor URLs</label>
            <input type="text" value={urls} onChange={(e) => setUrls(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Additional Notes (Optional)</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows="2" className="mt-1 w-full border border-gray-300 rounded-md p-2" />
          </div>
          <button type="submit" className="w-full bg-[#FF9900] text-white font-semibold py-2 px-4 rounded hover:bg-[#e48800]">Create Project</button>
        </form>
      </div>
    </main>
  );
}
