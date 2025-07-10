'use client';

import { 
  ArrowRight,
  Sparkles,
  FileText,
  Shield,
  Eye,
  Lock,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0B1C] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px]"
          />
        </div>

        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        >
          <motion.div 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-indigo-200">Advancing Medical Research with AI</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-5xl sm:text-6xl font-medium tracking-tight mb-8"
          >
            The Future of Medical Research is{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Here</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-xl text-indigo-100/80 mb-6 max-w-2xl mx-auto"
          >
            MedDrive AI combines advanced artificial intelligence with medical expertise to accelerate breakthroughs in healthcare research.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-2 mb-6 text-indigo-100/60"
          >
            <span className="text-indigo-400">🚀</span>
            <span>Backed by LA BioStart Cohort 8</span>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm"
          >
            <div className="flex items-center gap-2 text-indigo-100/60">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span>Featured in Nature Medicine</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-100/60">
              <span className="text-indigo-400">⚡️</span>
              <span>100+ Research Institutions</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-100/60">
              <span className="text-indigo-400">🔬</span>
              <span>HIPAA & IRB Compliant</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="flex items-center justify-center gap-4"
          >
            <Link 
              href="/try-demo"
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 text-white"
            >
              Try MedDrive AI
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="#research"
              className="px-8 py-3 rounded-full border border-indigo-500/20 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 text-indigo-200"
            >
              View Research
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D0F2B] p-8 rounded-2xl border border-indigo-500/10"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">HIPAA Compliant</h3>
              <p className="text-indigo-100/70">
                Enterprise-grade security with full HIPAA compliance and regular audits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0D0F2B] p-8 rounded-2xl border border-indigo-500/10"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Ethical AI</h3>
              <p className="text-indigo-100/70">
                Transparent AI development with clear guidelines and oversight.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0D0F2B] p-8 rounded-2xl border border-indigo-500/10"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Data Privacy</h3>
              <p className="text-indigo-100/70">
                Advanced encryption and strict access controls protect sensitive data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-medium mb-6"
          >
            Join the Future of Medical Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100/80 mb-12"
          >
            Experience the power of AI-driven medical research. Start your journey with MedDrive AI today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/try-demo"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Try MedDrive AI
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-indigo-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-medium">MedDrive AI</span>
            </Link>
            <p className="text-indigo-100/60">
              Advancing medical research with artificial intelligence.
            </p>
            <p className="text-sm text-indigo-100/40">
              © 2025 MedDrive AI. All rights reserved.
            </p>
          </div>
      </div>
      </footer>
    </div>
  );
}
