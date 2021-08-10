import { store } from './store/store'
import { waitForDebuggerAttach } from './helpers/common'
import SocketService from "./services/sockets";

let socketService: SocketService

async function init() {
    await waitForDebuggerAttach()
    store.subscribe(() => { 
        console.log('!!! store.getState(): ', store.getState()) 
    })
    socketService = new SocketService(store)
    socketService.startSocketListen()
}


init()