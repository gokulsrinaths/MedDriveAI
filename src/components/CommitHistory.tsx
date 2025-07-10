'use client';

import React, { useState } from 'react';
import { Commit, CommitChange, generateMockCommits } from '@/types/commit';
import Image from 'next/image';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CommitHistoryProps {
  projectId?: string;
}

const CommitDot: React.FC<{ type: Commit['type'] }> = ({ type }) => {
  const colors = {
    file_upload: 'bg-green-500',
    annotation_added: 'bg-blue-500',
    file_deleted: 'bg-red-500',
    project_updated: 'bg-purple-500',
    collaborator_added: 'bg-yellow-500'
  };

  return (
    <div className={`w-4 h-4 rounded-full ${colors[type]} ring-4 ring-white dark:ring-gray-900`} />
  );
};

const CommitChangeView: React.FC<{ change: CommitChange }> = ({ change }) => {
  const colors = {
    added: 'text-green-600 dark:text-green-400',
    modified: 'text-blue-600 dark:text-blue-400',
    deleted: 'text-red-600 dark:text-red-400'
  };

  const icons = {
    added: '+',
    modified: '•',
    deleted: '-'
  };

  return (
    <div className="flex items-center space-x-2 py-1">
      <span className={`font-mono ${colors[change.type]}`}>{icons[change.type]}</span>
      <span className="text-sm">{change.path}</span>
    </div>
  );
};

const CommitDetails: React.FC<{ commit: Commit }> = ({ commit }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Image
          src={commit.author.avatar}
          alt={commit.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="font-medium">{commit.author.name}</h4>
          <p className="text-sm text-gray-500">
            {format(new Date(commit.timestamp), 'MMM d, yyyy h:mm a')}
          </p>
        </div>
      </div>

      <div className="border-t border-b py-4 my-4">
        <h3 className="font-semibold mb-2">{commit.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{commit.description}</p>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Changes</h4>
        {commit.changes.map((change, i) => (
          <CommitChangeView key={i} change={change} />
        ))}
      </div>

      {/* This part of the original code was not in the new_code, so it's removed. */}
      {/* {change.oldContent && change.newContent && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Content Changes</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-gray-500">Previous Version</p>
              <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
                {change.oldContent}
              </pre>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500">New Version</p>
              <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
                {change.newContent}
              </pre>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export const CommitHistory: React.FC<CommitHistoryProps> = ({ projectId }) => {
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
  const commits = generateMockCommits(15); // Generate 15 mock commits

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

      {/* Commits */}
      <div className="space-y-8">
        {commits.map((commit) => (
          <div key={commit.id} className="relative flex items-center group">
            {/* Dot */}
            <div className="absolute left-4 transform -translate-x-1/2 cursor-pointer"
                 onClick={() => setSelectedCommit(commit)}>
              <CommitDot type={commit.type} />
            </div>

            {/* Content */}
            <div className="ml-16 flex-1">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
                            hover:shadow-md transition-shadow cursor-pointer"
                   onClick={() => setSelectedCommit(commit)}>
                <div className="flex items-center space-x-3">
                  <Image
                    src={commit.author.avatar}
                    alt={commit.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">{commit.title}</h3>
                    <p className="text-sm text-gray-500">
                      {commit.author.name} • {format(new Date(commit.timestamp), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Commit Details Modal */}
      <Dialog open={!!selectedCommit} onOpenChange={() => setSelectedCommit(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Commit Details</DialogTitle>
          </DialogHeader>
          {selectedCommit && <CommitDetails commit={selectedCommit} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}; 