// Simple healthcheck for Bun runtime
import { spawn } from 'child_process';

async function healthcheck() {
  try {
    // Check if the server is responding
    const response = await fetch('http://localhost:3000', {
      method: 'GET',
      timeout: 5000
    });
    
    if (response.ok) {
      console.log('Healthcheck passed');
      process.exit(0);
    } else {
      console.error('Healthcheck failed:', response.status);
      process.exit(1);
    }
  } catch (error) {
    console.error('Healthcheck failed:', error.message);
    process.exit(1);
  }
}

healthcheck();