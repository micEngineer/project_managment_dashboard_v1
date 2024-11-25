import React from 'react';
import { Menu, Home, FileText, Users, Shield, Settings, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'ダッシュボード', active: true },
    { icon: FileText, label: '要件一覧' },
    { icon: Users, label: 'ステークホルダー' },
    { icon: Shield, label: 'セキュリティ要件' },
    { icon: Settings, label: '設定' },
    { icon: HelpCircle, label: 'ヘルプ' },
  ];

  return (
    <div className="w-64 bg-indigo-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4 border-b border-indigo-800 flex items-center gap-2">
        <Menu className="w-6 h-6" />
        <span className="font-bold text-lg">要件定義支援ツール</span>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-indigo-800'
                : 'hover:bg-indigo-800/50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}