# Use official Node.js LTS image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]