
explain project 

MongoDB - To create MongoDB container with latest image from MongoDB Community Server on EC2 

# docker run --name mongodb \
    -p 27017:27017 \
    --network tier2 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=secretpassword \
    -d mongodb/mongodb-community-server:latest

To get into the above created container 
# docker exec -it mongodb mongosh -u admin -p secretpassword

Once we are inside the running container, we can use mongodb commands to show / create database and tables 
test > show dbs 
test > use local
test > show tables 

# docker build -t tier2-app:latest . 
# docker run -d --name nodejs -p 3000:3000 --network tier2 tier2-app:latest 
