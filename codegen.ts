import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "./schema.graphql",
    documents: ["./src/**/*.ts"],
    generates: {
        "src/generated/": {
            preset: "client",
            plugins: [],
        },
    },
};

export default config;
