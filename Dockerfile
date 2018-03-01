FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]


# FROM node:8

# WORKDIR /app
# ADD . /app

# ADD package.json /app/package.json

# ENV NODE_PATH=/node_modules
# ENV PATH=$PATH:/node_modules/.bin
# RUN npm install

# EXPOSE 3000

# # ENTRYPOINT ["/bin/bash", "/app/run.sh"]
# CMD ["npm", "start"]




# # base image
# FROM node:9.4

# # set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# ADD package.json /usr/src/app/package.json

# # start app
# CMD ["npm", "start"]