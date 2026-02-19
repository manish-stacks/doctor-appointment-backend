import React from 'react';
import { UserRole } from '@/lib/types/types';
import {
  BarChart3,
  Users,
  Stethoscope,
  Calendar,
  CreditCard,
  FileText,
  Settings,
  ShieldCheck,
  MessageSquare,
  Layers,
  Bell,
  Building2,
  User,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

/* ======================================================
   TYPES
====================================================== */

export interface MenuItemConfig {
  label: string;
  href: string;
  icon: LucideIcon;
  requiredPermission?: string;
}

export interface MenuGroupConfig {
  label: string;
  items: MenuItemConfig[];
}

/* ======================================================
   SUPER ADMIN MENU (Healthcare SaaS)
====================================================== */

const superAdminMenu: MenuGroupConfig[] = [
  {
    label: 'Overview',
    items: [
      {
        label: 'Dashboard',
        href: '/super-admin/dashboard',
        icon: BarChart3,
      },
    ],
  },
  {
    label: 'User Management',
    items: [
      { label: 'All Users', href: '/super-admin/users', icon: Users },
      { label: 'Patients', href: '/super-admin/patients', icon: Users },
      { label: 'Doctors', href: '/super-admin/doctors', icon: Stethoscope },
      { label: 'Hospitals', href: '/super-admin/hospitals', icon: Building2 },
      { label: 'Admins', href: '/super-admin/admins', icon: ShieldCheck },
      { label: 'Block / Unblock', href: '/super-admin/block-unblock', icon: ShieldCheck },
      { label: 'Verify Doctors', href: '/super-admin/verify-doctors', icon: ShieldCheck },
      { label: 'Reset Password', href: '/super-admin/reset-password', icon: ShieldCheck },
      { label: 'KYC / Documents Approval', href: '/super-admin/kyc-approval', icon: FileText },
    ],
  },
  {
    label: 'Doctor Management',
    items: [
      { label: 'All Doctors', href: '/super-admin/doctors', icon: Stethoscope },
      { label: 'Pending Approval', href: '/super-admin/pending-doctors', icon: Stethoscope },
      { label: 'Active / Inactive', href: '/super-admin/active-inactive-doctors', icon: Stethoscope },
      { label: 'Popular Doctors', href: '/super-admin/popular-doctors', icon: Stethoscope },
      { label: 'Doctor Subscriptions', href: '/super-admin/doctor-subscriptions', icon: CreditCard },
      { label: 'Earnings', href: '/super-admin/doctor-earnings', icon: CreditCard },
      { label: 'Doctor Reviews', href: '/super-admin/doctor-reviews', icon: MessageSquare },
      { label: 'Doctor Slots', href: '/super-admin/doctor-slots', icon: Calendar },
    ],
  },
  {
    label: 'Appointment Management',
    items: [
      { label: 'All Appointments', href: '/super-admin/appointments', icon: Calendar },
      { label: 'Today’s Appointments', href: '/super-admin/today-appointments', icon: Calendar },
      { label: 'Cancelled', href: '/super-admin/cancelled-appointments', icon: Calendar },
      { label: 'Completed', href: '/super-admin/completed-appointments', icon: Calendar },
      { label: 'Refund Requests', href: '/super-admin/refund-requests', icon: CreditCard },
      { label: 'Reschedule Requests', href: '/super-admin/reschedule-requests', icon: Calendar },
    ],
  },
  {
    label: 'Payments & Revenue',
    items: [
      { label: 'All Transactions', href: '/super-admin/all-transactions', icon: CreditCard },
      { label: 'Doctor Earnings', href: '/super-admin/doctor-earnings', icon: CreditCard },
      { label: 'Platform Commission', href: '/super-admin/platform-commission', icon: CreditCard },
      { label: 'Refunds', href: '/super-admin/refunds', icon: CreditCard },
      { label: 'Payout Management', href: '/super-admin/payout-management', icon: CreditCard },
      { label: 'Subscription Payments', href: '/super-admin/subscription-payments', icon: CreditCard },
    ],
  },
  {
    label: 'Subscription Plans',
    items: [
      { label: 'Create Plan', href: '/super-admin/create-plan', icon: CreditCard },
      { label: 'All Plans', href: '/super-admin/all-plans', icon: CreditCard },
      { label: 'Edit Plan', href: '/super-admin/edit-plan', icon: CreditCard },
      { label: 'Active Plans', href: '/super-admin/active-plans', icon: CreditCard },
      { label: 'Free Trial Config', href: '/super-admin/free-trial-config', icon: CreditCard },
      { label: 'Plan Analytics', href: '/super-admin/plan-analytics', icon: CreditCard },
    ],
  }, {
    label: 'Categories & Treatments',
    items: [
      { label: 'Categories', href: '/super-admin/categories', icon: CreditCard },
      { label: 'Treatments', href: '/super-admin/treatments', icon: Bell },
      { label: 'Add Treatments', href: '/super-admin/add-treatments', icon: Bell },
      { label: 'Edit Treatments', href: '/super-admin/edit-treatments', icon: Bell },
      { label: 'Delete Treatments', href: '/super-admin/delete-treatments', icon: Bell },
    ],
  },
  {
    label: "All Testimonials",
    items: [
      { label: 'All Testimonials', href: '/super-admin/all-testimonials', icon: Bell },
      { label: 'Add Testimonials', href: '/super-admin/add-testimonials', icon: Bell },
      { label: 'Edit Testimonials', href: '/super-admin/edit-testimonials', icon: Bell },
      { label: 'Delete Testimonials', href: '/super-admin/delete-testimonials', icon: Bell },
      { label: 'Doctor Reviews Moderation', href: '/super-admin/doctor-reviews', icon: Bell },
      { label: 'Reported Reviews', href: '/super-admin/patient-reviews', icon: Bell },
    ],
  },
  {
    label: "CMS Management",
    items: [
      { label: 'Homepage Content', href: '/super-admin/all-faqs', icon: Bell },
      { label: 'About Page', href: '/super-admin/add-faqs', icon: Bell },
      { label: 'FAQs', href: '/super-admin/edit-faqs', icon: Bell },
      { label: 'Privacy Policy', href: '/super-admin/delete-faqs', icon: Bell },
      { label: 'Terms & Conditions', href: '/super-admin/delete-faqs', icon: Bell },
      { label: 'Blog Categories', href: '/super-admin/delete-faqs', icon: Bell },
      { label: 'Blog Management', href: '/super-admin/delete-faqs', icon: Bell },
      { label: 'Contact Info', href: '/super-admin/delete-faqs', icon: Bell },
    ],
  },
  {
    label: "Reports & Analytics",
    items: [
      { label: 'Revenue Graph', href: '/super-admin/reports', icon: Bell },
      { label: 'Appointment Trends', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Top Doctors', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Top Categories', href: '/super-admin/support-settings', icon: Bell },
      { label: 'User Growth', href: '/super-admin/support-settings', icon: Bell },
      { label: 'State-wise analytics', href: '/super-admin/support-settings', icon: Bell },
    ],
  },
  {
    label: "Notifications",
    items: [
      { label: 'Push Notifications', href: '/super-admin/support-tickets', icon: Bell },
      { label: 'Email Broadcast', href: '/super-admin/support-settings', icon: Bell },
      { label: 'SMS Campaign', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Announcement Banner', href: '/super-admin/support-settings', icon: Bell },
    ],
  },
  {
    label: "Roles & Permissions",
    items: [
      { label: 'Create Admin', href: '/super-admin/support-tickets', icon: Bell },
      { label: 'Assign Roles', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Permission Control', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Activity Logs', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Login History', href: '/super-admin/support-settings', icon: Bell },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: 'Platform Settings', href: '/super-admin/support-tickets', icon: Bell },
      { label: 'Commission %', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Payment Gateway Config', href: '/super-admin/support-settings', icon: Bell },
      { label: 'SMTP Config', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Logo Upload', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Maintenance Mode', href: '/super-admin/support-settings', icon: Bell },
    ],
  },
  {
    label: "Support & Disputes",
    items: [
      { label: 'Support Tickets', href: '/super-admin/support-tickets', icon: Bell },
      { label: 'Chat Logs', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Refund Cases', href: '/super-admin/support-settings', icon: Bell },
      { label: 'Abuse Reports', href: '/super-admin/support-settings', icon: Bell },
    ],
  }

];

/* ======== STAFF MENU ====== */

const staffMenu: MenuGroupConfig[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/staff/dashboard', icon: BarChart3 },
    ],
  },
  {
    label: 'Management',
    items: [
      { label: 'Doctors', href: '/staff/doctors', icon: Stethoscope },
      { label: 'Appointments', href: '/staff/appointments', icon: Calendar },
      { label: 'Patients', href: '/staff/patients', icon: Users },
    ],
  },
];

/* ====== EXPORT ROLE MENUS ================= */

export const roleMenus: Record<UserRole, MenuGroupConfig[]> = {
  SUPER_ADMIN: superAdminMenu,
  STAFF: staffMenu,
};

/* ====== ROLE COLORS =============== */

export const roleColors: Record<UserRole, string> = {
  SUPER_ADMIN: 'bg-red-600',
  STAFF: 'bg-blue-600',
};

/* ========= ROLE NAMES =============== */
export const roleNames: Record<UserRole, string> = {
  SUPER_ADMIN: 'Super Admin',
  STAFF: 'Staff',
};
