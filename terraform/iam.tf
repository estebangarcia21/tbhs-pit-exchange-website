resource "aws_iam_user" "tbhs_market" {
  name = "tbhs_market"
  path = "/"

  tags = locals.aws_tags
}

resource "aws_iam_access_key" "tbhs_market" {
  user = aws_iam_user.root_user.name
}

resource "aws_iam_user_policy" "tbhs_market" {
  name = "allowed-policies"
  user = aws_iam_user.tbhs_market.name

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1609917602068",
      "Action": [
        "ecr:CreateRepository",
        "ecr:DeleteRepository",
        "ecr:PutImage"
      ],
      "Effect": "Allow",
    }
  ]
}
EOF
}
