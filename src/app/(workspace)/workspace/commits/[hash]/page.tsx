'use client';

import { useParams } from 'next/navigation';
import { gradients, typography, containers, cards, effects } from '@/lib/premium-design';
import { 
  GitCommit,
  GitBranch,
  GitMerge,
  FileText,
  Plus,
  Minus,
  Clock,
  ArrowLeft,
  User,
  Copy,
  Eye,
  MessageSquare,
  Check,
  FileCode,
  FolderTree
} from 'lucide-react';
import Link from 'next/link';

interface CommitFile {
  name: string;
  status: 'modified' | 'added' | 'deleted' | 'renamed';
  additions: number;
  deletions: number;
  oldPath?: string;
  newPath?: string;
  diff?: string | null;
}

interface DetailedCommit {
  hash: string;
  shortHash: string;
  message: string;
  description: string;
  author: string;
  date: string;
  branch: string;
  type: 'commit' | 'merge';
  stats: {
    files: number;
    additions: number;
    deletions: number;
  };
  files: CommitFile[];
  parents: string[];
}

const DEMO_COMMIT: DetailedCommit = {
  hash: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9',
  shortHash: 'a1b2c3d',
  message: 'Update patient data analysis algorithm',
  description: 'Implemented new machine learning model for improved accuracy in patient diagnosis prediction. Added support for handling missing data and outlier detection.',
  author: 'Dr. Sarah Chen',
  date: '2024-02-16T14:30:00',
  branch: 'feature/improved-analysis',
  type: 'commit',
  stats: {
    files: 5,
    additions: 328,
    deletions: 124
  },
  parents: ['f1e2d3c4b5a6'],
  files: [
    {
      name: 'src/algorithms/analysis.py',
      status: 'modified',
      additions: 156,
      deletions: 45,
      diff: `@@ -45,12 +45,28 @@
def analyze_patient_data(data):
-    # Basic statistical analysis
-    results = perform_basic_stats(data)
+    # Enhanced ML-based analysis
+    preprocessed = preprocess_data(data)
+    results = apply_ml_model(preprocessed)
     
-    # Generate simple report
-    return format_results(results)
+    # Handle missing data
+    if has_missing_data(data):
+        results = impute_missing_values(results)
+    
+    # Detect and handle outliers
+    results = handle_outliers(results)
+    return generate_detailed_report(results)`
    },
    {
      name: 'tests/test_analysis.py',
      status: 'added',
      additions: 89,
      deletions: 0,
      diff: `@@ -0,0 +1,89 @@
+import pytest
+from src.algorithms.analysis import analyze_patient_data
+
+def test_analysis_with_complete_data():
+    data = load_test_data("complete_dataset.csv")
+    results = analyze_patient_data(data)
+    assert results.accuracy > 0.85`
    },
    {
      name: 'src/utils/preprocessing.py',
      status: 'modified',
      additions: 45,
      deletions: 12,
      diff: `@@ -28,8 +28,15 @@
def preprocess_data(raw_data):
-    # Basic cleaning
-    cleaned = remove_nulls(raw_data)
+    # Enhanced preprocessing pipeline
+    cleaned = (
+        raw_data
+        .pipe(remove_nulls)
+        .pipe(normalize_values)
+        .pipe(encode_categories)
+    )`
    },
    {
      name: 'docs/analysis.md',
      status: 'modified',
      additions: 38,
      deletions: 67,
      diff: null
    },
    {
      name: 'requirements.txt',
      status: 'modified',
      additions: 4,
      deletions: 0,
      diff: `@@ -15,3 +15,7 @@
numpy==1.21.0
pandas==1.3.0
+scikit-learn==1.0.2
+tensorflow==2.8.0
+keras==2.8.0
+xgboost==1.5.0`
    }
  ]
};

function FileStatusIcon({ status }: { status: CommitFile['status'] }) {
  switch (status) {
    case 'modified':
      return <FileText className="h-4 w-4 text-yellow-500" />;
    case 'added':
      return <Plus className="h-4 w-4 text-green-500" />;
    case 'deleted':
      return <Minus className="h-4 w-4 text-red-500" />;
    case 'renamed':
      return <GitBranch className="h-4 w-4 text-blue-500" />;
    default:
      return <FileText className="h-4 w-4 text-gray-500" />;
  }
}

