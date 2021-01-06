data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_ami" "api_server" {

  
  tags = locals.aws_tags
}

resource "aws_ami" "web_server" {
  
  tags = locals.aws_tags
}
