# Connecting Cloudflare to AWS Resources

This guide explains how to connect your Cloudflare-managed domain to AWS resources like S3 (via CloudFront) and EC2.

## Overview

There are two main approaches:
1. **Cloudflare Proxy (Orange Cloud ON)** - Traffic goes through Cloudflare's CDN
2. **DNS Only (Orange Cloud OFF)** - Cloudflare only handles DNS, traffic goes directly to AWS

For S3/CloudFront, both work, but DNS-only is simpler. For EC2, you'll typically use DNS-only or Cloudflare proxy.

---

## Part 1: Connecting to S3 via CloudFront

### Step 1: Request SSL Certificate in AWS Certificate Manager (ACM)

1. **Go to AWS Certificate Manager** in the `us-east-1` region (required for CloudFront)
   - Navigate to: https://console.aws.amazon.com/acm/home?region=us-east-1

2. **Request a public certificate:**
   - Click "Request a certificate"
   - Choose "Request a public certificate"
   - Enter your domain (e.g., `example.com` or `*.example.com` for wildcard)
   - Select "DNS validation" (recommended)

3. **Validate the certificate:**
   - AWS will provide CNAME records to add to your DNS
   - **Add these CNAME records in Cloudflare** (DNS tab in your Cloudflare dashboard)
   - Wait for validation (usually 5-10 minutes)

