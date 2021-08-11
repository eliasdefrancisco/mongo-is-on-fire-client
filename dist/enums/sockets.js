"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketEvents = void 0;
var socketEvents;
(function (socketEvents) {
    socketEvents["welcome"] = "welcome";
    socketEvents["insertDocument"] = "insertDocument";
    socketEvents["deleteDocument"] = "deleteDocument";
    socketEvents["replaceDocument"] = "replaceDocument";
    socketEvents["updateField"] = "updateField";
    socketEvents["removeField"] = "removeField";
    socketEvents["truncateArrayField"] = "truncateArrayField";
    socketEvents["collectionComplete"] = "collectionComplete";
})(socketEvents = exports.socketEvents || (exports.socketEvents = {}));
