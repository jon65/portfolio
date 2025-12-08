#!/bin/bash

# Helper script to set up Cloudflare deployment directory
# This creates a separate directory to avoid conflicts with base configuration

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLOUDFLARE_DIR="$SCRIPT_DIR/cloudflare-deployment"

echo "🚀 Setting up Cloudflare deployment directory..."

# Create directory if it doesn't exist
mkdir -p "$CLOUDFLARE_DIR"

# Copy Cloudflare-specific Terraform files
echo "📋 Copying Cloudflare configuration files..."
cp "$SCRIPT_DIR/main.cloudflare.tf" "$CLOUDFLARE_DIR/main.tf"
cp "$SCRIPT_DIR/variables.cloudflare.tf" "$CLOUDFLARE_DIR/variables.tf"
cp "$SCRIPT_DIR/outputs.cloudflare.tf" "$CLOUDFLARE_DIR/outputs.tf"

# Copy example tfvars if terraform.tfvars doesn't exist
if [ ! -f "$CLOUDFLARE_DIR/terraform.tfvars" ]; then
  echo "📝 Creating terraform.tfvars from example..."
  cp "$SCRIPT_DIR/terraform.cloudflare.tfvars.example" "$CLOUDFLARE_DIR/terraform.tfvars"
  echo "⚠️  Please edit $CLOUDFLARE_DIR/terraform.tfvars with your values:"
  echo "   - domain_name"
  echo "   - acm_certificate_arn"
  echo "   - bucket_name"
else
  echo "✅ terraform.tfvars already exists, skipping..."
fi

# Copy setup guide
cp "$SCRIPT_DIR/CLOUDFLARE_SETUP.md" "$CLOUDFLARE_DIR/" 2>/dev/null || true

echo ""
echo "✅ Cloudflare deployment directory created at: $CLOUDFLARE_DIR"
echo ""
echo "Next steps:"
echo "1. Edit $CLOUDFLARE_DIR/terraform.tfvars with your values"
echo "2. cd $CLOUDFLARE_DIR"
echo "3. terraform init"
echo "4. terraform plan"
echo "5. terraform apply"
echo ""
echo "See $CLOUDFLARE_DIR/CLOUDFLARE_SETUP.md for detailed instructions."