4. **Copy the Certificate ARN** (you'll need this for Terraform)

### Step 2: Update Terraform Configuration

1. **Update `terraform.tfvars`:**
   ```hcl
   aws_region  = "us-east-1"
   bucket_name = "your-bucket-name"
   environment = "prod"
   domain_name = "example.com"  # Your Cloudflare domain
   acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abc123..."  # From Step 1
   ```

2. **Apply Terraform:**
   ```bash
   cd infrastructure
   terraform plan
   terraform apply
   ```

3. **Get the CloudFront domain name:**
   ```bash
   terraform output cloudfront_domain_name
   ```

### Step 3: Configure DNS in Cloudflare

You have two options:

#### Option A: DNS Only (Recommended for CloudFront)

1. **Go to Cloudflare Dashboard** → DNS → Records
2. **Add a CNAME record:**
   - **Type:** CNAME
   - **Name:** `@` (for root domain) or `www` (for www subdomain)
   - **Target:** Your CloudFront domain (e.g., `d1234567890.cloudfront.net`)
   - **Proxy status:** DNS only (gray cloud OFF)
   - **TTL:** Auto

3. **For www subdomain (if needed):**
   - Add another CNAME: `www` → `d1234567890.cloudfront.net` (DNS only)

#### Option B: Cloudflare Proxy (Orange Cloud)

1. **Add CNAME record as above, but:**
   - **Proxy status:** Proxied (orange cloud ON)

2. **Configure SSL/TLS:**
   - Go to SSL/TLS → Overview
   - Set to "Full" or "Full (strict)" mode
   - This ensures Cloudflare connects to CloudFront over HTTPS

3. **Note:** With proxy enabled, you'll get Cloudflare's IP addresses, not CloudFront's. This is fine and provides additional DDoS protection.

### Step 4: Verify

1. Wait 5-10 minutes for DNS propagation
2. Visit your domain: `https://example.com`
3. Check SSL certificate is valid

---

## Part 2: Connecting to EC2

### Method 1: Direct EC2 Instance (DNS Only)

1. **Get your EC2 instance's public IP or Elastic IP:**
   ```bash
   aws ec2 describe-instances --instance-ids i-1234567890abcdef0
   ```

2. **In Cloudflare DNS:**
   - **Type:** A
   - **Name:** `@` (root) or subdomain
   - **IPv4 address:** Your EC2 public IP
   - **Proxy status:** DNS only (gray cloud OFF) or Proxied (orange cloud ON)
   - **TTL:** Auto

3. **If using Elastic IP:**
   - Same as above, but use the Elastic IP address

### Method 2: EC2 Behind Application Load Balancer (ALB)

1. **Get your ALB DNS name:**
   ```bash
   aws elbv2 describe-load-balancers --names your-alb-name
   ```

2. **In Cloudflare DNS:**
   - **Type:** CNAME
   - **Name:** `@` or subdomain
   - **Target:** ALB DNS name (e.g., `your-alb-123456789.us-east-1.elb.amazonaws.com`)
   - **Proxy status:** DNS only (recommended) or Proxied

3. **SSL/TLS Configuration:**
   - If using Cloudflare proxy, set SSL/TLS to "Full" or "Full (strict)"
   - Ensure your ALB has an SSL certificate (ACM) configured

### Method 3: EC2 with Cloudflare Proxy (Orange Cloud)

**Important considerations:**
- Cloudflare proxy hides your EC2's real IP (good for security)
- You'll need to configure Cloudflare to allow real IPs:
  - Go to Network → Enable "Pseudo IPv4"
  - Your application should read `CF-Connecting-IP` header for real client IPs

**Steps:**
1. Add A or CNAME record as above
2. Enable proxy (orange cloud ON)
3. Configure SSL/TLS mode:
   - **Full:** Cloudflare → EC2 over HTTPS (EC2 needs SSL cert)
   - **Flexible:** Cloudflare → EC2 over HTTP (easier, less secure)

---

## Part 3: Advanced Configurations

### Multiple Subdomains

**Example:**
- `example.com` → CloudFront (S3)
- `api.example.com` → EC2 or ALB
- `www.example.com` → CloudFront (S3)

**Cloudflare DNS Setup:**
```
Type    Name    Target                                    Proxy
CNAME   @       d1234567890.cloudfront.net               DNS only
CNAME   www     d1234567890.cloudfront.net               DNS only
CNAME   api     your-alb-123456789.us-east-1.elb...      DNS only
```

### Page Rules (Optional)

You can use Cloudflare Page Rules for:
- Redirects (e.g., `http://example.com` → `https://example.com`)
- Cache settings
- Security headers

**Example Page Rule:**
- URL: `http://example.com/*`
- Settings: Always Use HTTPS, Cache Level: Standard

### Cloudflare Workers (Optional)

For advanced routing or edge computing, you can use Cloudflare Workers to:
- Route requests to different AWS resources
- Add custom logic at the edge
- Transform responses

---

## Troubleshooting

### SSL Certificate Issues

**Problem:** "SSL handshake failed" or certificate errors

**Solutions:**
- Ensure ACM certificate is in `us-east-1` region (for CloudFront)
- Verify DNS validation records are in Cloudflare
- Check SSL/TLS mode in Cloudflare (should be "Full" or "Full (strict)" for proxy)

### DNS Not Resolving

**Problem:** Domain doesn't resolve or shows Cloudflare error page

**Solutions:**
- Wait 5-10 minutes for DNS propagation
- Verify DNS records are correct in Cloudflare
- Check if proxy is enabled when it shouldn't be (or vice versa)
- Use `dig example.com` or `nslookup example.com` to verify DNS

### CloudFront Not Accessible

**Problem:** CloudFront URL works but custom domain doesn't

**Solutions:**
- Verify custom domain is added to CloudFront distribution aliases
- Check ACM certificate covers your domain
- Ensure DNS points to correct CloudFront domain
- Wait for CloudFront distribution to fully deploy (can take 15-20 minutes)

### EC2 Connection Issues

**Problem:** Can't connect to EC2 via domain

**Solutions:**
- Verify EC2 security group allows traffic from Cloudflare IPs (if using proxy)
- Check EC2 instance is running and healthy
- Verify DNS record points to correct IP
- Test direct IP access first

---

## Security Best Practices

1. **Always use HTTPS:**
   - Enable SSL/TLS in Cloudflare
   - Use ACM certificates for AWS resources
   - Set Cloudflare SSL mode to "Full" or "Full (strict)"

2. **Protect EC2 IPs:**
   - Use Cloudflare proxy to hide real IPs
   - Configure security groups to allow Cloudflare IPs only
   - Use WAF (Web Application Firewall) rules in Cloudflare

3. **Rate Limiting:**
   - Configure rate limiting in Cloudflare
   - Protect against DDoS attacks

4. **Access Control:**
   - Use Cloudflare Access for protected routes
   - Implement authentication at application level

---

## Quick Reference

### Cloudflare DNS Record Types

| Type  | Use Case                    | Example Target                    |
|-------|----------------------------|-----------------------------------|
| A     | Direct IP (EC2)            | `1.2.3.4`                         |
| CNAME | Domain alias (CloudFront)  | `d1234567890.cloudfront.net`      |
| CNAME | Load balancer              | `alb-123.us-east-1.elb...`        |

### SSL/TLS Modes in Cloudflare

| Mode           | Cloudflare → Origin | Use Case                    |
|----------------|---------------------|-----------------------------|
| Off            | HTTP                | Development only            |
| Flexible       | HTTP                | Origin doesn't support SSL  |
| Full           | HTTPS               | Origin has self-signed cert |
| Full (strict)  | HTTPS               | Origin has valid cert       |

### Common Cloudflare IP Ranges

If you need to whitelist Cloudflare IPs in AWS Security Groups:
- IPv4: https://www.cloudflare.com/ips-v4
- IPv6: https://www.cloudflare.com/ips-v6

---

## Next Steps

1. Set up your DNS records in Cloudflare
2. Test your domain access
3. Configure Cloudflare security settings
4. Set up monitoring and alerts
5. Consider Cloudflare Analytics for insights

For more information:
- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [AWS Certificate Manager Documentation](https://docs.aws.amazon.com/acm/)

