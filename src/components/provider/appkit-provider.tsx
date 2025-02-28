import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { defineChain } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = '6827be901e79821cf778380597d2c710'

const metadata = {
    name: 'Zenista Proto',
    description: 'Zenista is a game designed by Snarklabs, This game is a simulator where you are given a spa and you have to upgrade and expand your spa empire',
    url: 'https://zenista.snrk.dev',
    icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const tCoreDao = defineChain({
    id: 1115,
    name: 'Core Dao',
    chainNamespace: 'eip155',
    caipNetworkId: 'eip155:1115',
    nativeCurrency: {
        decimals: 18,
        name: 'Core',
        symbol: 'tCORE',
    },
    rpcUrls: {
        default: { http: ['https://rpc.test.btcs.network'] },
    },
    blockExplorers: {
        default: {
            name: 'CoreDao',
            url: 'https://scan.test.btcs.network',
        },
    },
    testnet: true,
});

const networks = [tCoreDao]

const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: true,
});

createAppKit({
    adapters: [wagmiAdapter],
    networks: [tCoreDao],
    projectId,
    metadata,
    features: {
        analytics: true,
        socials: []
    },
    defaultNetwork: tCoreDao,
    themeMode: 'light'
})

export function AppKitProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}
