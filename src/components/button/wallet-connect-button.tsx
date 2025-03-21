import { Button } from "@chakra-ui/react";
import { useAppKit } from "@reown/appkit/react";

export default function WalletConnectButton({ text }: { text: string }) {
    const { open } = useAppKit();

    return (
        <Button
            padding={{
                base: '25px 25px 30px',
                md: '25px 35px 30px',
                lg: '25px 35px 30px',
                xl: '25px 35px 30px'
            }}
            fontFamily={'Cherry Bomb One, serif'}
            className={'text-shadow'}
            borderRadius={'50px'}
            color={'white'}
            background={'#FDC96D'}
            fontSize={{
                base: '18px',
                md: '25px',
                lg: '25px',
                xl: '25px'
            }}
            border={'4px solid white'}
            animation={'wobble 1s ease-in-out infinite'}
            _active={{
                background: '#C19953'
            }}
            _hover={{
                background: '#DDB061'
            }}
            onClick={() => open()}
        >
            {text}
        </Button >
    )
}