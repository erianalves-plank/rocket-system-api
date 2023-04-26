terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "example" {
  name      = "terraform-test-project"
  git_repository = {
    type = "github"
    repo = "erianalves-plank/rocket-system-api"
  }
}