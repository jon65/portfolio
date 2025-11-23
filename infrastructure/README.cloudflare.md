# Cloudflare Deployment Option

This is an **alternative deployment configuration** for using Cloudflare-managed domains with AWS resources (S3/CloudFront and EC2).

## Overview

This configuration extends the base infrastructure to support:
- Custom domains managed by Cloudflare
- SSL certificates via AWS Certificate Manager (ACM)
- CloudFront distribution with custom domain aliases
- Integration with Cloudflare DNS

## Prerequisites

1. **Domain managed by Cloudflare**
   - Your domain must be added to Cloudflare
   - DNS should be managed by Cloudflare

2. **AWS Certificate Manager (ACM) Certificate**
   - Request a certificate in **us-east-1** region (required for CloudFront)
   - Use DNS validation
   - Add validation CNAME records to Cloudflare DNS
   - Wait for certificate validation

3. **Terraform** (version >= 1.0)
4. **AWS CLI** configured with credentials

## Quick Start

### Step 1: Request ACM Certificate

1. Go to [AWS Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1) in **us-east-1**
2. Request a public certificate for your domain
3. Add the validation CNAME records to Cloudflare DNS
4. Wait for validation (5-10 minutes)
5. Copy the Certificate ARN

### Step 2: Configure Terraform

1. **Copy the example variables file:**
   ```bash
   cp terraform.cloudflare.tfvars.example terraform.cloudflare.tfvars
   ```

2. **Edit `terraform.cloudflare.tfvars`:**
   ```hcl
   aws_region  = "us-east-1"
   bucket_name = "your-unique-bucket-name"
   environment = "prod"
   domain_name = "example.com"
   acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abc123..."
   ```

### Step 3: Deploy Infrastructure

**⚠️ Important:** Terraform loads all `.tf` files in a directory. To avoid conflicts between base and Cloudflare configs, use a **separate directory** for Cloudflare deployment.

**Recommended: Use a separate directory**

1. **Create a new directory for Cloudflare deployment:**
   ```bash
   cd infrastructure
   mkdir -p cloudflare-deployment
   cp main.cloudflare.tf variables.cloudflare.tf outputs.cloudflare.tf cloudflare-deployment/
   cp terraform.cloudflare.tfvars.example cloudflare-deployment/terraform.tfvars
   cd cloudflare-deployment
   ```

2. **Edit `terraform.tfvars` with your values:**
   ```bash
   # Edit terraform.tfvars with your domain and certificate ARN
   ```

3. **Initialize and deploy:**
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

**Alternative: Temporarily rename base files**

If you prefer to keep everything in one directory:
```bash
cd infrastructure
# Temporarily rename base files
mv main.tf main.tf.bak
mv variables.tf variables.tf.bak
mv outputs.tf outputs.tf.bak

# Rename Cloudflare files to standard names
mv main.cloudflare.tf main.tf
mv variables.cloudflare.tf variables.tf
mv outputs.cloudflare.tf outputs.tf

# Deploy
terraform init
terraform plan -var-file=terraform.cloudflare.tfvars
terraform apply -var-file=terraform.cloudflare.tfvars

# Restore base files when done
mv main.tf main.cloudflare.tf
mv variables.tf variables.cloudflare.tf
mv outputs.tf outputs.cloudflare.tf
mv main.tf.bak main.tf
mv variables.tf.bak variables.tf
mv outputs.tf.bak outputs.tf
```

### Step 4: Configure Cloudflare DNS

After deployment, configure DNS in Cloudflare:

1. **Get the CloudFront domain name:**
   ```bash
   terraform output cloudfront_domain_name
   ```

2. **Add CNAME record in Cloudflare:**
   - Go to Cloudflare Dashboard → DNS → Records
   - Add CNAME: `@` → `d1234567890.cloudfront.net`
   - Choose DNS only (gray cloud) or Proxied (orange cloud)
   - See `CLOUDFLARE_SETUP.md` for detailed instructions

### Step 5: Deploy Your Website

```bash
# Build your React app
npm run build

# Upload to S3
BUCKET_NAME=$(terraform output -raw bucket_name)
aws s3 sync build/ s3://$BUCKET_NAME/ --delete

# Invalidate CloudFront cache
DISTRIBUTION_ID=$(terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
```

## File Structure

```
infrastructure/
├── main.tf                    # Original base configuration
├── variables.tf               # Original variables
├── outputs.tf                 # Original outputs
├── main.cloudflare.tf         # Cloudflare-specific Terraform config
├── variables.cloudflare.tf    # Cloudflare-specific variables
├── outputs.cloudflare.tf      # Cloudflare-specific outputs
├── terraform.cloudflare.tfvars.example  # Example Cloudflare config
├── CLOUDFLARE_SETUP.md        # Detailed Cloudflare setup guide
└── README.cloudflare.md       # This file
```

## Using Both Configurations

**⚠️ Note:** Terraform loads all `.tf` files in a directory. You cannot have both `main.tf` and `main.cloudflare.tf` active in the same directory as they define duplicate resources.

**Recommended approach:** Use separate directories:
- `infrastructure/` - Base configuration (original files)
- `infrastructure/cloudflare-deployment/` - Cloudflare configuration (`.cloudflare.tf` files)

This allows you to:
1. Keep both configurations available
2. Switch between them easily
3. Avoid Terraform conflicts
4. Maintain separate state files if needed

## Differences from Base Configuration

| Feature | Base Config | Cloudflare Config |
|---------|-------------|-------------------|
| Custom Domain | ❌ | ✅ |
| ACM Certificate | ❌ | ✅ Required |
| CloudFront Aliases | ❌ | ✅ |
| SSL Certificate | CloudFront default | ACM custom |
| AWS Region | Any | us-east-1 (for ACM) |

## Troubleshooting

See `CLOUDFLARE_SETUP.md` for detailed troubleshooting guide.

Common issues:
- **Certificate validation fails**: Ensure CNAME records are in Cloudflare DNS
- **Domain not resolving**: Check DNS records and wait for propagation
- **SSL errors**: Verify ACM certificate is in us-east-1 and properly validated

## Additional Resources

- [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md) - Comprehensive Cloudflare setup guide
- [AWS Certificate Manager Documentation](https://docs.aws.amazon.com/acm/)
- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)

