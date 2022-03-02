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
const cli_color_1 = require("cli-color");
const fs = require("fs-extra");
const path = require("path");
class Component {
    generateComponent({ name, nameProject, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.copy(path.resolve(__dirname, "../../files/example-react"), `ui.apps/src/main/content/jcr_root/apps/${nameProject}/components/${name}`, (err) => {
                    if (err) {
                        console.log(cli_color_1.black.bgRedBright(`Error: ${err.message} 💩`));
                    }
                    console.log(cli_color_1.black.bgGreen(`Component ${name} created 🎉!`));
                });
            }
            catch (e) {
                console.log(`Error: ${e} 💩`);
            }
        });
    }
}
exports.default = new Component();
