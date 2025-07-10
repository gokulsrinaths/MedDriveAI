'use client';

import { motion } from 'framer-motion';
import { File, FileText, FileSpreadsheet, Folder, Clock, CheckCircle, AlertCircle, Clock4 } from 'lucide-react';
import { gradients, typography, effects } from '@/lib/premium-design';

interface FileProps {
  file: {
    id: string;
    name: string;
    type: string;
    size: string;
    updatedAt: string;
    status: string;
  };
}

export default function FileCard({ file }: FileProps) {
  const getIcon = () => {
    switch (file.type) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-500" />;
      case 'excel':
        return <FileSpreadsheet className="w-6 h-6 text-green-500" />;
      case 'folder':
        return <Folder className="w-6 h-6 text-blue-500" />;
      default:
        return <File className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusIcon = () => {
    switch (file.status) {
      case 'reviewed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock4 className="w-4 h-4 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = () => {
    switch (file.status) {
      case 'reviewed':
        return 'Reviewed';
      case 'pending':
        return 'Pending Review';
      case 'completed':
        return 'Analysis Complete';
      default:
        return 'Unknown Status';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${effects.glow} backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-800/30 bg-white/50 dark:bg-gray-800/50 p-4 cursor-pointer group`}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700/50 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 dark:text-white truncate">
            {file.name}
          </h3>
          
          <div className="mt-1 flex items-center gap-4">
            <span className={`${typography.subtle} flex items-center gap-1`}>
              <Clock className="w-3 h-3" />
              {new Date(file.updatedAt).toLocaleDateString()}
            </span>
            <span className={typography.subtle}>{file.size}</span>
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            {getStatusIcon()}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {getStatusText()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 