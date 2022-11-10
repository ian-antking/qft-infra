terraform {
  required_version = ">= 0.12"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.55"
    }
  }
  backend "s3" {
    bucket = "qft-tf-state"
    key    = "qft-ft-state"
    region = "eu-west-2"
  }
}

provider "aws" {
  profile = "default"
  region  = "eu-west-2"
  default_tags {
    tags = {
      app = "qft"
    }
  }
}