#! /usr/bin/env node --harmony
import { Command } from "commander";
import Component from "./controller/usecase/component";
const program = new Command();

program
  .name("cli-aem-react")
  .description(
    "CLI to facilitate the development of React components in Adobe AEM"
  )
  .version("1.1.1");

program
  .command("generate:component [name] [nameProject]")
  .description("Generate a new React component")
  .action(async (str, nameProject) => {
    await Component.generateComponent({
      name: str,
      nameProject: nameProject,
    });
  });

program.parse();
