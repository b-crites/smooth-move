#using Node.js as base image
FROM node:20-alpine

#Set the working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install --production

#Copy application files
COPY . .

#build the app
RUN npm run build

#Expose port
EXPOSE 3005

#Start the app
CMD ["npm","run", "start"]
