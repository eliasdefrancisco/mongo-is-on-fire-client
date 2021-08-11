"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store/store");
const common_1 = require("./helpers/common");
const sockets_1 = __importDefault(require("./services/sockets"));
const environments_1 = __importDefault(require("./enums/environments"));
let socketService;
class MongoIsOnFire {
    /**
     * Connect to a MongoIsOnFire-Server for reactivity
     * @param socketUri String url for MongoIsOnFire-Server, ie: 'ws://localhost'
     * @param port Number port for MongoIsOnFire-Server, ie: 3069
     * @param environment (Optional) Only for developing purposes, vals: 'develop', 'production'
     * @returns Observable which you can subscribe to watch reactive changes in MongoDB
     */
    connect(socketUri, port, environment = environments_1.default.production) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = { socketUri, port, environment };
            yield common_1.waitForDebuggerAttach(config);
            socketService = new sockets_1.default(store_1.store);
            socketService.startSocketListen(config);
            return store_1.store;
        });
    }
    /**
     * Disconnect socket gracefully
     */
    disconnect() {
        socketService.stopSocketListen();
    }
}
exports.default = MongoIsOnFire;
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
