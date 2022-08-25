FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /project-management
# Cache and Install dependencies
COPY package.json .

RUN yarn install
# Copy all files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
