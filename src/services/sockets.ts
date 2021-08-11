import { Store } from '@reduxjs/toolkit'
import { io, Socket} from 'socket.io-client'
import { socketEvents } from '../enums/sockets'
import * as collectionOnFireSlice from '../store/collectionOnFire/collectionOnFireSlice'
import ConfigType from '../types/config'


export default class SocketService {
    private socket: Socket

    constructor(private store: Store) {}
    
    /**
     * Start server socket connection listening
     */
    public startSocketListen(config: ConfigType) {
        this.socket = io(`${config.socketUri}:${config.port}`)
        this.socket.onAny((eventName: socketEvents, data) => {
            // console.log('!!! Dispatching eventName: ', eventName)
            // console.log('!!! Dispatching data: ', data)
            this.store.dispatch(collectionOnFireSlice[eventName](data))
        })
    }

        /**
     * stop server socket connection listening
     */
    public stopSocketListen() {
        this.socket.disconnect()
    }
}