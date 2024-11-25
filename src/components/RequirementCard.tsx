import React from 'react';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

interface RequirementCardProps {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'inProgress' | 'completed';
  category: string;
}

export default function RequirementCard({
  title,
  description,
  priority,
  status,
  category,
}: RequirementCardProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  const statusColors = {
    pending: 'bg-gray-100 text-gray-800',
    inProgress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  const statusIcons = {
    pending: Clock,
    inProgress: AlertCircle,
    completed: CheckCircle2,
  };

  const StatusIcon = statusIcons[status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <span className={`px-3 py-1 rounded-full text-sm ${priorityColors[priority]}`}>
            {priority === 'high' ? '優先度：高' : priority === 'medium' ? '優先度：中' : '優先度：低'}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]} flex items-center gap-1`}>
            <StatusIcon className="w-4 h-4" />
            {status === 'pending' ? '未着手' : status === 'inProgress' ? '進行中' : '完了'}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    </div>
  );
}