import { useEffect, useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import api from '../lib/api';

export default function TeamManagement() {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      const response = await api.get('/teams');
      setTeams(response.data);
    } catch (error) {
      console.error('Failed to load teams:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
          <p className="text-gray-600 mt-1">Manage your sales teams</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="w-5 h-5" />
          Add Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                <p className="text-sm text-gray-500">Manager: {team.manager_name || 'None'}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{team.description || 'No description'}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{team.member_count} members</span>
              <span className="text-sm font-medium text-primary-600">
                Target: ${parseFloat(team.target_monthly || 0).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
        {teams.length === 0 && (
          <div className="col-span-3 text-center py-12 text-gray-500">
            No teams found. Create your first team!
          </div>
        )}
      </div>
    </div>
  );
}
