
# Use the official Node.js image as a base image
FROM node:16.13.1-alpine

# Set the working directory
WORKDIR /app

# Set volume mounts to Linux paths
VOLUME /app
# Copy the package.json and package-lock.json files
COPY package*.json .

# Install the dependencies
RUN yarn

# Copy the app files
COPY . .

# Build the app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["yarn", "start"]