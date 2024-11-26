# project is running on this node version
FROM node:16

# Telling that in docker which is the main folder in which your project present
WORKDIR /app

# copy code to the docker container, . means is app k ander copy krna
COPY ./package.json .

# Run installation command to install all packages
RUN npm install

# copy all remaining files to docker
COPY . .

# Expose ki command sy ham port btayengy k hamara project kis port pr chal raha
EXPOSE 3000

# For running the project
CMD ['node','app.js']


# COMMANDS TO RUN AND BUILD IN CMD
# docker build path