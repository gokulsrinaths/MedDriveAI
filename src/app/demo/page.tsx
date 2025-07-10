'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { gradients, typography, containers, effects, animations, cards } from '@/lib/premium-design';
import { PlayCircle, Brain, Sparkles, ArrowRight } from 'lucide-react';

export default function DemoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoStart = async () => {
    setIsLoading(true);
    // Simulate loading for demo effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/workspace');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />
        <div className="absolute left-1/3 right-0 top-1/4 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />
      </div>

      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className={`${typography.h2} mb-4`}>
            Welcome to the MedDrive AI Demo
          </h2>
          <p className={`${typography.lead}`}>
            Experience the full power of our platform with our interactive demo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className={`${cards.glass} ${effects.glow} backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/30 rounded-3xl p-8 lg:p-12 mb-8`}
        >
          <div className="grid gap-8">
            <div className="text-center">
              <motion.button
                onClick={handleDemoStart}
                disabled={isLoading}
                className={`${gradients.primary} text-white px-8 py-6 rounded-2xl w-full sm:w-auto inline-flex items-center justify-center gap-3 ${animations.hover} relative overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Loading Demo...</span>
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-6 h-6" />
                    <span className="text-lg font-medium">Start Interactive Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-200/10">
                <Brain className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                <p className={typography.subtle}>Experience our advanced AI analysis capabilities</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-200/10">
                <Sparkles className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg font-semibold mb-2">Sample Data</h3>
                <p className={typography.subtle}>Work with pre-loaded research datasets</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-200/10">
                <PlayCircle className="w-8 h-8 mx-auto mb-4 text-emerald-500" />
                <h3 className="text-lg font-semibold mb-2">Full Access</h3>
                <p className={typography.subtle}>Test all premium features instantly</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`${typography.subtle} text-center`}
        >
          This is a demo environment with sample data. No real patient information is used.
        </motion.p>
      </div>
    </div>
  );
} 