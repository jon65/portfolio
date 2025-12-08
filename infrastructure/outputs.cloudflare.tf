output "bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.website.id
}

output "bucket_website_endpoint" {
  description = "Website endpoint URL"
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_website_domain" {
  description = "Website domain"
  value       = aws_s3_bucket_website_configuration.website.website_domain
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name (use this for Cloudflare CNAME)"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_url" {
  description = "CloudFront distribution URL (HTTPS)"
  value       = "https://${aws_cloudfront_distribution.website.domain_name}"
}

output "s3_website_url" {
  description = "S3 website URL (HTTP only)"
  value       = "http://${aws_s3_bucket_website_configuration.website.website_endpoint}"
}

output "custom_domain_url" {
  description = "Custom domain URL (configured for Cloudflare)"
  value       = "https://${var.domain_name}"
}

output "cloudflare_dns_target" {
  description = "DNS target for Cloudflare CNAME record"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudflare_dns_instructions" {
  description = "Instructions for Cloudflare DNS configuration"
  value = <<-EOT
    Configure DNS in Cloudflare:
    
    1. Go to Cloudflare Dashboard → DNS → Records
    2. Add a CNAME record:
       - Type: CNAME
       - Name: @ (for root domain) or www (for www subdomain)
       - Target: ${aws_cloudfront_distribution.website.domain_name}
       - Proxy status: DNS only (gray cloud) or Proxied (orange cloud)
       - TTL: Auto
    
    3. If using Cloudflare proxy (orange cloud):
       - Go to SSL/TLS → Overview
       - Set to "Full" or "Full (strict)" mode
    
    See CLOUDFLARE_SETUP.md for detailed instructions.
  EOT
}

