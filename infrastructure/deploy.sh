#!/bin/bash

# Deployment script for portfolio website
# This script builds the React app and uploads it to S3

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Change to project root
cd "$PROJECT_ROOT"

# Build the React app
echo "📦 Building React app..."
npm run build

if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Build may have failed."
    exit 1
fi

# Change to infrastructure directory
cd infrastructure

# Get bucket name from Terraform output
echo "🔍 Getting bucket name from Terraform..."
BUCKET_NAME=$(terraform output -raw bucket_name 2>/dev/null || echo "")

if [ -z "$BUCKET_NAME" ]; then
    echo "❌ Could not get bucket name. Make sure Terraform has been applied."
    echo "   Run 'terraform apply' in the infrastructure directory first."
    exit 1
fi

# Upload to S3
echo "☁️  Uploading files to S3 bucket: $BUCKET_NAME..."
aws s3 sync "$PROJECT_ROOT/build/" "s3://$BUCKET_NAME/" --delete

# Get CloudFront distribution ID
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id 2>/dev/null || echo "")

if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" > /dev/null
    echo "✅ CloudFront cache invalidation initiated"
fi

# Get the website URL
CLOUDFRONT_URL=$(terraform output -raw cloudfront_url 2>/dev/null || echo "")
S3_URL=$(terraform output -raw s3_website_url 2>/dev/null || echo "")

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Website URLs:"
if [ ! -z "$CLOUDFRONT_URL" ]; then
    echo "   CloudFront (HTTPS): $CLOUDFRONT_URL"
fi
if [ ! -z "$S3_URL" ]; then
    echo "   S3 Direct (HTTP):   $S3_URL"
fi
echo ""
echo "⏱️  Note: CloudFront changes may take a few minutes to propagate globally."

