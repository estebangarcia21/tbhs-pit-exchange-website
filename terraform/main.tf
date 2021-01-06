terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

locals {
    aws_tags {
        Project = "tbhs-market"
        Owner = "Im-Stevemmmmm"
    }
}

provider "aws" {
  region = "us-west-2"
}
