import { store } from './store/store'
import { waitForDebuggerAttach } from './helpers/common'
import SocketService from "./services/sockets";
import environments from './enums/environments'
import ConfigType from './types/config'

let socketService: SocketService

export default class MongoIsOnFire {

    /**
     * Connect to a MongoIsOnFire-Server for reactivity
     * @param socketUri String url for MongoIsOnFire-Server, ie: 'ws://localhost'
     * @param port Number port for MongoIsOnFire-Server, ie: 3069
     * @param environment (Optional) Only for developing purposes, vals: 'develop', 'production'
     * @returns Observable which you can subscribe to watch reactive changes in MongoDB
     */
    public async connect(socketUri: string, port: number, environment: environments = environments.production) {
        const config: ConfigType = { socketUri, port, environment }
        await waitForDebuggerAttach(config)
        socketService = new SocketService(store)
        socketService.startSocketListen()
        return store
    }

    /**
     * Disconnect socket gracefully
     */
    public disconnect() {
        socketService.stopSocketListen()
    }

}


/**
 * Only for developing purposes
 */
// async function initDev(){
//     const mongoIsOnFire = new MongoIsOnFire()
//     const store = await mongoIsOnFire.connect('ws://localhost', 3069, environments.develop)
//     store.subscribe(() => { 
//         console.log('!!! store.getState(): ', store.getState()) 
//     })
// }
// initDev()