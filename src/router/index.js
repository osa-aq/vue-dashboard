import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'el-icon-odometer' }
    }]
  },
  {
    path: '/catalog',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Catalog',
        component: () => import('@/views/catalog/index'),
        meta: { title: 'Catalog', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/setup',
    name: 'Inventory',
    hasChilds:true,
    meta: { title: 'Inventory', icon: 'el-icon-notebook-2' },
    children: [
      {
        path: 'setup',
        name: 'InventorySetup',
        component: () => import('@/views/inventory/setup/index'),
        meta: { title: 'Inventory Setup', icon: 'el-icon-s-tools' }
      }
    ]
  },
  {
    path: '/reports',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Reports',
        component: () => import('@/views/reports/index'),
        meta: { title: 'Reports', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/cash-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Cash Management',
        component: () => import('@/views/cash-management/index'),
        meta: { title: 'Cash Management', icon: 'el-icon-money' }
      }
    ]
  },
  {
    path: '/transactions',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Transactions',
        component: () => import('@/views/transactions/index'),
        meta: { title: 'Transactions', icon: 'el-icon-shopping-cart-2' }
      }
    ]
  },
  {
    path: '/tabs-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Tabs Management',
        component: () => import('@/views/tabs-management/index'),
        meta: { title: 'Tabs Management', icon: 'el-icon-set-up' }
      }
    ]
  },
  {
    path: '/customers',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Customers',
        component: () => import('@/views/customers/index'),
        meta: { title: 'Customers', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/location-settings',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Location Settings',
        component: () => import('@/views/location-settings/index'),
        meta: { title: 'Location Settings', icon: 'el-icon-location-outline' }
      }
    ]
  },
  {
    path: '/account-settings',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Account Settings',
        component: () => import('@/views/account-settings/index'),
        meta: { title: 'Account Settings', icon: 'el-icon-setting' }
      }
    ]
  },
  {
    path: '/employees-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Employee Management',
        component: () => import('@/views/employees-management/index'),
        meta: { title: 'Employee Management', icon: 'el-icon-s-custom' }
      }
    ]
  },
  {
    path: '/user-management',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'User Management',
        component: () => import('@/views/user-management/index'),
        meta: { title: 'User Management', icon: 'el-icon-user-solid' }
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
