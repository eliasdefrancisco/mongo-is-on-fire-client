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
exports.waitForDebuggerAttach = exports.sleep = void 0;
const environments_1 = __importDefault(require("../enums/environments"));
/**
 * Wait a number of milliseconds to resolve a promise
 *
 * @param ms Number of milliseconds to wait for
 * @returns Resolved promise when count down of milliseconds ends
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
/**
 * Wait two seconds if project is in developing state, to give time for debbuger to attach the event
 */
function waitForDebuggerAttach(config) {
    return __awaiter(this, void 0, void 0, function* () {
        if (config.environment === environments_1.default.develop) {
            yield sleep(2000);
        }
    });
}
exports.waitForDebuggerAttach = waitForDebuggerAttach;
