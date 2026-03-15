#!/bin/bash
set -e

# Load FTP credentials from .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ] || [ -z "$FTP_DIR" ]; then
  echo "Error: Missing FTP credentials."
  echo "Copy .env.example to .env and fill in your values."
  exit 1
fi

# Build first
bash scripts/build.sh

echo "Deploying to $FTP_HOST$FTP_DIR ..."
lftp -c "
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST
cd $FTP_DIR
mirror -R dist/ .
bye"

echo "Deployed successfully."
