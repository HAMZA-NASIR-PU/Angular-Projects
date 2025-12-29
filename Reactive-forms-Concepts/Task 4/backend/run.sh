#!/bin/bash

# Navigate to the backend directory
cd /home/bitnami/backend

# Remove all existing files inside the backend directory
rm -rf /home/bitnami/backend/*

# Reset any local changes and ensure we are on a clean state
git checkout -f HEAD

# Switch to the DEV branch
git checkout DEV

# Pull the latest code from all remote branches
git pull --all

# Stop and remove the existing backend container (if running)
sudo docker stop backend || true  # Ignore error if the container is not running
sudo docker rm backend || true    # Ignore error if the container doesn't exist

# Clean up old Docker images to free up space
sudo docker image prune --all -f

# Ensure the Dockerfile has execution permissions
sudo chmod +x /home/bitnami/backend/Dockerfile

# Build a new Docker image for the backend service
sudo docker build --no-cache -f /home/bitnami/backend/Dockerfile . -t backend:latest

# Run a new backend container with appropriate environment variables and networking
sudo docker run -d \
  --name backend \
  -p 8080:8080 \
  --network poc-school-network \
  -e jdbcCompliantTruncation=false \
  -e createDatabaseIfNotExist=true \
  -e DATASOURCE_USERNAME=root \
  -e DATASOURCE_PASSWORD=password123 \
  -e DATASOURCE_URL="jdbc:mysql://dbservice:3306/poc-school?sessionVariables=sql_mode='NO_ENGINE_SUBSTITUTION'&jdbcCompliantTruncation=false&createDatabaseIfNotExist=true" \
  backend:latest
