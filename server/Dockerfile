# Use Node.js LTS base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy all backend code into container
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
