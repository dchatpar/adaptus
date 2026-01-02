import { useEffect, useState } from 'react';
import { TrendingUp, Users, DollarSign, MapPin, Activity } from 'lucide-react';
import api from '../lib/api';

interface Stats {
  sales: {
    total_sales: number;
    total_revenue: number;
    today_sales: number;
    today_revenue: number;
  };
  customers: {
    total_customers: number;
    leads: number;
    prospects: number;
    active_customers: number;
  };
  check_ins: {
    check_ins_today: number;
  };
  activities: {
    pending_activities: number;
  };
  agents: {
    total_agents: number;
    active_agents: number;
  };
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [topPerformers, setTopPerformers] = useState<any[]>([]);

  useEffect(() => {
    loadStats();
    loadTopPerformers();
  }, []);

  const loadStats = async () => {
    const response = await api.get('/dashboard/stats');
    setStats(response.data);
  };

  const loadTopPerformers = async () => {
    const response = await api.get('/dashboard/top-performers?limit=5');
    setTopPerformers(response.data);
  };

  if (!stats) {
    return <div>Loading...</div>;
  }

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${parseFloat(stats.sales.total_revenue || '0').toLocaleString()}`,
      subtitle: `Today: $${parseFloat(stats.sales.today_revenue || '0').toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Total Sales',
      value: stats.sales.total_sales,
      subtitle: `Today: ${stats.sales.today_sales}`,
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      title: 'Customers',
      value: stats.customers.total_customers,
      subtitle: `${stats.customers.leads} leads, ${stats.customers.active_customers} active`,
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      title: 'Active Agents',
      value: stats.agents?.active_agents || 0,
      subtitle: `${stats.check_ins.check_ins_today} check-ins today`,
      icon: MapPin,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your sales team performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.title}</p>
              <p className="text-xs text-gray-500 mt-2">{card.subtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performers (This Month)</h2>
        <div className="space-y-4">
          {topPerformers.map((performer, index) => (
            <div key={performer.id} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{performer.full_name}</p>
                <p className="text-sm text-gray-500">{performer.sales_count} sales</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">
                  ${parseFloat(performer.total_revenue).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  Avg: ${parseFloat(performer.avg_sale_value).toFixed(0)}
                </p>
              </div>
            </div>
          ))}
          {topPerformers.length === 0 && (
            <p className="text-center text-gray-500">No sales data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
