resource "aws_s3_bucket" "db_backups" {
  bucket = "db_backups"
  acl = "private"

  tags = locals.aws_tags
}
