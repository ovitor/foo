#!/bin/sh

# apply image with tag $VERSION-$SHA to k8s cluster
docker push $DOCKER_USERNAME/foo:latest
