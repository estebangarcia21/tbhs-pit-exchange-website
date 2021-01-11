resource "aws_s3_bucket" "images" {
  bucket = "images"
  acl    = "private"

  tags = locals.aws_tags
}
