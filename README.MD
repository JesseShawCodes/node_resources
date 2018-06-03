# NODE Resources

## Global Objects
![global_methods](/public/global.png "Title is optional")


//Simple NodeJs Tests
var hello ="Hello world from Node JS"
var justNode = hello.slice(17)
console.log(`Rock on World from ${justNode}`);
console.log(__dirname);
console.log(__filename);

var path = require('path')
console.log(`Rock on World from ${path.basename(__filename)}`);

## Node.JS Modules

https://nodejs.org/api/modules.html

## Node.Js Core Modules

https://nodejs.org/api/modules.html#modules_core_modules

## Node.Js Event Emitter

https://nodejs.org/api/events.html#events_class_eventemitter

## Node.Js Child Process

https://nodejs.org/api/child_process.html

## Node.Js File System
https://nodejs.org/api/fs.html
![res_methods](/public/readfiles.png "Title is optional")



## Node.js Process
https://nodejs.org/api/process.html#process_process

## Multi-Threaded vs. Single-Threaded

Multi-threaded: Async
Single-threaded: Sync

Node.js is Multi-threaded

https://dzone.com/articles/multi-threaded-application-vs

## Response Methods

![res_methods](/public/res_methods.png "Title is optional")

## Chaining

![chaining](/public/chaining.png "Title is optional")

## Types of Dependencies

*Dev Dependencies are used for developer workflow. 

## Middleware

Middleware is functions that are happening within a request before the result is sent back

![Middleware](/public/middleware.png "Title is optional")

https://expressjs.com/en/guide/using-middleware.html

### Router Level Middleware

https://expressjs.com/en/guide/using-middleware.html#middleware.application

## Express Behind Proxies

https://expressjs.com/en/guide/behind-proxies

![Proxies](/public/proxies.png "Title is optional")

## Security

*Always keep up to date and secured dependencies
*Use Transport Layor Security (TLS) for sensitive data
*Use Helmet's collection of security middleware
*Use cookies securely
*Take a look at the Node security checklist and stay informed of known issues

## Mock Data Resources 

https://mockaroo.com/

## Version

https://semver.org/

## SPDX License List

https://spdx.org/licenses/

## Various Excercises

### Global Exercise

![Global](/public/heartbeat.png "Global Exercise")


