# Basic-CRUD
A simple CRUD app with Express and MongoDB that adds, deletes, update quotes. 


## How It's Made:

**Tech used:** JavaScript, Node, Express, MongoDB. 

## Backend:

Instead of creating a server with Node's native method, here I used Express. Express is a node framework for building web application. It simplifies the process of creating a server. 

MongoDB is a databse. All the quotes data stored in one place. 

CRUD is an acronym for Create, Read, Update and Delete. It is a set of operations we tell servers to execute (POST, GET, PUT and DELETE requests respectively). 

This is what each operation does:

    Create (POST) - Make something
    Read (GET)- Get something
    Update (PUT) - Change something
    Delete (DELETE)- Remove something
    
![image](https://user-images.githubusercontent.com/60997220/193704800-7398f609-40d8-4bf4-b9b5-3e070248bad6.png)

## Front-end:
I didn't use any front-end JavaScript library to generate the views. Instead, plain old EJS was used here. I simply just made a <div> with <ol> inside. 

## Optimizations
    React for the front-end to render views.  
    Asyc-await to handle promise
    Better error handling
    Serach feature
    switch to Mongoose
    
## Lessons Learned
    bodyparser is deprecated
    Difference between MongoDB and Mongooseb:
      mongodb is a native driver in Node.js to interact with MongoDB
      Mongoose is an object modeling tool build ontop of mongodb driver that allows programmers to model their data. (schema )
    


