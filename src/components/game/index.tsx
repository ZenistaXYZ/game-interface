import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from 'react-unity-webgl';

interface GameProps {
    onGameLoaded?: () => void;
    onLoadingProgression?: (progression: number) => void;
    onGameUnloaded?: () => void;
    onMessage?: (event: string, message: string) => void;
    onUnityReady?: (sendMessage: (objectName: string, methodName: string, parameter?: any) => void) => void;
}
function Game(props: GameProps) {
    const { isConnected } = useAccount();
    const navigate = useNavigate();

    const { unityProvider, sendMessage, unload, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: '/unity/Build/unity.loader.js',
        dataUrl: '/unity/Build/unity.data.br',
        frameworkUrl: '/unity/Build/unity.framework.js.br',
        codeUrl: '/unity/Build/unity.wasm.br',
        companyName: 'SnarkLabs',
        productName: 'Zenista',
        productVersion: '0'
    });

    useEffect(() => {
        if (isConnected === false) {
            navigate('/');
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        return () => {
            props.onGameUnloaded && props.onGameUnloaded();
            unload();
        };
    }, [unload]);

    useEffect(() => {
        console.log("Unity component mounted");

        const handleUnityEvent = (e: Event) => {
            const cEvt = e as CustomEvent<{ event: string, data: any }>;
            props.onMessage?.(cEvt.detail.event, cEvt.detail.data);
        };

        window.addEventListener('UnityEvent', handleUnityEvent);

        return () => {
            window.removeEventListener('UnityEvent', handleUnityEvent);
        };
    }, [props.onMessage]);

    useEffect(() => {
        if (isLoaded) {
            props.onGameLoaded && props.onGameLoaded();
            props.onUnityReady && props.onUnityReady(sendMessage);
        }

        props.onLoadingProgression && props.onLoadingProgression(loadingProgression);
    }, [isLoaded]);

    return (
        <Unity
            unityProvider={unityProvider}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}

export default Game;