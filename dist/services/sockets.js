"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const collectionOnFireSlice = __importStar(require("../store/collectionOnFire/collectionOnFireSlice"));
class SocketService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Start server socket connection listening
     */
    startSocketListen(config) {
        this.socket = socket_io_client_1.io(`${config.socketUri}:${config.port}`);
        this.socket.onAny((eventName, data) => {
            // console.log('!!! Dispatching eventName: ', eventName)
            // console.log('!!! Dispatching data: ', data)
            this.store.dispatch(collectionOnFireSlice[eventName](data));
        });
    }
    /**
 * stop server socket connection listening
 */
    stopSocketListen() {
        this.socket.disconnect();
    }
}
exports.default = SocketService;
