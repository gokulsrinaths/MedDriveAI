export const gradients = {
  primary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200',
  secondary: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 transition-all duration-200',
};

export const shadows = {
  subtle: 'shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)]',
  medium: 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
  highlight: 'shadow-[0_2px_40px_-4px_rgba(6,182,212,0.15)]',
  glow: 'shadow-[0_0px_20px_rgba(6,182,212,0.35)]',
};

export const animations = {
  hover: 'transition duration-200 ease-in-out hover:opacity-90',
  tap: 'active:scale-[0.98]',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-700',
  fadeIn: 'animate-in fade-in duration-500',
  popIn: 'animate-in zoom-in-50 duration-300',
};

export const typography = {
  h1: 'text-4xl font-bold text-gray-900 dark:text-white',
  h2: 'text-3xl font-bold text-gray-900 dark:text-white',
  h3: 'text-2xl font-bold text-gray-900 dark:text-white',
  h4: 'text-xl font-bold text-gray-900 dark:text-white',
  lead: 'text-lg text-gray-600 dark:text-gray-300',
  body: 'text-base text-gray-600 dark:text-gray-300',
  subtle: 'text-sm text-gray-500 dark:text-gray-400',
};

export const containers = {
  outer: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  inner: 'max-w-3xl mx-auto',
};

export const cards = {
  primary: 'bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700',
  glass: 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm',
  highlight: 'rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20',
  hover: 'hover:border-blue-500/50 hover:shadow-lg transition-all duration-200',
};

export const buttons = {
  primary: 'inline-flex items-center justify-center font-medium shadow-lg shadow-blue-500/25 dark:shadow-blue-500/50',
  secondary: 'inline-flex items-center justify-center font-medium border border-gray-200 dark:border-gray-800',
  ghost: 'inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
};

export const effects = {
  blur: 'backdrop-blur-xl',
  glow: 'shadow-xl shadow-blue-500/10',
  hover: 'hover:shadow-lg hover:scale-[1.02] transition-all duration-200',
}; 