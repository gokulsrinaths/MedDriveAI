'use client'

import { useState } from 'react'
import { MessageSquare, Reply, Send } from 'lucide-react'
import type { Comment, CommentThread } from '@/types/comment'

const DEMO_COMMENTS: CommentThread[] = [
  {
    id: '1',
    content: 'The patient\'s symptoms suggest we should consider additional tests.',
    user: { name: 'Dr. Sarah Chen' },
    created_at: '2024-02-15T10:30:00Z',
    replies: [
      {
        id: '2',
        content: 'I agree. The blood work results are particularly concerning.',
        user: { name: 'Dr. Michael Lee' },
        created_at: '2024-02-15T11:15:00Z',
        replies: []
      }
    ]
  },
  {
    id: '3',
    content: 'AI analysis suggests a correlation with previous cases.',
    user: { name: 'AI System' },
    created_at: '2024-02-14T09:45:00Z',
    replies: [
      {
        id: '4',
        content: 'Can you provide more details about these similar cases?',
        user: { name: 'Dr. Emily Brown' },
        created_at: '2024-02-14T10:30:00Z',
        replies: []
      }
    ]
  }
];

function formatTimeAgo(date: string) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000)
  
  let interval = seconds / 31536000
  if (interval > 1) return Math.floor(interval) + ' years ago'
  
  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + ' months ago'
  
  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + ' days ago'
  
  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + ' hours ago'
  
  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + ' minutes ago'
  
  return Math.floor(seconds) + ' seconds ago'
}

function SingleComment({ comment, onReply }: { comment: CommentThread; onReply: (parentId: string) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <div className="h-8 w-8 rounded-full bg-gray-200" />
        <div className="flex-1">
          <div className="rounded-lg bg-gray-50 p-3">
            <div className="mb-1 flex items-center space-x-2">
              <span className="font-medium">{comment.user.name}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{formatTimeAgo(comment.created_at)}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.content}</p>
          </div>
          <button
            onClick={() => onReply(comment.id)}
            className="mt-1 flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700"
          >
            <Reply className="h-3 w-3" />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function CommentThread({ thread, onReply }: { thread: CommentThread; onReply: (parentId: string) => void }) {
  return (
    <div className="space-y-3">
      <SingleComment comment={thread} onReply={onReply} />
      {thread.replies && thread.replies.length > 0 && (
        <div className="ml-8 space-y-3 border-l border-gray-200 pl-4">
          {thread.replies.map((reply) => (
            <SingleComment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  )
}

interface CommentSectionProps {
  fileId: string
}

export default function CommentSection({ fileId }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentThread[]>(DEMO_COMMENTS)
  const [newComment, setNewComment] = useState('')
  const [replyTo, setReplyTo] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const newCommentObj: CommentThread = {
      id: Date.now().toString(),
      content: newComment.trim(),
      user: { name: 'Dr. Sarah Chen' }, // Demo user
      created_at: new Date().toISOString(),
      replies: []
    }

    if (replyTo) {
      // Add reply to existing thread
      setComments(prevComments => {
        return prevComments.map(thread => {
          if (thread.id === replyTo) {
            return {
              ...thread,
              replies: [...thread.replies, { ...newCommentObj, replies: [] }]
            }
          }
          return thread
        })
      })
    } else {
      // Add new thread
      setComments(prevComments => [...prevComments, newCommentObj])
    }

    setNewComment('')
    setReplyTo(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <MessageSquare className="h-5 w-5 text-gray-400" />
        <h3 className="text-sm font-medium">Comments</h3>
        <span className="text-xs text-gray-500">({comments.length})</span>
      </div>

      <div className="space-y-4">
        {comments.map((thread) => (
          <CommentThread
            key={thread.id}
            thread={thread}
            onReply={(parentId) => setReplyTo(parentId)}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        {replyTo && (
          <div className="mb-2 flex items-center space-x-2 text-xs text-gray-500">
            <span>Replying to comment</span>
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
          </div>
        )}
        <div className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            <Send className="mr-2 h-4 w-4" />
            Send
          </button>
        </div>
      </form>

      <div className="rounded-lg bg-gray-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <MessageSquare className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-800">Demo Mode</h3>
            <p className="mt-2 text-sm text-gray-500">
              This is a demo version. Comments will be stored temporarily in your browser and will be lost on refresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 