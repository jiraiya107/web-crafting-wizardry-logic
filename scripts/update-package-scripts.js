
const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

// Add or update scripts
packageJson.scripts = {
  ...packageJson.scripts,
  "dist": "vite build",
  "deploy": "node ./scripts/firebase-deploy.js --build-and-deploy",
  "deploy:odoo": "node ./scripts/odoo-deploy.js"
};

// Write the updated package.json file
fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2) + '\n',
  'utf8'
);

console.log('✅ Package.json scripts updated successfully.');
console.log('New scripts:');
console.log('  - npm run dist: Alias for "npm run build"');
console.log('  - npm run deploy: Build and deploy to Firebase in one step');
console.log('  - npm run deploy:odoo: Build and prepare for Odoo deployment');

