# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install exact deps (requires package-lock.json in repo)
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build Angular app
RUN npm run build --prod

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy Angular dist output
COPY --from=build /app/dist/mon-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
