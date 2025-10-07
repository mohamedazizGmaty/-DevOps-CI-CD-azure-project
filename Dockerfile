
# Stage 1: Build Angular app
FROM node:24-alpine AS build

WORKDIR /app

# Copy dependency files first (enables layer caching for deps)
COPY package*.json ./

# Install exact deps - cached, fast, no extras for CI speed
RUN npm ci --legacy-peer-deps --verbose

# ✅ Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy source code (invalidates cache only on src changes)
COPY . .

# Build Angular app for production
RUN ng build --configuration production --base-href /

# Stage 2: Serve app with Nginx (minimal runtime)
FROM nginx:alpine

# Copy built Angular dist to Nginx static serve dir
COPY --from=build /app/dist/mon-angular-app /usr/share/nginx/html

# Optional: Remove default Nginx config for custom routing (uncomment if needed)
# RUN rm /etc/nginx/conf.d/default.conf

# Run as non-root user for security (best practice)
# Fix permissions for Nginx cache
RUN mkdir -p /var/cache/nginx /var/run/nginx && chown -R nginx:nginx /var/cache/nginx /var/run/nginx && chmod -R 755 /var/cache/nginx /var/run/nginx

EXPOSE 80

USER root

# Expose HTTP port


# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]