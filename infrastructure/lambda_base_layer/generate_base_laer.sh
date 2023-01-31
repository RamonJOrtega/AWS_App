# Generates a base layer of dependencies for lambda functions

# remove the container if (it exists).
docker rm layer-container
# build a new base layer
docker build -t base-layer
#rename the base layer as layer-container
docker run --name layer-container base-layer

#copy the generated zip artifact so the CDK can use it
docker cp layer-container:layer.zip . && echo "Created layer.zip with updated base layer."