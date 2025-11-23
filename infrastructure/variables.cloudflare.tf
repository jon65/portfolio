variable "aws_region" {
  description = "AWS region for resources. Use us-east-1 for CloudFront when using ACM certificates."
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket (must be globally unique)"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g., prod, staging)"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Custom domain name managed by Cloudflare (e.g., example.com)"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN of ACM certificate for custom domain. Must be in us-east-1 for CloudFront. Request this in AWS Certificate Manager first."
  type        = string
}

