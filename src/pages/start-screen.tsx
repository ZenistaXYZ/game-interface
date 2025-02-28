import { Stack, Image } from "@chakra-ui/react";
import backgroundImage from '../assets/start-screen.png'
import logo from '../assets/zenista.png';
import WalletConnectButton from "../components/button/wallet-connect-button";

export default function StartScreen() {
    return (
        <Stack
            width={'100%'}
            height={'100%'}
            backgroundImage={`url(${backgroundImage})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundAttachment={'fixed'}
            backgroundRepeat={'no-repeat'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Image src={logo} alt="logo" width={'700px'} />

            <WalletConnectButton text="Connect  Wallet  and  start  playing" />
        </Stack>
    )
}
