
In this project, we will create tier2 application with NodeJS & MongoDB. We will create docker image and container
with both Dockerfile and docker-compose.yml
In this project we will run two separate containers both for NodeJS and MongoDB., and both will communicate with 
each other via common network. docker-compose.yml creates network by default but in Dockerfile we need to create
and then specify network in CLI 


MongoDB - To create MongoDB container with latest image from MongoDB Community Server on EC2
Mongo container name must match mongo, inside following line mentioned inside index.js file
const mongoURI = 'mongodb://mongo:27017/mydb';

=== With password === 
# docker run --name mongo \
    -p 27017:27017 \
    --network tier2 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=secretpassword \
    -d mongodb/mongodb-community-server:latest

=== Without password ===
# docker run --name mongo \
    -p 27017:27017 \
    --network tier2 \
    -d mongodb/mongodb-community-server:latest

To get into the above created container 
# docker exec -it mongo mongosh -u admin -p secretpassword

Once we are inside the running container, we can use mongodb commands to show / create database and tables 
test > show dbs 
test > use local
test > show tables 

# docker build -t tier2-app:latest . 
# docker run -d --name nodejs -p 3000:3000 --network tier2 tier2-app:latest 


Now to configure docker-compose.yml., it will create its own new network. In docker-compose.yml file we will add all
the commands which we were using on CLI to build images and container 

we will build image on EC2 for our application with above command and will push it on docker hub.

# docker build -t tier2-app:latest . 
# docker tag tier2-app:latest syedhabbas/tier2:latest
# docker login -u syedhabbas
# docker push 


