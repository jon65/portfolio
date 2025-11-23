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
  description = "CloudFront distribution domain name"
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

