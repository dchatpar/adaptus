import { useState, useEffect } from 'react';
import {
  Home,
  Users as UsersIcon,
  DollarSign,
  MapPin,
  LogOut,
  Plus,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import api from '../lib/api';

type Tab = 'home' | 'customers' | 'sales' | 'checkins';

export default function AgentApp() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [stats, setStats] = useState<any>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [sales, setSales] = useState<any[]>([]);
  const [checkIns, setCheckIns] = useState<any[]>([]);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const { user, logout } = useAuthStore();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [statsRes, customersRes, salesRes, checkInsRes] = await Promise.all([
        api.get('/dashboard/stats'),
        api.get('/customers'),
        api.get('/sales'),
        api.get('/check-ins/today'),
      ]);

      setStats(statsRes.data);
      setCustomers(customersRes.data);
      setSales(salesRes.data);
      setCheckIns(checkInsRes.data);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  const handleCheckIn = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await api.post('/check-ins', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            check_in_type: 'start_day',
            location_name: 'Current Location',
          });
          setShowCheckInModal(false);
          loadData();
        } catch (error) {
          alert('Failed to check in');
        }
      },
      (error) => {
        alert('Unable to get your location');
      }
    );
  };

  const renderHome = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
          <p className="text-sm opacity-90">Today's Sales</p>
          <p className="text-3xl font-bold mt-2">{stats?.sales?.today_sales || 0}</p>
          <p className="text-sm mt-1">${parseFloat(stats?.sales?.today_revenue || 0).toFixed(0)}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
          <p className="text-sm opacity-90">Check-ins</p>
          <p className="text-3xl font-bold mt-2">{checkIns.length}</p>
          <p className="text-sm mt-1">Today</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">My Customers</h2>
        <div className="space-y-3">
          {customers.slice(0, 5).map((customer) => (
            <div key={customer.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <UsersIcon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.company || 'No company'}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                customer.status === 'customer' ? 'bg-green-100 text-green-700' :
                customer.status === 'prospect' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {customer.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Recent Sales</h2>
        <div className="space-y-3">
          {sales.slice(0, 5).map((sale) => (
            <div key={sale.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{sale.product_name}</p>
                <p className="text-sm text-gray-500">{sale.customer_name}</p>
              </div>
              <p className="font-bold text-green-600">${parseFloat(sale.amount).toFixed(0)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-4">
      {customers.map((customer) => (
        <div key={customer.id} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold">{customer.name}</h3>
              <p className="text-sm text-gray-600">{customer.company}</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              customer.status === 'customer' ? 'bg-green-100 text-green-700' :
              customer.status === 'prospect' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {customer.status}
            </span>
          </div>
          <p className="text-sm text-gray-500">{customer.phone}</p>
          <p className="text-sm text-gray-500">{customer.email}</p>
        </div>
      ))}
    </div>
  );

  const renderSales = () => (
    <div className="space-y-4">
      {sales.map((sale) => (
        <div key={sale.id} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold">{sale.product_name}</h3>
              <p className="text-sm text-gray-600">{sale.customer_name}</p>
            </div>
            <p className="font-bold text-lg text-green-600">${parseFloat(sale.amount).toFixed(0)}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className={`px-2 py-1 text-xs rounded-full ${
              sale.status === 'confirmed' ? 'bg-green-100 text-green-700' :
              sale.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {sale.status}
            </span>
            <span>{new Date(sale.sale_date).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCheckIns = () => (
    <div className="space-y-4">
      <button
        onClick={() => setShowCheckInModal(true)}
        className="w-full bg-primary-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
      >
        <MapPin className="w-5 h-5" />
        New Check-in
      </button>

      {checkIns.map((checkIn) => (
        <div key={checkIn.id} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-primary-600" />
            <div className="flex-1">
              <h3 className="font-bold">{checkIn.location_name || 'Unknown Location'}</h3>
              <p className="text-sm text-gray-600">{checkIn.customer_name || 'General check-in'}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {new Date(checkIn.checked_in_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{user?.full_name}</h1>
            <p className="text-sm opacity-90">Field Sales Agent</p>
          </div>
          <button onClick={logout} className="p-2">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'customers' && renderCustomers()}
        {activeTab === 'sales' && renderSales()}
        {activeTab === 'checkins' && renderCheckIns()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: 'home' as Tab, icon: Home, label: 'Home' },
            { id: 'customers' as Tab, icon: UsersIcon, label: 'Customers' },
            { id: 'sales' as Tab, icon: DollarSign, label: 'Sales' },
            { id: 'checkins' as Tab, icon: MapPin, label: 'Check-ins' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 flex flex-col items-center gap-1 ${
                  activeTab === tab.id ? 'text-primary-600' : 'text-gray-500'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Check-in Modal */}
      {showCheckInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Check In</h2>
            <p className="text-gray-600 mb-6">This will record your current location</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCheckInModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckIn}
                className="flex-1 py-2 bg-primary-600 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
