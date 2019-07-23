#!/bin/bash
docker stop resdescontainer
docker rm resdescontainer
docker pull chadparchila/rendesimage
docker run -p 3000:2000 -d --name resdescontainer chadparchila/rendesimage