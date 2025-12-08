# Portfolio Website

A modern, responsive portfolio website built with React, featuring a clean design and smooth animations. The site is deployed as a static website on AWS S3 with CloudFront CDN for optimal performance and global distribution.

## Table of Contents

- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Infrastructure](#infrastructure)
- [Features](#features)

## System Architecture

### Overview

The portfolio website follows a modern static site architecture:

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────┐
│  CloudFront CDN │  ← Global edge locations for fast content delivery
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   S3 Bucket     │  ← Static website hosting
│  (Static Files) │
└─────────────────┘
```

### Components

1. **Frontend Application**
   - React-based Single Page Application (SPA)
   - Client-side routing with React Router
   - Responsive design for mobile and desktop

2. **Hosting Infrastructure**
   - **AWS S3**: Stores static website files (HTML, CSS, JS, images)
   - **CloudFront CDN**: Provides:
     - Global content delivery
     - HTTPS/SSL encryption
     - Automatic compression
     - Edge caching for improved performance
     - Custom error pages for SPA routing

3. **Deployment Options**
   - **Base Configuration**: AWS S3 + CloudFront (default CloudFront domain)
   - **Cloudflare Configuration**: AWS S3 + CloudFront with custom domain via Cloudflare DNS

### Data Flow

1. User requests the website via domain or CloudFront URL
2. CloudFront checks edge cache for content
3. If not cached, CloudFront fetches from S3 origin
4. Content is served to user with HTTPS
5. Subsequent requests benefit from edge caching

## Technology Stack

### Frontend
- **React 18.2** - UI framework
- **React Router 7.1** - Client-side routing
- **Framer Motion 10.17** - Animations
- **Material-UI 6.4** - UI components
- **React Icons 4.12** - Icon library
- **D3.js 7.8** - Data visualization
- **Three.js 0.160** - 3D graphics (if used)

### Infrastructure
- **AWS S3** - Static website hosting
- **AWS CloudFront** - Content delivery network
- **Terraform** - Infrastructure as Code
- **AWS Certificate Manager (ACM)** - SSL certificates (for custom domains)

### Development Tools
- **Create React App** - Build tooling
- **npm** - Package management
- **AWS CLI** - Deployment automation

## Project Structure

```
portfolio/
├── src/                    # React application source code
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── animation/          # Animation utilities
│   ├── assets/             # Images, PDFs, and other assets
│   ├── data/               # Data files (portfolio content)
│   ├── hooks/              # Custom React hooks
│   └── styles/             # Global styles
├── public/                 # Static public assets
├── build/                  # Production build output (generated)
├── infrastructure/         # Terraform infrastructure code
│   ├── main.tf            # Base AWS infrastructure
│   ├── main.cloudflare.tf # Cloudflare-specific configuration
│   ├── variables.tf       # Terraform variables
│   ├── outputs.tf         # Terraform outputs
│   └── README.md          # Infrastructure documentation
├── deploy.sh              # Deployment automation script
└── package.json           # Node.js dependencies and scripts
```

## Getting Started

### Prerequisites

1. **Node.js** (v16 or higher) and npm
   ```bash
   node --version
   npm --version
   ```

2. **AWS CLI** (for deployment)
   ```bash
   aws --version
   aws configure
   ```

3. **Terraform** (for infrastructure setup)
   ```bash
   terraform --version
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production to the `build` folder
- `npm run deploy` - Builds and deploys to GitHub Pages (if configured)

### Development Workflow

1. Make changes to source files in `src/`
2. The development server automatically reloads on file changes
3. Test changes locally before deploying
4. Build production bundle: `npm run build`
5. Test production build locally (optional):
   ```bash
   npx serve -s build
   ```

## Deployment

### Quick Deployment

Use the provided deployment script:

```bash
./deploy.sh [bucket-name] [cloudfront-distribution-id]
```

Example:
```bash
./deploy.sh jonnoyip.com E2W6JUZC2KYWCM
```

This script will:
1. Build the React application
2. Upload files to S3
3. Invalidate CloudFront cache

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync build/ s3://YOUR_BUCKET_NAME/ --delete
   ```

3. **Invalidate CloudFront cache** (optional but recommended)
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR_DISTRIBUTION_ID \
     --paths "/*"
   ```

### Deployment Options

The project supports two deployment configurations:

1. **Base Configuration** (AWS S3 + CloudFront)
   - See [infrastructure/README.md](./infrastructure/README.md)
   - Uses default CloudFront domain
   - No custom domain required

2. **Cloudflare Configuration** (Custom Domain)
   - See [infrastructure/README.cloudflare.md](./infrastructure/README.cloudflare.md)
   - Requires AWS Certificate Manager (ACM) certificate
   - Uses Cloudflare for DNS management
   - See [infrastructure/CLOUDFLARE_SETUP.md](./infrastructure/CLOUDFLARE_SETUP.md) for detailed setup

## Infrastructure

### Initial Setup

1. **Navigate to infrastructure directory**
   ```bash
   cd infrastructure
   ```

2. **Configure Terraform variables**
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your values
   ```

3. **Initialize and deploy**
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

4. **Note the outputs**
   - `cloudfront_url` - Primary website URL (HTTPS)
   - `bucket_name` - S3 bucket name for deployments

For detailed infrastructure documentation, see:
- [Infrastructure README](./infrastructure/README.md) - Base AWS setup
- [Cloudflare README](./infrastructure/README.cloudflare.md) - Custom domain setup
- [Cloudflare Setup Guide](./infrastructure/CLOUDFLARE_SETUP.md) - Detailed Cloudflare configuration

### Infrastructure Components

- **S3 Bucket**: Stores static website files
- **S3 Bucket Policy**: Allows public read access
- **S3 Website Configuration**: Enables static website hosting
- **CloudFront Distribution**: Provides CDN, HTTPS, and caching
- **CloudFront Error Pages**: Handles SPA routing (404/403 → index.html)

### Costs

Estimated monthly costs for a personal portfolio site:
- **S3 Storage**: ~$0.023 per GB stored
- **S3 Requests**: ~$0.005 per 1,000 requests
- **CloudFront**: ~$0.085 per GB data transfer (first 10TB)
- **Total**: Typically < $1/month for low to moderate traffic

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Single Page Application (SPA) with client-side routing
- ✅ Smooth animations and transitions
- ✅ Dark/light theme support (if implemented)
- ✅ Contact form integration
- ✅ Project showcase with filtering
- ✅ Skills visualization
- ✅ Professional resume/CV display
- ✅ SEO-friendly structure
- ✅ Fast loading with CDN delivery
- ✅ HTTPS/SSL encryption
- ✅ Global edge caching

## Additional Resources

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

## License

This project is private and proprietary.
