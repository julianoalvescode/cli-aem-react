import * as fs from "fs-extra";

class Component {
  async generateComponent({
    name,
    nameProject,
  }: {
    name: string;
    nameProject: string;
  }): Promise<void> {
    try {
      await fs.copy(
        "./src/files/example-react",
        `ui.apps/main/content/jcr_root/apps/${nameProject}/components/${name}`
      );

      console.log(`Congratulations component ${name} created! 🎉`);
    } catch (e) {
      console.log(`Error: ${e} 💩`);
    }
  }
}

export default new Component();
