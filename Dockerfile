
# Stage 1: Build Angular app
FROM node:24-alpine AS build

WORKDIR /app

# Copy dependency files first (enables layer caching for deps)
COPY package*.json ./

# Install exact deps - cached, fast, no extras for CI speed
RUN --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps --no-audit --no-fund

# Copy source code (invalidates cache only on src changes)
COPY . .

# Build Angular app for production
RUN npm run build --prod

# Stage 2: Serve app with Nginx (minimal runtime)
FROM nginx:alpine

# Copy built Angular dist to Nginx static serve dir
COPY --from=build /app/dist/mon-angular-app /usr/share/nginx/html

# Optional: Remove default Nginx config for custom routing (uncomment if needed)
# RUN rm /etc/nginx/conf.d/default.conf

# Run as non-root user for security (best practice)
USER nginx

# Expose HTTP port
EXPOSE 80


# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]