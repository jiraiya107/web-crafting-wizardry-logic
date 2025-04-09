
// Odoo Deployment Helper
console.log("==== Odoo Deployment Helper ====");

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log("\n1. Building application for Odoo integration...");

try {
  // Set environment variables for the build
  process.env.ODOO_INTEGRATION = 'true';
  
  // Run the build
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log("\n✅ Build completed successfully!");
  console.log("\n2. Deploy Instructions:");
  console.log("   - Copy the contents of the 'dist' folder to your Odoo custom addon's static folder");
  console.log("   - Typical path: /path/to/odoo/addons/your_custom_module/static/src/");
  console.log("   - Update your Odoo module's manifest to include these files");
  console.log("\n3. In your Odoo module, create a controller to serve this app:");
  console.log(`
    # Example Odoo Controller (Python)
    from odoo import http
    from odoo.http import request
    
    class CustomAppController(http.Controller):
        @http.route('/custom_app', type='http', auth='user')
        def custom_app(self, **kw):
            return request.render('your_module.custom_app_template', {})
  `);
  
  console.log("\nFor more information, refer to the Odoo documentation on custom web applications.");
  
} catch (error) {
  console.error("\n❌ Error during build process:", error.message);
  process.exit(1);
}
