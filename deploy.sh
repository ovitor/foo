#!/bin/sh

docker build -t $DOCKER_USERNAME/foo:$VERSION-$SHA
docker push $DOCKER_USERNAME/foo:$VERSION-$SHA
