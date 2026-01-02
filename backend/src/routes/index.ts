import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as authController from '../controllers/authController';
import * as userController from '../controllers/userController';
import * as teamController from '../controllers/teamController';
import * as customerController from '../controllers/customerController';
import * as salesController from '../controllers/salesController';
import * as checkInController from '../controllers/checkInController';
import * as activityController from '../controllers/activityController';
import * as dashboardController from '../controllers/dashboardController';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Auth routes (public)
router.post('/auth/login', authController.login);

// Auth routes (protected)
router.get('/auth/profile', authenticate, authController.getProfile);
router.put('/auth/profile', authenticate, authController.updateProfile);
router.post('/auth/change-password', authenticate, authController.changePassword);

// User routes
router.get('/users', authenticate, authorize('admin', 'manager'), userController.getUsers);
router.get('/users/:id', authenticate, userController.getUserById);
router.post('/users', authenticate, authorize('admin', 'manager'), userController.createUser);
router.put('/users/:id', authenticate, authorize('admin', 'manager'), userController.updateUser);
router.delete('/users/:id', authenticate, authorize('admin'), userController.deleteUser);

// Team routes
router.get('/teams', authenticate, teamController.getTeams);
router.get('/teams/:id', authenticate, teamController.getTeamById);
router.post('/teams', authenticate, authorize('admin', 'manager'), teamController.createTeam);
router.put('/teams/:id', authenticate, authorize('admin', 'manager'), teamController.updateTeam);
router.delete('/teams/:id', authenticate, authorize('admin'), teamController.deleteTeam);
router.post('/teams/:id/members', authenticate, authorize('admin', 'manager'), teamController.addTeamMember);
router.delete('/teams/:id/members/:userId', authenticate, authorize('admin', 'manager'), teamController.removeTeamMember);

// Customer routes
router.get('/customers', authenticate, customerController.getCustomers);
router.get('/customers/:id', authenticate, customerController.getCustomerById);
router.post('/customers', authenticate, customerController.createCustomer);
router.put('/customers/:id', authenticate, customerController.updateCustomer);
router.delete('/customers/:id', authenticate, authorize('admin', 'manager'), customerController.deleteCustomer);

// Sales routes
router.get('/sales', authenticate, salesController.getSales);
router.get('/sales/stats', authenticate, salesController.getSalesStats);
router.get('/sales/:id', authenticate, salesController.getSaleById);
router.post('/sales', authenticate, salesController.createSale);
router.put('/sales/:id', authenticate, salesController.updateSale);
router.delete('/sales/:id', authenticate, authorize('admin', 'manager'), salesController.deleteSale);

// Check-in routes
router.get('/check-ins', authenticate, checkInController.getCheckIns);
router.post('/check-ins', authenticate, checkInController.createCheckIn);
router.get('/check-ins/today/:userId?', authenticate, checkInController.getUserCheckInsToday);

// Activity routes
router.get('/activities', authenticate, activityController.getActivities);
router.post('/activities', authenticate, activityController.createActivity);
router.put('/activities/:id', authenticate, activityController.updateActivity);
router.delete('/activities/:id', authenticate, activityController.deleteActivity);

// Dashboard routes
router.get('/dashboard/stats', authenticate, dashboardController.getDashboardStats);
router.get('/dashboard/recent', authenticate, dashboardController.getRecentActivities);
router.get('/dashboard/top-performers', authenticate, authorize('admin', 'manager'), dashboardController.getTopPerformers);
router.get('/dashboard/sales-chart', authenticate, dashboardController.getSalesChart);

export default router;
