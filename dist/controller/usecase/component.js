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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
class Component {
    generateComponent({ name, nameProject, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.copy("./src/files/example-react", `ui.apps/main/content/jcr_root/apps/${nameProject}/components/${name}`);
                console.log(`Congratulations component ${name} created! 🎉`);
            }
            catch (e) {
                console.log(`Error: ${e} 💩`);
            }
        });
    }
}
exports.default = new Component();
