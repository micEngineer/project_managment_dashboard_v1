import React from 'react';
import { PieChart, BarChart, Users, Shield, FileText, CheckCircle2 } from 'lucide-react';
import RequirementCard from './RequirementCard';

export default function Dashboard() {
  const stats = [
    { icon: FileText, label: '全要件数', value: '42件' },
    { icon: CheckCircle2, label: '完了要件', value: '18件' },
    { icon: Users, label: 'ステークホルダー', value: '12名' },
    { icon: Shield, label: 'セキュリティ要件', value: '8件' },
  ];

  const requirements = [
    {
      title: 'モバイル対応UI実装',
      description: 'スマートフォンやタブレットでの操作性を向上させるためのレスポンシブデザイン実装',
      priority: 'high',
      status: 'inProgress',
      category: 'UI/UX',
    },
    {
      title: 'セキュリティ強化',
      description: '多要素認証の導入とセッション管理の改善',
      priority: 'high',
      status: 'pending',
      category: 'セキュリティ',
    },
    {
      title: 'データ移行計画',
      description: '既存システムからのデータ移行手順の策定と検証',
      priority: 'medium',
      status: 'completed',
      category: 'データ管理',
    },
  ];

  return (
    <div className="ml-64 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">プロジェクト概要</h1>
        <p className="text-gray-600">社内システムリニューアルの要件定義・進捗管理</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <stat.icon className="w-8 h-8 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">優先度別要件分布</h2>
          <PieChart className="w-full h-48 text-indigo-600" />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">カテゴリ別進捗状況</h2>
          <BarChart className="w-full h-48 text-indigo-600" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">重要要件</h2>
        <div className="grid grid-cols-1 gap-6">
          {requirements.map((req, index) => (
            <RequirementCard key={index} {...req} />
          ))}
        </div>
      </div>
    </div>
  );
}