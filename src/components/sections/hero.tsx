import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Image, Text, Button, Stack } from '@chakra-ui/react';
import headerBg from '../../assets/header-bg.png';
import ZenistaLogo from '../../assets/zenista-logo.png';
import frameOne from '../../assets/frame-one.png';
import frameTwo from '../../assets/frame-two.png';
import vintageFrame from '../../assets/vintage-frame.png';
import btnBg from '../../assets/btn-bg.png';
import giftAni from '../../assets/gift-ani.png';
import magAni from '../../assets/mag-ani.png';
import cashAni from '../../assets/cash-ani.png';
import btnLeftAni from '../../assets/btn-left-ani.png';
import btnRightAni from '../../assets/btn-right-ani.png';
import btnBgHov from '../../assets/btn-bg-hov.png';
import cloudyBg from '../../assets/cloudy-bg.png';
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const { open } = useAppKit();
    const { address, isConnected, status } = useAccount();

    const [isConnecting, setIsConnecting] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showNewText, setShowNewText] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (status === "connected") {
            if (address && isConnecting === true) {
                navigate('/game');
                setIsConnecting(false);
            }
        }
    }, [address, status]);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const { scrollTop, scrollHeight, clientHeight } = container;
            const scrollPosition = scrollTop + clientHeight;
            const threshold = scrollHeight * 0.97; // Last 10% of scroll

            setShowNewText(scrollPosition >= threshold);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    function playNow() {
        if (isConnected && address) {
            navigate('/game');
        }
        else {
            open();
            setIsConnecting(true);
        }
    }

    return (
        <Box
            h="100vh"
            id='hero'
        >
            {/* Header */}
            <Box
                w="full"
                display="flex"
                justifyContent="center"
                zIndex={50}
                my={6}
                pointerEvents="none"
            >
                <Stack
                    mx={{ base: 4, md: 12 }}
                    w="full"
                    direction={'row'}
                    align={'center'}
                    justify={'space-between'}
                    px={{ base: 4, md: 12 }}
                    py={0.5}
                    bgImage={`url(${headerBg})`}
                    bgSize="100% 100%"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    pointerEvents="auto"
                >
                    <Image src={ZenistaLogo} h={{ base: '40px', md: '80px' }} transform="translateY(-4px)" />
                    <motion.div whileHover={{ y: 1 }} whileTap={{ scale: 0.99 }}>
                        <Button
                            transform="translateY(-4px)"
                            bg="orange.800"
                            color="orange.200"
                            _hover={{ bg: 'orange.900' }}
                            fontSize={{ base: 'sm', md: '2xl' }}
                            px={4}
                            py={{ base: 1, md: 2 }}
                            borderRadius="lg"
                            fontFamily="primary"
                            size={{ base: 'xs', md: 'md' }}
                            onClick={playNow}
                        >
                            Play For Free
                        </Button>
                    </motion.div>
                </Stack>
            </Box>

            {/* Scrollable Content */}
            <Stack
                ref={scrollContainerRef}
                h="full"
                w={'full'}
                overflowY="auto"
                css={{
                    '&::-webkit-scrollbar': { display: 'none' },
                    'scrollbarWidth': 'none'
                }}
                bgImage={`url(${cloudyBg})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                bgAttachment="scroll"
            >
                <Flex
                    flexDirection="column"
                    align="center"
                    justify="center"
                    gap={{ base: 8, md: '200px' }}
                    mb={16}
                    pb="50px"
                >
                    {/* Child One */}
                    <Box position="relative" px={3}>
                        <Image src={frameOne} zIndex={10} />

                        {/* Animated elements */}
                        <motion.img
                            src={giftAni}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                bottom: '0',
                                transform: 'translateY(-50%)',
                                width: '160px',
                                opacity: 0
                            }}
                            animate={isHovered ? { x: -30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        />
                        <motion.img
                            src={magAni}
                            style={{
                                position: 'absolute',
                                right: '-90px',
                                top: '5px',
                                width: '192px',
                                opacity: 0
                            }}
                            animate={isHovered ? { x: 30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        />
                        <motion.img
                            src={cashAni}
                            style={{
                                position: 'absolute',
                                right: '-70px',
                                bottom: '0',
                                width: '192px',
                                opacity: 0
                            }}
                            animate={isHovered ? { x: 30, opacity: 1 } : { x: 0, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        />

                        <Flex
                            position="absolute"
                            top={0}
                            left={0}
                            px={{ base: 3, md: 12 }}
                            w="full"
                            h="full"
                            flexDirection="column"
                            gap={{ base: 3, md: 6 }}
                            align="center"
                            justify="center"
                            textAlign="center"
                            zIndex={10}
                        >
                            <Text
                                color="white"
                                fontSize={{ base: 'lg', md: '6xl' }}
                                lineHeight={{ base: '20px', md: '70px' }}
                                fontFamily="primary"
                            >
                                Welcome to Zenista – Relax, Build, and Grow Your Spa Empire!
                            </Text>

                            <Text
                                color="white"
                                fontSize={{ base: 'xs', md: 'xl' }}
                                fontFamily="secondary"
                                px={{ base: 0, md: 32 }}
                            >
                                Manage, grow, and perfect your own Massage Empire in a soothing idle game!
                            </Text>

                            {/* Play Now Button */}
                            <Box position="relative" display="inline-block">
                                {/* Additional two elements moving from button */}
                                <motion.img
                                    src={btnLeftAni}
                                    style={{
                                        position: 'absolute',
                                        left: '-30px',
                                        top: '-3px',
                                        transform: 'translateY(-50%)',
                                        width: '80px',
                                        opacity: 0
                                    }}
                                    animate={isHovered ? { x: -50, opacity: 1 } : { x: 0, opacity: 0 }}
                                    transition={{ duration: 0.1 }}
                                />
                                <motion.img
                                    src={btnRightAni}
                                    style={{
                                        position: 'absolute',
                                        right: '-30px',
                                        top: '-3px',
                                        transform: 'translateY(-50%)',
                                        width: '80px',
                                        opacity: 0
                                    }}
                                    animate={isHovered ? { x: 50, opacity: 1 } : { x: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <Box
                                    position="relative"
                                    cursor="pointer"
                                    mt={{ base: 3, md: 0 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={playNow}
                                >
                                    <Image src={isHovered ? btnBgHov : btnBg} h={{ base: '40px', md: '64px' }} />
                                    <Flex
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        w="full"
                                        h="full"
                                        align="center"
                                        justify="center"
                                        color="white"
                                        fontFamily="primary"
                                        fontSize={{ base: 'sm', md: '2xl' }}
                                    >
                                        <Text mb={{ base: 1, md: 3 }}>Play Now</Text>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Child Two */}
                    <Flex
                        gap={4}
                        flexDirection={{ base: 'column-reverse', md: 'row' }}
                        mx={{ base: 5, md: 0 }}
                    >
                        <Box position="relative">
                            <Image src={vintageFrame} />
                            <Flex
                                position="absolute"
                                top={0}
                                left={0}
                                w="full"
                                h="full"
                                flexDirection="column"
                                gap={{ base: 6, md: 12 }}
                                py={12}
                                px={16}
                                transform="rotate(-6deg)"
                            >
                                <Text
                                    color="orange.800"
                                    fontSize={{ base: 'xl', md: '5xl' }}
                                    fontFamily="primary"
                                    fontWeight="semibold"
                                >
                                    How It Works
                                </Text>
                                <Flex flexDirection="column" gap={2}>
                                    <Text
                                        color="gray.900"
                                        fontSize={{ base: 'xl', md: '3xl' }}
                                        fontFamily="primary"
                                        fontWeight="semibold"
                                    >
                                        {showNewText ? 'Unlock New Relaxation Services' : 'Build Your Zen Spa'}
                                    </Text>
                                    <Text
                                        color="gray.900"
                                        fontSize={{ base: 'base', md: '2xl' }}
                                        fontFamily="secondary"
                                        fontWeight="550"
                                    >
                                        {showNewText
                                            ? 'Introduce new services and treatments to attract more clients and increase your revenue.'
                                            : 'Grow your own massage and wellness center, from simple back rubs to luxurious treatments.'}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box position="relative" h="fit-content">
                            <Image src={frameTwo} />
                        </Box>
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    );
};

export default Hero;
