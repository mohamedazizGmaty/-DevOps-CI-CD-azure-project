# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app
<<<<<<< HEAD

# Copy only package files first (caches install)
COPY package*.json ./

# Faster install with lockfile
RUN npm ci --legacy-peer-deps

# Copy source code after deps are cached
COPY . .

=======
COPY package*.json ./
RUN npm install
COPY . .
>>>>>>> 83ff273c (3.2.0)
RUN npm run build --prod

# Stage 2: Serve app with Nginx
FROM nginx:alpine
<<<<<<< HEAD
=======

>>>>>>> 83ff273c (3.2.0)
COPY --from=build /app/dist/mon-angular-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
