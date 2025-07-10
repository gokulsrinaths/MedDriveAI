'use client';

import { useEffect, useState } from 'react';
import { testDatabaseSetup } from '@/lib/supabase';

export default function TestPage() {
  const [testResults, setTestResults] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const runTests = async () => {
      try {
        const success = await testDatabaseSetup();
        setTestResults({
          success,
          message: success 
            ? 'Database setup verified successfully!' 
            : 'There were some issues with the database setup.'
        });
      } catch (error) {
        setTestResults({
          success: false,
          message: 'Error testing database setup: ' + (error as Error).message
        });
      }
    };

    runTests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Database Setup Test</h1>
        
        {testResults === null ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Testing database setup...</p>
          </div>
        ) : (
          <div className={`bg-white p-6 rounded-lg shadow ${
            testResults.success ? 'border-green-500' : 'border-red-500'
          } border-2`}>
            <h2 className={`text-xl font-semibold mb-4 ${
              testResults.success ? 'text-green-600' : 'text-red-600'
            }`}>
              {testResults.success ? 'Success!' : 'Error'}
            </h2>
            <p className="text-gray-700">{testResults.message}</p>
            
            {!testResults.success && (
              <div className="mt-4 p-4 bg-red-50 rounded">
                <p className="text-sm text-red-600">
                  Please check the browser console for detailed error messages.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 