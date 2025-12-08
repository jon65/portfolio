# Terraform Infrastructure for Portfolio Website

This directory contains Terraform configuration to deploy the portfolio website as a static site on AWS S3 with CloudFront.

## System Architecture

### Infrastructure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        User Request                          │
└───────────────────────┬─────────────────────────────────────┘
                        │ HTTPS
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                   CloudFront CDN                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Edge Locations (Global)                             │   │
│  │  • Caching                                           │   │
│  │  • SSL/TLS Termination                               │   │
│  │  • Compression                                       │   │
│  │  • Custom Error Pages (SPA routing)                  │   │
│  └───────────────────────┬──────────────────────────────┘   │
└──────────────────────────┼──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      S3 Bucket                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Static Website Hosting                              │   │
│  │  • index.html                                        │   │
│  │  • CSS/JS bundles                                    │   │
│  │  • Images and assets                                 │   │
│  │  • Public read access                                │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

1. **S3 Bucket**
   - Stores all static website files
   - Configured for static website hosting
   - Public read access via bucket policy
   - Serves as CloudFront origin

2. **CloudFront Distribution**
   - Global CDN with edge locations worldwide
   - HTTPS/SSL encryption (default CloudFront certificate)
   - Automatic compression (Gzip/Brotli)
   - Edge caching (TTL: 1 hour default, 24 hours max)
   - Custom error responses for SPA routing (404/403 → index.html)
   - IPv6 support enabled

3. **Security & Access**
   - Public read access via S3 bucket policy
   - HTTPS-only traffic (HTTP redirects to HTTPS)
   - CloudFront Origin Access Identity (OAI) for enhanced security (optional)

### Request Flow

1. User requests website via CloudFront URL
2. CloudFront checks edge cache
3. If cache miss, CloudFront fetches from S3 origin
4. Content is cached at edge location
5. Response delivered to user with HTTPS
6. Subsequent requests served from cache (faster response)

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

This base configuration uses the default CloudFront domain. For custom domain support, see:

- **[README.cloudflare.md](./README.cloudflare.md)** - Cloudflare DNS setup (recommended)
- **[CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md)** - Detailed Cloudflare configuration guide

### Alternative: Route 53 Custom Domain

To use AWS Route 53 for DNS:

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

### AWS Resources

- **S3 Bucket** (`aws_s3_bucket.website`)
  - Stores the static website files
  - Globally unique bucket name
  - Versioning disabled (can be enabled if needed)
  - Tags for resource management

- **S3 Bucket Public Access Block** (`aws_s3_bucket_public_access_block.website`)
  - Configures public access settings
  - Allows public read access via bucket policy

- **S3 Bucket Website Configuration** (`aws_s3_bucket_website_configuration.website`)
  - Enables static website hosting
  - Sets `index.html` as index document
  - Configures error document for SPA routing

- **S3 Bucket Policy** (`aws_s3_bucket_policy.website`)
  - Grants public read access to all objects
  - Required for CloudFront to serve content

- **CloudFront Origin Access Identity** (`aws_cloudfront_origin_access_identity.website`)
  - Optional security enhancement
  - Restricts S3 access to CloudFront only

- **CloudFront Distribution** (`aws_cloudfront_distribution.website`)
  - Global CDN distribution
  - HTTPS enabled (default CloudFront certificate)
  - IPv6 support enabled
  - Compression enabled
  - Custom error responses for SPA routing
  - Cache behavior configured for static assets

### Configuration Details

**CloudFront Cache Settings:**
- Minimum TTL: 0 seconds
- Default TTL: 3600 seconds (1 hour)
- Maximum TTL: 86400 seconds (24 hours)
- Compression: Enabled
- Viewer Protocol Policy: Redirect HTTP to HTTPS

**SPA Routing Support:**
- 404 errors → 200 response with `/index.html`
- 403 errors → 200 response with `/index.html`
- Enables client-side routing to work correctly

## Costs

### AWS Pricing (as of 2024)

**S3 Storage:**
- Standard storage: $0.023 per GB/month
- PUT requests: $0.005 per 1,000 requests
- GET requests: $0.0004 per 1,000 requests

**CloudFront:**
- Data transfer out (first 10TB): $0.085 per GB
- HTTPS requests: $0.0100 per 10,000 requests
- Invalidation requests: First 1,000/month free, then $0.005 per path

### Estimated Monthly Cost

For a typical personal portfolio site:
- **Storage**: ~50 MB = $0.001
- **S3 Requests**: ~10,000/month = $0.05
- **CloudFront Transfer**: ~5 GB/month = $0.43
- **CloudFront Requests**: ~50,000/month = $0.05
- **Total**: ~$0.50 - $1.00/month

*Note: AWS Free Tier may cover some costs for the first 12 months*

## Monitoring & Maintenance

### Viewing CloudFront Metrics

```bash
# Get distribution statistics
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID

# List recent invalidations
aws cloudfront list-invalidations --distribution-id YOUR_DISTRIBUTION_ID
```

### Monitoring S3 Usage

```bash
# List bucket contents
aws s3 ls s3://YOUR_BUCKET_NAME --recursive

# Get bucket size
aws s3 ls s3://YOUR_BUCKET_NAME --recursive --summarize | grep "Total Size"
```

### Best Practices

1. **Regular Backups**: Consider versioning or periodic backups of S3 bucket
2. **Cache Invalidation**: Only invalidate when necessary (costs apply after first 1,000/month)
3. **Monitoring**: Set up CloudWatch alarms for unusual traffic patterns
4. **Cost Optimization**: Use CloudFront compression and appropriate cache TTLs
5. **Security**: Regularly review bucket policies and CloudFront settings

