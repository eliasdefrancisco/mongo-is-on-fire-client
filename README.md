# mongo-is-on-fire-client

Client implementation to connect to mongo-is-on-fire-server

This project mantains a Redux data store up to date in real-time with a collection in a MongoDB server, using the MongoIsOnFire agnostic protocol over Socket.io connection

## Import
```
npm i mongo-is-on-fire-client
```

## TypeScript basic usage example
```
import MongoIsOnFire from 'mongo-is-on-fire-client'
async function init() {
    const mongoIsOnFire = new MongoIsOnFire()
    const store = await mongoIsOnFire.connect('ws://localhost', 3069)
    store.subscribe(() => { 
        console.log('!!! store.getState(): ', store.getState()) 
    })
}
init()
```

## JavaScript basic usage example (ES6)
```
function init() {
    const MongoIsOnFire = require('mongo-is-on-fire-client').default
    const mongoIsOnFire = new MongoIsOnFire()
    mongoIsOnFire.connect('ws://localhost', 3069).then(store => {
        store.subscribe(() => { 
            console.log('!!! store.getState(): ', store.getState()) 
        })
    })  
}
init()
```


## Requirements
You must to have installed and running mongo-is-on-fire-server in your server befor connecting client... obviously