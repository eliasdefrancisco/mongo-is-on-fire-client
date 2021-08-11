"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const collectionOnFireSlice_1 = __importDefault(require("./collectionOnFire/collectionOnFireSlice"));
exports.store = toolkit_1.configureStore({
    reducer: {
        collectionOnFire: collectionOnFireSlice_1.default,
    },
});
