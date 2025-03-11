import { Box } from '@chakra-ui/react';
import heroBg from '../assets/heroBg.png';
import Hero from '../components/sections/hero';
import Features from '@/components/sections/features';


export default function StartScreen() {
    return (
        <>
            <Box
                bgImage={`url(${heroBg})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                w="100%"
            >
                <Hero />
            </Box>
            <Features />
        </>
    )
}
