#!/bin/bash
#run this file with bash buildDocker.sh
docker stop rendescontainer
docker rm rendescontainer
docker rmi chadparchila/rendesimage
docker build -t chadparchila/rendesimage .
# docker run -p 2000:2000 --name rendescontainer rendesimage
docker push chadparchila/rendesimage