export default function CommitDetailPage() {
  const params = useParams();
  const commitHash = typeof params.hash === 'string' ? params.hash : '';
  const commit = DEMO_COMMIT; // In real app, fetch based on hash

  if (!commit) {
    return (
      <div className={`${containers.outer} flex items-center justify-center min-h-[50vh]`}>
        <div className="text-center">
          <h2 className={typography.h2}>Commit Not Found</h2>
          <p className={typography.lead}>The commit you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/workspace/commits"
            className={`${gradients.primary} text-white px-4 py-2 rounded-xl inline-flex items-center gap-2 mt-4`}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Commits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containers.outer} space-y-8`}>
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/workspace/commits"
            className={`${cards.primary} p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800`}
          >
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <div className={`${cards.primary} p-2 rounded-lg`}>
            {commit.type === 'merge' ? (
              <GitMerge className="h-5 w-5 text-purple-500" />
            ) : (
              <GitCommit className="h-5 w-5 text-green-500" />
            )}
          </div>
          <div>
            <h1 className={typography.h2}>{commit.message}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className={`${typography.subtle} flex items-center gap-1`}>
                <User className="h-4 w-4" />
                {commit.author}
              </span>
              <span className={`${typography.subtle} flex items-center gap-1`}>
                <Clock className="h-4 w-4" />
                {new Date(commit.date).toLocaleString()}
              </span>
              <span className={`${typography.subtle} flex items-center gap-1`}>
                <GitBranch className="h-4 w-4" />
                {commit.branch}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Commit Info */}
          <div className={`${cards.primary} p-6 col-span-2`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {commit.shortHash}
                </span>
                <button 
                  className={`${cards.primary} p-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800`}
                  onClick={() => navigator.clipboard.writeText(commit.hash)}
                >
                  <Copy className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className={typography.subtle}>
                  {commit.stats.files} files changed
                </span>
                <span className="text-green-500 text-sm">
                  +{commit.stats.additions}
                </span>
                <span className="text-red-500 text-sm">
                  -{commit.stats.deletions}
                </span>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>{commit.description}</p>
            </div>

            {commit.parents.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Parent Commits
                </h3>
                <div className="space-y-2">
                  {commit.parents.map((parent) => (
                    <div 
                      key={parent}
                      className="flex items-center gap-2"
                    >
                      <GitCommit className="h-4 w-4 text-gray-500" />
                      <code className="text-sm text-gray-600 dark:text-gray-400">
                        {parent}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className={`${cards.primary} p-6`}>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Changes</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={typography.subtle}>Files Changed</span>
                    <span className="font-medium">{commit.stats.files}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div 
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${(commit.stats.files / 10) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={typography.subtle}>Additions</span>
                    <span className="text-green-500">+{commit.stats.additions}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div 
                      className="h-full rounded-full bg-green-500"
                      style={{ width: `${(commit.stats.additions / 500) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={typography.subtle}>Deletions</span>
                    <span className="text-red-500">-{commit.stats.deletions}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div 
                      className="h-full rounded-full bg-red-500"
                      style={{ width: `${(commit.stats.deletions / 500) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cards.primary} p-6`}>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Actions</h3>
              <div className="space-y-2">
                <button className={`${cards.primary} w-full py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2`}>
                  <Eye className="h-4 w-4" />
                  <span>View Files</span>
                </button>
                <button className={`${cards.primary} w-full py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2`}>
                  <MessageSquare className="h-4 w-4" />
                  <span>Add Comment</span>
                </button>
                <button className={`${cards.primary} w-full py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2`}>
                  <Check className="h-4 w-4" />
                  <span>Mark as Reviewed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Changed Files */}
      <div>
        <h2 className={`${typography.h3} mb-4`}>Changed Files</h2>
        <div className={`${cards.primary} divide-y divide-gray-100 dark:divide-gray-800`}>
          {commit.files.map((file, index) => (
            <div 
              key={index}
              className="p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileStatusIcon status={file.status} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </span>
                      <span className={`${typography.subtle} text-sm`}>
                        ({file.status})
                      </span>
                    </div>
                    {file.status === 'renamed' && (
                      <p className={`${typography.subtle} text-sm`}>
                        {file.oldPath} → {file.newPath}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-sm">+{file.additions}</span>
                  <span className="text-red-500 text-sm">-{file.deletions}</span>
                </div>
              </div>

              {file.diff && (
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="font-mono text-sm">
                    <code>{file.diff}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 