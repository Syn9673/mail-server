"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_mailin_1 = __importDefault(require("node-mailin"));
node_mailin_1.default.start({ port: 25 });
node_mailin_1.default.on('message', console.log);
