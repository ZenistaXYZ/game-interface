import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Flex, Text, Image, HStack, Stack } from '@chakra-ui/react';
import featureBg from '../../assets/feature-bg.png';
import featureOneFrame from '../../assets/feature-one-frame.png';
import featureTwoFrame from '../../assets/feature-two-frame.png';
import featureThreeFrame from '../../assets/feature-three-frame.png';
import featureFourFrame from '../../assets/feature-four-frame.png';
import candle from '../../assets/candle.png';
import day4 from '../../assets/day4.png';
import diamondBox from '../../assets/diamond-box.png';
import happyMessage from '../../assets/happy-message.png';
import videoFrame from '../../assets/video-frame.png';
import footerBg from '../../assets/footer-bg.png';
import footerLogo from '../../assets/footer-logo.png';
import twitter from '../../assets/twitter.png';
import medium from '../../assets/medium.png';

const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    hiddenBottom: { opacity: 0, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
};

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const featureData = [
        { img: featureOneFrame, icon: candle, text: "Create Your Ideal Relaxation Space", initial: 'hiddenLeft', angle: "positive" },
        { img: featureTwoFrame, icon: day4, text: "Idle Progression & Casual Gameplay", initial: 'hiddenBottom', angle: "positive" },
        { img: featureThreeFrame, icon: diamondBox, text: "Unlock Exclusive Luxury Treatments & Upgrades", initial: 'hiddenBottom', angle: "negative" },
        { img: featureFourFrame, icon: happyMessage, text: "Customize Your Spa & Create the Ultimate Wellness Experience", initial: 'hiddenRight', angle: "negative" },
    ];

    return (
        <>
            {/* Features Section */}
            <Box
                ref={ref}
                position="relative"
                bgImage={`url(${featureBg})`}
                bgSize="cover"
                bgPos="start"
                display="flex"
                flexDir="column"
                alignItems="center"
                pt={6}
                pb={50}
                mt={-4}
                zIndex={10}
            >
                <Text
                    color="white"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight="semibold"
                    textAlign="center"
                    fontFamily="primary"
                    my={{ base: 6, md: 16 }}
                >
                    Key Features
                </Text>

                {/* Feature Cards */}
                <Flex
                    flexDir={{ base: "column", md: "row" }}
                    justify="center"
                    align="center"
                >
                    {featureData.map((feature, index) => (
                        <motion.div
                            key={index}
                            style={{ position: 'relative', height: 'fit-content' }}
                            initial={feature.initial}
                            animate={isInView ? 'visible' : feature.initial}
                            variants={cardVariants}
                        >
                            <Image src={feature.img} />
                            <Flex
                                position="absolute"
                                top={0}
                                left={0}
                                w="full"
                                h="full"
                                flexDir="column"
                                gap={2}
                                align="center"
                                justify="center"
                                textAlign="center"
                                px={8}
                            >
                                <Image src={feature.icon} w="140px" />
                                <Text
                                    color="white"
                                    fontSize="2xl"
                                    fontFamily="primary"
                                    mb={2}
                                    transform={feature.angle === "positive" ? "rotate(3deg)" : "rotate(-3deg)"}
                                >
                                    {feature.text}
                                </Text>
                            </Flex>
                        </motion.div>
                    ))}
                </Flex>

                {/* Video Frame */}
                <Box w="full">
                    <Image
                        src={videoFrame}
                        w="full"
                        p={{ base: 4, md: 32 }}
                        py={{ md: 16 }}
                        mb={{ md: 0 }}
                    />
                </Box>
            </Box>

            {/* Footer Section */}
            <Box
                mt={-4}
            >
                <Box
                    minH="160px"
                    position="relative"
                    top={0}
                    zIndex={10}
                    bgImage={`url(${footerBg})`}
                    bgSize="cover"
                    bgPos="start"
                >
                    {/* <Image
                        src={footerBg}
                        w="full"
                        h="full"
                        objectFit="cover"
                    /> */}
                    <Stack
                        w={'full'}
                        h={'full'}
                        justify="center"
                        align="center"
                        gap={0}
                        position="relative"
                        top={{ base: -16, md: -28 }}
                    >
                        <Image
                            src={footerLogo}
                            maxH={{ base: "150px", md: "340px" }}
                            zIndex={10}
                            objectFit="contain"
                        />

                        <HStack
                            justify="center"
                            gap={6}
                            transform="translateY(50%)"
                        >
                            {[
                                { img: twitter, text: "Twitter", link: "https://x.com/zenistaofficial" },
                                { img: medium, text: "Medium", link: "https://medium.com/@zenistaofficial" },
                            ].map((social, idx) => (
                                <Flex
                                    key={idx}
                                    bg="white"
                                    borderRadius={{ base: "lg", md: "2xl" }}
                                    py={{ base: 1, md: 3 }}
                                    px={{ base: 6, md: 12 }}
                                    align="center"
                                    cursor="pointer"
                                    shadow="md"
                                    onClick={() => window.open(social.link, '_blank')}
                                >
                                    <Image
                                        src={social.img}
                                        w={{ base: 5, md: 10 }}
                                        mr={2}
                                    />
                                    <Text
                                        color="#0A4877"
                                        fontSize={{ base: "xl", md: "4xl" }}
                                        fontFamily="primary"
                                    >
                                        {social.text}
                                    </Text>
                                </Flex>
                            ))}
                        </HStack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Features;
