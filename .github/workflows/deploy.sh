name: For Production environment deplouyment in Admin Panel

on:
  push:
    branches:
      - main

env:
  PROD_AZURE_IMAGE_NAME: project1
  PROD_AZURE_REGISTRY: nasehsample.azurecr.io

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the code
      - name: Checkout code
        uses: actions/checkout@v3

      # Step 2: Set up Docker Buildx
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      # Step 3: Login to Azure CLI
      - name: Login to Azure
        run: |
          az login --service-principal \
            --username ${{ secrets.AZURE_CLIENT_ID }} \
            --password ${{ secrets.AZURE_CLIENT_SECRET }} \
            --tenant ${{ secrets.AZURE_TENANT_ID }}

      # Step 4: Build and Push Docker Image
      - name: Build Docker image and push
        run: |
          # Log into Azure Container Registry
          az acr login --name nasehsample

          # Build the Docker image
          docker build -t ${{ env.PROD_AZURE_IMAGE_NAME }}:prod .

          # Tag and push the image to ACR
          docker tag ${{ env.PROD_AZURE_IMAGE_NAME }}:prod ${{ env.PROD_AZURE_REGISTRY }}/${{ env.PROD_AZURE_IMAGE_NAME }}:prod
          docker push ${{ env.PROD_AZURE_REGISTRY }}/${{ env.PROD_AZURE_IMAGE_NAME }}:prod