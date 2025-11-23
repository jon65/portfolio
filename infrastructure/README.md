# Terraform Infrastructure for Portfolio Website

This directory contains Terraform configuration to deploy the portfolio website as a static site on AWS S3 with CloudFront.

## Prerequisites

1. **AWS CLI** installed and configured with credentials
   ```bash
   aws configure
   ```

2. **Terraform** installed (version >= 1.0)
   ```bash
   # macOS
   brew install terraform
   
   # Or download from https://www.terraform.io/downloads
   ```

3. **AWS Account** with appropriate permissions to create:
   - S3 buckets
   - CloudFront distributions
   - IAM policies

## Setup

1. **Copy the example variables file:**
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. **Edit `terraform.tfvars` with your values:**
   ```hcl
   aws_region  = "us-east-1"
   bucket_name = "your-unique-bucket-name"  # Must be globally unique
   environment = "prod"
   ```

   **Important:** The bucket name must be globally unique across all AWS accounts.

## Deployment

1. **Initialize Terraform:**
   ```bash
   cd infrastructure
   terraform init
   ```

2. **Review the planned changes:**
   ```bash
   terraform plan
   ```

3. **Apply the configuration:**
   ```bash
   terraform apply
   ```

4. **After deployment, note the outputs:**
   - `cloudfront_url` - Use this as your primary website URL (HTTPS)
   - `s3_website_url` - Direct S3 website endpoint (HTTP only)

## Uploading Your Website

After the infrastructure is created, you need to upload your built website files:

1. **Build your React app:**
   ```bash
   cd ..
   npm run build
   ```

2. **Upload to S3:**
   ```bash
   # Using AWS CLI
   aws s3 sync build/ s3://YOUR_BUCKET_NAME/ --delete
   
   # Or using Terraform output
   aws s3 sync build/ s3://$(terraform output -raw bucket_name)/ --delete
   ```

   The `--delete` flag removes files in S3 that don't exist in your local build folder.

## Automated Deployment Script

You can create a deployment script to automate the build and upload process:

```bash
#!/bin/bash
# deploy.sh

echo "Building React app..."
npm run build

echo "Uploading to S3..."
BUCKET_NAME=$(cd infrastructure && terraform output -raw bucket_name)
aws s3 sync build/ s3://$BUCKET_NAME/ --delete

echo "Invalidating CloudFront cache..."
DISTRIBUTION_ID=$(cd infrastructure && terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
echo "Website URL: $(cd infrastructure && terraform output -raw cloudfront_url)"
```

## Custom Domain (Optional)

To use a custom domain:

1. Request an SSL certificate in AWS Certificate Manager (ACM) in `us-east-1` region
2. Update `main.tf` to add:
   - `aliases` in the CloudFront distribution
   - `viewer_certificate` with your ACM certificate ARN
3. Create a Route 53 hosted zone and add an A record pointing to the CloudFront distribution

## Cleanup

To destroy all resources:

```bash
terraform destroy
```

**Warning:** This will delete the S3 bucket and all its contents, as well as the CloudFront distribution.

## Resources Created

- **S3 Bucket**: Stores the static website files
- **S3 Bucket Policy**: Allows public read access
- **S3 Website Configuration**: Enables static website hosting
- **CloudFront Distribution**: Provides HTTPS, CDN, and better performance
- **CloudFront Error Pages**: Handles SPA routing (404/403 -> index.html)

## Costs

- **S3**: ~$0.023 per GB stored + $0.005 per 1,000 requests
- **CloudFront**: ~$0.085 per GB data transfer (first 10TB)
- **Total**: Typically < $1/month for a personal portfolio site

