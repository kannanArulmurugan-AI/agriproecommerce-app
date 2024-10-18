# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the Docker container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies inside the Docker container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use an Nginx image to serve the built files
FROM nginx:alpine

# Copy the build folder to Nginx’s default html folder
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to make the app accessible
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
