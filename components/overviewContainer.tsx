import React from 'react';

export default function OverviewContainer() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Browser Chrome */}
      <div className="bg-gray-700 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-600 rounded px-4 py-1 w-96 text-center text-gray-300 text-sm">
            getcrux.ai
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-48px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-8 py-4">
          </header>

          {/* Content Area */}
          <div className="p-8">
          </div>
        </main>
      </div>
    </div>
  );
}