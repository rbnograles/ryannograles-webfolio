# Initialized base image
FROM node:alpine

# Change directory to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

RUN npm --verbose install

RUN npm run build

CMD ["npm", "start"]
