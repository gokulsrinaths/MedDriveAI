'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, Users, Shield } from 'lucide-react';

export default function TryDemoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<'researcher' | 'patient' | null>(null);

  const handleDemoStart = async (type: 'researcher' | 'patient') => {
    setLoading(type);
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/workspace');
  };

  return (
    <div className="min-h-screen bg-[#0D0F2B] text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F2B] to-[#1C1E33] opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="text-sm text-purple-400">AI-Powered Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-semibold tracking-tight mb-8"
          >
            The Future of Medical Research
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Choose your path to explore MedDrive AI's advanced platform
          </motion.p>
        </div>

        {/* Demo Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-32">
          {/* For Researchers */}
          <motion.button
            onClick={() => handleDemoStart('researcher')}
            disabled={loading !== null}
            className={`group relative overflow-hidden rounded-lg bg-[#1C1E33] p-8 text-left transition-all
              hover:bg-[#252942] border border-gray-800 hover:border-blue-500/50
              ${loading === 'researcher' ? 'animate-pulse' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-500">Research Portal</span>
              </div>
              
              <h2 className="text-2xl font-semibold mb-3">For Researchers</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Access cutting-edge AI tools and manage research data with enterprise-grade security and collaboration features.
              </p>
              
              <div className="flex items-center text-blue-500 group-hover:text-blue-400 transition-colors">
                <span className="text-sm font-medium">Start Research Demo</span>
                <ChevronRight className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>

          {/* For Patients */}
          <motion.button
            onClick={() => handleDemoStart('patient')}
            disabled={loading !== null}
            className={`group relative overflow-hidden rounded-lg bg-[#1C1E33] p-8 text-left transition-all
              hover:bg-[#252942] border border-gray-800 hover:border-purple-500/50
              ${loading === 'patient' ? 'animate-pulse' : ''}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10">
                <Shield className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-500">Patient Portal</span>
              </div>
              
              <h2 className="text-2xl font-semibold mb-3">For Patients</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Experience seamless access to your medical records and research participation with privacy-first design.
              </p>
              
              <div className="flex items-center text-purple-500 group-hover:text-purple-400 transition-colors">
                <span className="text-sm font-medium">Start Patient Demo</span>
                <ChevronRight className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-gray-800 pt-20">
          {[
            { number: '100+', label: 'Research Institutions', color: 'blue' },
            { number: '50M+', label: 'Patient Records', color: 'purple' },
            { number: '99.9%', label: 'Uptime', color: 'green' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl font-semibold mb-2 text-${stat.color}-500`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 text-center"
        >
          <p className="text-sm text-gray-500">
            Trusted by leading medical institutions worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
} 