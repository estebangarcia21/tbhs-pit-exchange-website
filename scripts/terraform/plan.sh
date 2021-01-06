source vars.sh

cd $WORKING_DIRECTORY

terraform plan \
    -var-file="$SECRETS_FILE" \
    --out=tfplan
