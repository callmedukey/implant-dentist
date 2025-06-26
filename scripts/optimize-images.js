#!/usr/bin/env node

const sharp = require("sharp");

const fs = require("fs").promises;
const path = require("path");

async function optimizeImage(inputPath) {
  try {
    // Skip SVG files
    if (inputPath.toLowerCase().endsWith(".svg")) {
      console.log(`Skipping SVG file: ${inputPath}`);
      return inputPath;
    }

    // Generate output path with .webp extension
    const parsedPath = path.parse(inputPath);
    const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    // Get input file stats
    const inputStats = await fs.stat(inputPath);

    // Convert to WebP with high quality
    await sharp(inputPath)
      .webp({
        quality: 100,
        effort: 6, // Higher effort = better compression
      })
      .toFile(outputPath);

    // Get output file stats
    const outputStats = await fs.stat(outputPath);

    // Calculate compression ratio
    const compressionRatio = (
      (1 - outputStats.size / inputStats.size) *
      100
    ).toFixed(2);

    console.log(
      `✅ Optimized: ${path.basename(inputPath)} → ${path.basename(outputPath)}`
    );
    console.log(`   Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
    console.log(`   Optimized: ${(outputStats.size / 1024).toFixed(2)} KB`);
    console.log(`   Compression: ${compressionRatio}% reduction`);

    // Optionally remove the original file
    // await fs.unlink(inputPath);

    return outputPath;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeMultipleImages(imagePaths) {
  console.log(`🖼️  Optimizing ${imagePaths.length} image(s)...\n`);

  const results = [];
  for (const imagePath of imagePaths) {
    const result = await optimizeImage(imagePath);
    results.push(result);
  }

  console.log(`\n✨ Optimization complete!`);
  return results.filter(Boolean);
}

// Main execution
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      "Usage: node optimize-images.js <image-path> [<image-path> ...]"
    );
    console.log(
      "Example: node optimize-images.js ./public/images/hero.png ./public/images/logo.jpg"
    );
    process.exit(1);
  }

  // Verify all files exist
  for (const arg of args) {
    try {
      await fs.access(arg);
    } catch {
      console.error(`❌ File not found: ${arg}`);
      process.exit(1);
    }
  }

  await optimizeMultipleImages(args);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

// Export for use as a module
module.exports = { optimizeImage, optimizeMultipleImages };
