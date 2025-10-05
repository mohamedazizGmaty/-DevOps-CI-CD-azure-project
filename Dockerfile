# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first (caches install)
COPY package*.json ./

# Faster install with lockfile
RUN npm ci --legacy-peer-deps

# Copy source code after deps are cached
COPY . .

RUN npm run build --prod

# Stage 2: Serve app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/mon-angular-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
