
import React from 'react';
import { Clock, FileText, AlertCircle, Calendar } from 'lucide-react';

interface DashboardStatsProps {
  timeEntries: any[];
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ timeEntries }) => {
  const totalHours = timeEntries.reduce((acc, entry) => {
    const [hours, minutes] = entry.time.split(':').map(Number);
    return acc + hours + minutes / 60;
  }, 0);

  const billableHours = timeEntries
    .filter(entry => entry.billable)
    .reduce((acc, entry) => {
      const [hours, minutes] = entry.time.split(':').map(Number);
      return acc + hours + minutes / 60;
    }, 0);

  const activeProjects = [...new Set(timeEntries.map(entry => entry.project))].length;

  const stats = [
    {
      title: 'Hours This Week',
      value: totalHours.toFixed(1),
      change: '+2.5 from last week',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
    },
    {
      title: 'Active Projects',
      value: activeProjects.toString(),
      change: '2 nearing deadline',
      changeType: 'warning',
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
    },
    {
      title: 'Billable Hours',
      value: billableHours.toFixed(1),
      change: '+1.2 from last week',
      changeType: 'positive',
      icon: AlertCircle,
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50 dark:bg-amber-500/10',
    },
    {
      title: 'Time Off Balance',
      value: '12',
      change: '5 days planned',
      changeType: 'neutral',
      icon: Calendar,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
    },
    {
      title: 'Time Off Balance',
      value: '12',
      change: '5 days planned',
      changeType: 'neutral',
      icon: Calendar,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
    },
    {
      title: 'Time Off Balance',
      value: '12',
      change: '5 days planned',
      changeType: 'neutral',
      icon: Calendar,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className={`text-sm mt-1 ${
                stat.changeType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' :
                stat.changeType === 'warning' ? 'text-amber-600 dark:text-amber-400' :
                'text-purple-600 dark:text-purple-400'
              }`}>
                {stat.change}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
