# Initialized base image
FROM node:16.18.1-alpine

# Change directory to the app directory
WORKDIR /usr/app

# Copy application dependency manifests to the container image
# A wildcard is used to ensure copying both package.json and yark.lock (when available)
# Copying this first prevents to re-running yarn install on every code change
COPY . .

RUN yarn build

# Start the application commans
CMD ["yarn", "start"]
