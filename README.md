# ResumeMaker
Simple resume maker created with MongoDB, Express, React,Node.js(aka. MERN).

# Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [DB configuration](#db-configuration)
* [Launch](#launch)
* [Features](#features)

# Introduction
With the jaw-dropping but not surprising fact that the average time a recruiter puts their eyes on one resume is 7 seconds, picking experiences/projects to put into a resume, with page limit (usually one), is critical and vary from job to job. For example, my AI project experience won't fit in a full stack engineer job. I used to spend so much unecessary time to refactor my resume by copying, pasting and time-consuming format adjusting etc.
With this resume maker, I can build new resume within 1 minute (with existing data of course). That's handy! And it's highly scalable that you can add new section(s) to your resume structure without changing my code.

# Technologies
* React 17.0.2
* Node 14.*
* Mongoose 6.0.7
* Express 4.17.1

Other dependencies please refer package.json

# DB configuration

You will need to create an ".env" file in the project root directory to contain the credentials for connecting to a MongoDB (in my case MongoDB Atlas), something like this:
```
DB = mongodb+srv://<name>:<password>@cluster0.rs9aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

# Launch
To run this project, install it locally using npm:
```
$ cd ResumeMaker/client
$ npm install
$ cd ..
$ npm install
$ npm run dev(using nodemon)
or $ npm run dev2
```

# Features
* Create or update basic info
* Add new education or choose from existing education list to incorporate in the final resume
* Add new experience or choose from existing experience list to incorporate in the final resume
* Add new skill or choose from existing skill list to incorporate in the final resume
* Add new project or choose from existing project list to incorporate in the final resume
* Create editable resume with above choice(s).
### To Do:
* Improve page style
