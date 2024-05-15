import { presetUno } from "unocss";

/** @type {import("unocss").UserConfig<import("unocss/preset-uno").Theme>} */
const conf = {
    presets: [
        presetUno(),
    ],
    shortcuts: {
      "input": "w-32 h-10 bg-black hover:bg-red transition-colors,opacity"
    },
};

export default conf;

