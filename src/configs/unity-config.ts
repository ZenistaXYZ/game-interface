import { UnityLoaderConfig } from "react-unity-renderer";

export const UnityConfig: UnityLoaderConfig = {
    loaderUrl: 'unity/Build/build.loader.js',
    frameworkUrl: 'unity/Build/build.framework.js',
    codeUrl: 'unity/Build/build.wasm',
    dataUrl: 'unity/Build/build.data',
    streamingAssetsUrl: 'unity/StreamingAssets',
    productName: 'Zenista',
    productVersion: '0',
};