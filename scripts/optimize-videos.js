#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

function optimizeVideo(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const supportedFormats = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];
  
  if (!supportedFormats.includes(ext)) {
    console.log(`Skipping ${inputPath} - unsupported format`);
    return;
  }

  const outputPath = inputPath.replace(ext, '-optimized.mp4');
  
  console.log(`\nOptimizing: ${inputPath}`);
  
  try {
    // Check if ffmpeg is installed
    try {
      execSync('ffmpeg -version', { stdio: 'ignore' });
    } catch {
      console.error('Error: ffmpeg is not installed. Please install ffmpeg first.');
      console.error('On macOS: brew install ffmpeg');
      console.error('On Ubuntu/Debian: sudo apt-get install ffmpeg');
      process.exit(1);
    }

    const originalSize = fs.statSync(inputPath).size;
    
    // FFmpeg optimization command
    // -c:v libx264 - Use H.264 codec for video
    // -preset slower - Better compression (slower encoding)
    // -crf 23 - Constant Rate Factor (18-28 range, lower = better quality)
    // -c:a aac - Use AAC codec for audio
    // -b:a 128k - Audio bitrate
    // -movflags +faststart - Optimize for web streaming
    const command = `ffmpeg -i "${inputPath}" -c:v libx264 -preset slower -crf 23 -c:a aac -b:a 128k -movflags +faststart -y "${outputPath}"`;
    
    console.log('Converting to optimized MP4...');
    execSync(command, { stdio: 'inherit' });
    
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`✓ Original: ${formatBytes(originalSize)}`);
    console.log(`✓ Optimized: ${formatBytes(optimizedSize)}`);
    console.log(`✓ Saved: ${formatBytes(savings)} (${savingsPercent}%)`);
    console.log(`✓ Output: ${outputPath}`);
    
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node optimize-videos.js <video1> [video2] ...');
  console.log('Example: node optimize-videos.js public/videos/main.mp4');
  console.log('\nOptions:');
  console.log('  Supports: .mp4, .mov, .avi, .mkv, .webm');
  console.log('  Output: Creates optimized MP4 files with "-optimized" suffix');
  console.log('  Quality: Balanced for web (CRF 23)');
  process.exit(0);
}

console.log('Video Optimization Tool');
console.log('======================');

args.forEach(arg => {
  const fullPath = path.resolve(arg);
  if (fs.existsSync(fullPath)) {
    optimizeVideo(fullPath);
  } else {
    console.error(`File not found: ${arg}`);
  }
});

console.log('\nOptimization complete!');