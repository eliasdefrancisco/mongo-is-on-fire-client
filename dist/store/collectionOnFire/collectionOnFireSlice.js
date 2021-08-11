"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = exports.updateField = exports.truncateArrayField = exports.removeField = exports.replaceDocument = exports.insertDocument = exports.deleteDocument = exports.collectionComplete = exports.collectionOnFireSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const lodash_set_1 = __importDefault(require("lodash.set"));
const sockets_1 = require("../../enums/sockets");
const initialState = {
    documents: []
};
exports.collectionOnFireSlice = toolkit_1.createSlice({
    name: 'collectionOnFire',
    initialState,
    reducers: {
        [sockets_1.socketEvents.collectionComplete]: (state, action) => {
            state.documents = action.payload;
        },
        [sockets_1.socketEvents.deleteDocument]: (state, action) => {
            state.documents.splice(action.payload.deletedIndex, 1);
        },
        [sockets_1.socketEvents.insertDocument]: (state, action) => {
            state.documents.push(action.payload);
        },
        [sockets_1.socketEvents.replaceDocument]: (state, action) => {
            state.documents[action.payload.replacedIndex] = action.payload.fullDocument;
        },
        [sockets_1.socketEvents.removeField]: (state, action) => {
            delete state.documents[action.payload.updatedIndex][action.payload.removedField];
        },
        [sockets_1.socketEvents.truncateArrayField]: (state, action) => {
            state.documents[action.payload.updatedIndex][action.payload.truncatedArray.field].length = action.payload.truncatedArray.newSize;
        },
        [sockets_1.socketEvents.updateField]: (state, action) => {
            lodash_set_1.default(state.documents[action.payload.updatedIndex], action.payload.updatedKey, action.payload.updatedValue);
        },
        [sockets_1.socketEvents.welcome]: () => { },
    }
});
_a = exports.collectionOnFireSlice.actions, exports.collectionComplete = _a.collectionComplete, exports.deleteDocument = _a.deleteDocument, exports.insertDocument = _a.insertDocument, exports.replaceDocument = _a.replaceDocument, exports.removeField = _a.removeField, exports.truncateArrayField = _a.truncateArrayField, exports.updateField = _a.updateField, exports.welcome = _a.welcome;
exports.default = exports.collectionOnFireSlice.reducer;
