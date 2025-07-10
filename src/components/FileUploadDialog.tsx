'use client';

import { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface FileUploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete: (fileData: {
    id: string;
    name: string;
    size: string;
    addedDays: number;
    summary: string;
    categories: {
      name: string;
      stats: Record<string, any>;
    }[];
  }) => void;
}

export default function FileUploadDialog({ isOpen, onClose, onUploadComplete }: FileUploadDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check file size (20MB limit)
      if (selectedFile.size > 20 * 1024 * 1024) {
        setError('File size must be less than 20MB');
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Only PDF, DOC, DOCX, and TXT files are allowed');
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: e.dataTransfer.files } } as any);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const uploadFile = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    // Create FormData
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Simulate upload progress
      const totalTime = 2000; // 2 seconds
      const interval = 100; // Update every 100ms
      const steps = totalTime / interval;
      let currentStep = 0;

      const progressInterval = setInterval(() => {
        currentStep++;
        const progress = Math.min((currentStep / steps) * 100, 99);
        setUploadProgress(progress);
        
        if (currentStep >= steps) {
          clearInterval(progressInterval);
          setUploadProgress(100);
          setIsUploading(false);
          // Start analysis after upload
          mockAnalyzeFile();
        }
      }, interval);

      // Here you would normally make an API call to upload the file
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // if (!response.ok) throw new Error('Upload failed');

    } catch (err) {
      setError('Failed to upload file. Please try again.');
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const mockAnalyzeFile = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    setTimeout(() => {
      const mockCategories = [
        {
          name: 'Patient Demographics',
          stats: {
            totalPatients: Math.floor(Math.random() * 1000) + 500,
            averageAge: Math.floor(Math.random() * 30) + 30,
            genderDistribution: {
              male: Math.floor(Math.random() * 20) + 40,
              female: Math.floor(Math.random() * 20) + 40
            }
          }
        },
        {
          name: 'Treatment Outcomes',
          stats: {
            successRate: Math.floor(Math.random() * 20) + 75,
            averageRecoveryTime: Math.floor(Math.random() * 10) + 10,
            complications: {
              mild: Math.floor(Math.random() * 10) + 5,
              moderate: Math.floor(Math.random() * 5) + 2,
              severe: Math.floor(Math.random() * 2)
            }
          }
        }
      ];

      const mockFileData = {
        id: Math.random().toString(36).substr(2, 9),
        name: file?.name || 'Untitled.pdf',
        size: `${((file?.size || 0) / (1024 * 1024)).toFixed(1)} MB`,
        addedDays: 0,
        summary: 'This medical research document contains patient demographic data and treatment outcomes. Key findings suggest positive correlation between early intervention and recovery rates.',
        categories: mockCategories
      };

      onUploadComplete(mockFileData);
      setIsAnalyzing(false);
      setFile(null);
      setUploadProgress(0);
      onClose();
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setError(null);
    setUploadProgress(0);
    setIsUploading(false);
    setIsAnalyzing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#0D0F2B] rounded-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Upload Research File</h2>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {!file ? (
            <div
              className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-500">
                PDF, DOC, DOCX or TXT (max. 20MB)
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#1C1E33] rounded-lg p-4">
                <p className="text-white font-medium mb-1">{file.name}</p>
                <p className="text-sm text-gray-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>

              {isUploading && (
                <div className="w-full bg-[#1C1E33] rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}
              
              {isAnalyzing ? (
                <div className="flex items-center justify-center gap-3 py-2">
                  <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
                  <span className="text-gray-400">Analyzing document...</span>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2 bg-[#1C1E33] text-white rounded-lg hover:bg-[#252942] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={uploadFile}
                    disabled={isUploading}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-5 w-5" />
                        Upload
                      </>
                    )}
                  </button>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 