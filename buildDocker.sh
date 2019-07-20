#!/bin/bash
#run this file with bash buildDocker.sh
docker rmi -f rental-description-v0
docker build -t rental-description-v0 .
docker stop rental-descriptionv2
docker rm rental-descriptionv2
docker run -p 2000:2000 --name rental-descriptionv2 rental-description-v0

