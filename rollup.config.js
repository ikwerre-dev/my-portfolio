import { terser } from "rollup-plugin-terser";

export default {
  plugins: [
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
