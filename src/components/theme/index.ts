import { createSystem, defineConfig, defaultConfig, mergeConfigs } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                primary: {
                    value: `"Cherry Bomb One", cursive`,
                },
                secondary: {
                    value: `"Quicksand", sans-serif`,
                },
                tertiary: {
                    value: `"Poppins", sans-serif`,
                }
            },
        },
    },
});

const mergedConfig = mergeConfigs(defaultConfig, config);

const theme = createSystem(mergedConfig);

export default theme;