#!/bin/bash

# Simple deployment script for existing S3 bucket
# Usage: ./deploy.sh [bucket-name] [cloudfront-distribution-id]

set -e  # Exit on error

BUCKET_NAME="${1:-jonnoyip.com}"  # Default to jonnoyip.com if not provided
DISTRIBUTION_ID="${2:-E2W6JUZC2KYWCM}"  # Optional CloudFront distribution ID

echo "🚀 Starting deployment to $BUCKET_NAME..."

# Build the React app
echo "📦 Building React app..."
npm run build

if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Build may have failed."
    exit 1
fi

# Upload to S3
echo "☁️  Uploading files to S3 bucket: $BUCKET_NAME..."
aws s3 sync build/ "s3://$BUCKET_NAME/" --delete

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" > /dev/null
    echo "✅ CloudFront cache invalidation initiated"
fi

echo ""
echo "✅ Deployment complete!"
echo "🌐 Website should be available at your configured domain"
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "⏱️  Note: CloudFront changes may take a few minutes to propagate globally."
fi

