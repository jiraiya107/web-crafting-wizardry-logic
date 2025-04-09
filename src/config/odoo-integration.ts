
/**
 * Odoo Integration Configuration
 * 
 * This file contains settings and utilities to help the React application
 * work when hosted on an Odoo domain.
 */

// Configuration for Odoo integration
export const odooConfig = {
  // Base path where this app is mounted in Odoo
  // Change this according to your Odoo setup
  basePath: '/custom_app',
  
  // Odoo API endpoint (update with your actual Odoo instance URL)
  apiEndpoint: '/web/dataset/call_kw',
};

// Helper to generate URLs that work with Odoo's domain structure
export const getOdooCompatibleUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Combine the base path with the requested path
  return `${odooConfig.basePath}/${cleanPath}`.replace(/\/\//g, '/');
};

// Helper to check if running in Odoo context
export const isRunningInOdoo = (): boolean => {
  // This is a simple check that might need refinement based on your setup
  return window.location.pathname.includes(odooConfig.basePath);
};
