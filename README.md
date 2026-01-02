# Sales Team Manager

A powerful, enterprise-grade application for managing field sales teams of 50+ people. Built with modern technologies and designed for real-world sales operations.

## Features

### For Administrators & Managers
- **Real-time Dashboard** - Track team performance, sales metrics, and KPIs
- **Team Management** - Create and manage sales teams with targets
- **User Management** - Add agents, managers, and set permissions
- **Customer Database** - Comprehensive CRM with lead tracking
- **Sales Analytics** - Revenue reports, top performers, sales charts
- **Activity Monitoring** - Track agent locations and check-ins
- **Performance Metrics** - Individual and team performance tracking

### For Field Sales Agents
- **Mobile-Optimized Interface** - Designed for on-the-go sales
- **Location Check-ins** - GPS-based location tracking
- **Customer Management** - Access assigned customers and leads
- **Quick Sales Entry** - Record sales instantly from the field
- **Activity Tracking** - Log calls, meetings, and follow-ups
- **Real-time Sync** - Instant updates via WebSockets

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Robust database
- **Socket.io** - Real-time communication
- **JWT** - Secure authentication
- **bcrypt** - Password hashing

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Modern styling
- **Zustand** - State management
- **Axios** - HTTP client
- **React Router** - Navigation
- **Leaflet** - Maps integration

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 12+

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd adaptus
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the database**

Create a PostgreSQL database:
```bash
psql -U postgres
CREATE DATABASE sales_team_db;
\q
```

4. **Configure environment variables**

Backend (create `backend/.env`):
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your database credentials:
```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=sales_team_db
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES_IN=7d

ADMIN_EMAIL=admin@salesteam.com
ADMIN_PASSWORD=admin123
```

Frontend (create `frontend/.env`):
```bash
VITE_API_URL=http://localhost:3000/api
VITE_SOCKET_URL=http://localhost:3000
```

5. **Run database migrations**
```bash
npm run migrate --workspace=backend
```

This will create all tables and seed an admin user.

6. **Start the development servers**
```bash
npm run dev
```

This starts both backend (port 3000) and frontend (port 5173).

## Usage

### First Login

Open http://localhost:5173 in your browser.

**Admin Credentials:**
- Email: `admin@salesteam.com`
- Password: `admin123`

### Creating Your Team

1. **Add Users** - Go to Users → Add User
   - Create managers and field agents
   - Assign appropriate roles

2. **Create Teams** - Go to Teams → Add Team
   - Assign a manager
   - Set monthly targets
   - Add team members

3. **Add Customers** - Go to Customers → Add Customer
   - Enter customer details
   - Assign to agents
   - Track status (Lead → Prospect → Customer)

4. **Track Sales** - Go to Sales
   - View all sales activity
   - Monitor revenue and targets
   - Track status (Pending → Confirmed → Delivered)

### For Field Agents

Agents see a mobile-optimized interface with:
- **Home** - Daily stats and quick access
- **Customers** - Assigned customer list
- **Sales** - Record and view sales
- **Check-ins** - GPS location tracking

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### Users
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Teams
- `GET /api/teams` - List teams
- `POST /api/teams` - Create team
- `PUT /api/teams/:id` - Update team
- `POST /api/teams/:id/members` - Add member
- `DELETE /api/teams/:id/members/:userId` - Remove member

### Customers
- `GET /api/customers` - List customers
- `POST /api/customers` - Create customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Sales
- `GET /api/sales` - List sales
- `GET /api/sales/stats` - Get statistics
- `POST /api/sales` - Create sale
- `PUT /api/sales/:id` - Update sale
- `DELETE /api/sales/:id` - Delete sale

### Check-ins
- `GET /api/check-ins` - List check-ins
- `POST /api/check-ins` - Create check-in
- `GET /api/check-ins/today` - Today's check-ins

### Activities
- `GET /api/activities` - List activities
- `POST /api/activities` - Create activity
- `PUT /api/activities/:id` - Update activity
- `DELETE /api/activities/:id` - Delete activity

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard stats
- `GET /api/dashboard/recent` - Recent activities
- `GET /api/dashboard/top-performers` - Top performers
- `GET /api/dashboard/sales-chart` - Sales chart data

## Database Schema

- **users** - User accounts (admins, managers, agents)
- **teams** - Sales teams
- **team_members** - Team membership
- **customers** - Customer/lead database
- **sales** - Sales transactions
- **check_ins** - Location tracking
- **activities** - Tasks and follow-ups
- **attendance** - Daily attendance
- **performance_metrics** - Monthly metrics
- **notifications** - User notifications

## Development

### Project Structure
```
adaptus/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── db/             # Database & migrations
│   │   ├── middleware/     # Auth & validation
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Server entry
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # API & utilities
│   │   ├── store/          # State management
│   │   └── App.tsx         # App entry
│   └── package.json
└── package.json            # Root workspace
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt with salt rounds
- **Role-based Access** - Admin, Manager, Agent roles
- **SQL Injection Prevention** - Parameterized queries
- **CORS Protection** - Configurable origins
- **Input Validation** - Request validation

## Performance

- **Database Indexing** - Optimized queries
- **Connection Pooling** - Efficient DB connections
- **WebSocket** - Real-time updates without polling
- **Lazy Loading** - Frontend code splitting
- **Caching** - API response caching

## Scalability

Built to handle:
- 100+ concurrent users
- 10,000+ customers
- 50,000+ sales records
- Real-time updates for all agents

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - All rights reserved

## Support

For issues and questions, contact your system administrator.
