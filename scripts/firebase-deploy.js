
// Firebase Deployment Helper
console.log("==== Firebase Deployment Helper ====");
console.log("\n1. Before deploying, make sure to:");
console.log("  - Create a Firebase project at https://console.firebase.google.com/");
console.log("  - Run 'npx firebase login' to authenticate");
console.log("  - Update .firebaserc with your Firebase project ID");
console.log("\n2. Build your project with 'npm run build' or 'npm run dist'");
console.log("\n3. Deploy with 'npx firebase deploy'");
console.log("\nQuick Deploy: Run 'npm run deploy' to build and deploy in one step");
console.log("\nFor more information, visit: https://firebase.google.com/docs/hosting/quickstart");

// If script is executed with --build-and-deploy flag, run the build and deploy commands
if (process.argv.includes('--build-and-deploy')) {
  console.log("\n==== Building and Deploying ====");
  const { execSync } = require('child_process');
  
  try {
    console.log("\nRunning build...");
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log("\nDeploying to Firebase...");
    execSync('npx firebase deploy', { stdio: 'inherit' });
    
    console.log("\n✅ Deployment complete!");
  } catch (error) {
    console.error("\n❌ Error during build or deploy process:", error.message);
    process.exit(1);
  }
}
