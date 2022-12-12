## Node.js REST API in Typescript

System design will follow the three layered architecture pattern, similar to MVC pattern, where the couple controller-service manage all Http requests methods related to a single entity. 


### Build up MongoDB container
sudo docker run --name mongodb -d -p 27017:27017 mongo:latest

Once the container is running, you can run the app in development mode using nodemon by:

```
npm run dev
```

