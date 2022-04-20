module.exports =
{
  buildSidebar: [
    {
      Build: [
        'build-blockchain/overview',
        'build-blockchain/concepts/pricing',
        {
          'Products v2': [
            'build-blockchain/products/v2/public-rpc',
              {
                '02 - Premium Plan': [
                'build-blockchain/products/v2/premium-plan',
                'build-blockchain/products/v2/premium-endpoints',
                'build-blockchain/products/v2/hybrid-infra',
                'build-blockchain/products/v2/advanced-apis',
                ],
              },
            'build-blockchain/products/v2/scan',
          ],
        },
        {
          'Chains v2': [
            'build-blockchain/chains/v2/arbitrum',
            'build-blockchain/chains/v2/avalanche',
            'build-blockchain/chains/v2/binance-smart-chain',
            'build-blockchain/chains/v2/celo',
            'build-blockchain/chains/v2/ethereum',
            'build-blockchain/chains/v2/fantom',
            'build-blockchain/chains/v2/iotex',
            'build-blockchain/chains/v2/near',
            'build-blockchain/chains/v2/nervos',
            'build-blockchain/chains/v2/polygon',
            'build-blockchain/chains/v2/solana',
          ],
        },
        {
            'BSC Application Sidechain': [
            'build-blockchain/bas/overview',
            {
                'Architecture': [
                'build-blockchain/bas/architecture/overview',
                'build-blockchain/bas/architecture/modules',
                'build-blockchain/bas/architecture/circ-model-native-bridge',
                'build-blockchain/bas/architecture/native-bridge',
                'build-blockchain/bas/architecture/fast-finality-bls-crypto',
                'build-blockchain/bas/architecture/sys-smart-contracts',
                'build-blockchain/bas/architecture/governance',
                'build-blockchain/bas/architecture/runtime-upgrades',
              ],
            },
            {
                'How to launch BAS': [
                 'build-blockchain/bas/how-to-launch/launch-bas',
                 'build-blockchain/bas/how-to-launch/deploy-erc20-token',
                 'build-blockchain/bas/how-to-launch/deploy-erc721-token',
                ],
            },
            'build-blockchain/bas/demo',
            'build-blockchain/bas/faq',
            'build-blockchain/bas/glossary',
          ],
        },
        {
            'Nodes': [
                {
                    'Algorand': [
                        'build-blockchain/nodes/algorand/overview',
                        'build-blockchain/nodes/algorand/endpoints',
                    ],
                },
                {
                    'Binance Chain': [
                        'build-blockchain/nodes/binance-chain/overview',
                    ],
                },
                {
                    'Binance Smart Chain': [
                        'build-blockchain/nodes/bsc/overview',
                        'build-blockchain/nodes/bsc/erigon-bsc-testnet',
                        'build-blockchain/nodes/bsc/run-bsc-node-on-erigon',
                    ],
                },
                {
                    'Bitcoin': [
                        'build-blockchain/nodes/bitcoin/overview',
                    ],
                },
                {
                    'Cardano': [
                        'build-blockchain/nodes/cardano/overview',
                    ],
                },
                {
                    'Celo': [
                        'build-blockchain/nodes/celo/overview',
                    ],
                },
                {
                    'Cosmos': [
                        'build-blockchain/nodes/cosmos/overview',
                    ],
                },
                {
                    'Covalent': [
                        'build-blockchain/nodes/covalent/overview',
                    ],
                },
                {
                    'Dash': [
                        'build-blockchain/nodes/dash/overview',
                    ],
                },
                {
                    'Decred': [
                        'build-blockchain/nodes/decred/overview',
                    ],
                },
                {
                    'Elastos': [
                        'build-blockchain/nodes/elastos/overview',
                    ],
                },
                {
                    'Eethreum 2': [
                        'build-blockchain/nodes/eth2/overview',
                        'build-blockchain/nodes/eth2/run-provider-nodes',
                        'build-blockchain/nodes/eth2/rewards-distribution',
                    ],
                },
                {
                    'Fantom': [
                        'build-blockchain/nodes/fantom/overview',
                        'build-blockchain/nodes/fantom/ftm-node-read-only',
                        'build-blockchain/nodes/fantom/ftm-node-full',
                    ],
                },
                {
                    'Vite': [
                        'build-blockchain/nodes/vite/supernode',
                        'build-blockchain/nodes/vite/full-node',
                    ],
                },
                {
                    'Harmony': [
                        'build-blockchain/nodes/harmony/overview',
                        'build-blockchain/nodes/harmony/run-staking-node-on-ankr',
                        'build-blockchain/nodes/harmony/faq',
                    ],
                },
                {
                    'Hathor': [
                        'build-blockchain/nodes/hathor/overview',
                        'build-blockchain/nodes/hathor/endpoints',
                    ],
                },
                {
                    'Hedera': [
                        'build-blockchain/nodes/hedera/overview',
                    ],
                },
                {
                    'Horizen': [
                        'build-blockchain/nodes/horizen/overview',
                        'build-blockchain/nodes/horizen/run-node',
                    ],
                },
                {
                    'Elrond': [
                        'build-blockchain/nodes/elrond/overview',
                        'build-blockchain/nodes/elrond/run-staking-node',
                    ],
                },
                {
                    'IOST': [
                        'build-blockchain/nodes/iost/overview',
                        'build-blockchain/nodes/iost/run-node',
                    ],
                },
                {
                    'LTO': [
                        'build-blockchain/nodes/lto/overview',
                        'build-blockchain/nodes/lto/run-node',
                        'build-blockchain/nodes/lto/faq',
                    ],
                },
                {
                    'Neo': [
                        'build-blockchain/nodes/neo/overview',
                    ],
                },
                {
                    'Near': [
                        'build-blockchain/nodes/near/overview',
                    ],
                },
                {
                    'Nervos': [
                        'build-blockchain/nodes/nervos/overview',
                        'build-blockchain/nodes/nervos/run-node',
                        'build-blockchain/nodes/nervos/endpoints',
                    ],
                },
                {
                    'NuCypher': [
                        'build-blockchain/nodes/nucypher/overview',
                        'build-blockchain/nodes/nucypher/run-node',
                    ],
                },
                {
                    'Nuls': [
                        'build-blockchain/nodes/nuls/overview',
                        'build-blockchain/nodes/nuls/endpoints',
                    ],
                },
                {
                    'OmiseGo': [
                        'build-blockchain/nodes/omisego/overview',
                        'build-blockchain/nodes/omisego/endpoints',
                    ],
                },
                {
                    'Pchain': [
                        'build-blockchain/nodes/pchain/overview',
                        'build-blockchain/nodes/pchain/run-node',
                        'build-blockchain/nodes/pchain/faq',
                    ],
                },
                {
                    'Polygon': [
                        'build-blockchain/nodes/polygon/overview',
                        'build-blockchain/nodes/polygon/run-node',
                    ],
                },
                {
                    'Stafi': [
                        'build-blockchain/nodes/stafi/overview',
                        'build-blockchain/nodes/stafi/run-node',
                    ],
                },
                {
                    'TomoX': [
                        'build-blockchain/nodes/tomochain/overview',
                        'build-blockchain/nodes/tomochain/run-node-master',
                        'build-blockchain/nodes/tomochain/run-node-tomox',
                    ],
                },
            ],
        },
        {
          'Guides': [
            'build-blockchain/guides/json-methods',
            'build-blockchain/guides/libraries',
            'build-blockchain/guides/websocket-premium',
            'build-blockchain/guides/rpcapi',
          ],
        },
                  {
              'Archive': [

                  {
                      'Products v1': [
                          'build-blockchain/products/v1/about-api-services',
                          'build-blockchain/products/v1/node-services'
                      ],
                  },
                  {
                      'Chains v1': [
                          'build-blockchain/chains/v1/arb-api',
                          'build-blockchain/chains/v1/avax-api',
                          'build-blockchain/chains/v1/bsc-api',
                          'build-blockchain/chains/v1/clover-api',
                          'build-blockchain/chains/v1/ethereum-api',
                          'build-blockchain/chains/v1/fantom-api',
                          'build-blockchain/chains/v1/huobi-api',
                          'build-blockchain/chains/v1/kusama-api',
                          'build-blockchain/chains/v1/oec-api',
                          'build-blockchain/chains/v1/polkadot-api',
                          'build-blockchain/chains/v1/polygon-api',
                          'build-blockchain/chains/v1/terra-api',
                          'build-blockchain/chains/v1/xdai-api',
                      ],
                  },
              ],
          },
        'build-blockchain/support/get-support',
      ],
    },
  ],
  earnSidebar: {
    'Earn': [
     'earn/overview',
        {
          'Liquid Staking': [
            'earn/liquid-staking/overview',
            {
              'AVAX': [
                'earn/liquid-staking/avax/overview',
                'earn/liquid-staking/avax/staking-mechanics',
                'earn/liquid-staking/avax/stake-avax',
                'earn/liquid-staking/avax/unstake-avax',
                'earn/liquid-staking/avax/faq',
              ],
            },
            {
              'BNB': [
                'earn/liquid-staking/bnb/overview',
                'earn/liquid-staking/bnb/staking-mechanics',
                'earn/liquid-staking/bnb/stake-bnb',
                'earn/liquid-staking/bnb/unstake-bnb',
                'earn/liquid-staking/bnb/faq',
              ],
            },
            {
              'DOT': [
               'earn/liquid-staking/dot/overview',
                'earn/liquid-staking/dot/staking-mechanics',
                'earn/liquid-staking/dot/stake-dot',
                'earn/liquid-staking/dot/unstake-dot',
                'earn/liquid-staking/dot/faq',
              ],
            },
            {
              'ETH': [
               'earn/liquid-staking/eth/overview',
                'earn/liquid-staking/eth/staking-mechanics',
                'earn/liquid-staking/eth/stake-eth',
                'earn/liquid-staking/eth/unstake-eth',
                'earn/liquid-staking/eth/faq',
              ],
            },
            {
              'FTM': [
                'earn/liquid-staking/ftm/overview',
                'earn/liquid-staking/ftm/staking-mechanics',
                'earn/liquid-staking/ftm/stake-ftm',
                'earn/liquid-staking/ftm/unstake-ftm',
                'earn/liquid-staking/ftm/faq',
              ],
            },
            {
              'KSM': [
               'earn/liquid-staking/ksm/overview',
                'earn/liquid-staking/ksm/staking-mechanics',
                'earn/liquid-staking/ksm/stake-ksm',
                'earn/liquid-staking/ksm/unstake-ksm',
                'earn/liquid-staking/ksm/faq',
              ],
            },
            {
              'MATIC': [
               'earn/liquid-staking/matic/overview',
                'earn/liquid-staking/matic/staking-mechanics',
                'earn/liquid-staking/matic/stake-matic',
                'earn/liquid-staking/matic/unstake-matic',
                'earn/liquid-staking/matic/faq',
              ],
            },
          ],
        },
        {
           'DeFi': [
            'earn/defi/overview',
            'earn/defi/yield-farm',
            'earn/defi/provide-liquidity-to-dex'
          ],
        },
        {
          'Bridge': [
           'earn/bridge/overview',
           'earn/bridge/bridge-mechanics',
            'earn/bridge/bridge-tokens'
          ],
        },
        {
          'Switch': ['earn/switch/overview',
            'earn/switch/switch-mechanics'
          ],
        },
        {
          'Liquid Crowdloan': [
            'earn/liquid-crowdloan/overview',
          ],
        },
        {
          'Reference': [
            'earn/reference/earn-compatible-wallets',
            'earn/reference/ls-smart-contract-addresses-mn',
            'earn/reference/ls-smart-contract-addresses-tn',
            'earn/reference/micropools',
            'earn/reference/liquid-crowdloan-market-makers',
            'earn/reference/parachain-sdk',
            'earn/reference/brand-assets',
            'earn/reference/earn-glossary',
            'earn/reference/earn-principles',
          ],
        },
     ],
  },
  gameSidebar: {
    'Game': [
      'game/ankr-game',
      {
        'Ankr Unity SDK': [
          'game/unity/about-unity',
          'game/unity/setting-up',
          {
             'Get Started': [
              'game/unity/getting-started/game-00',
              'game/unity/getting-started/game-01',
              'game/unity/getting-started/game-02',
              'game/unity/getting-started/game-03',
              'game/unity/getting-started/game-04',
            ],
          },
          {
             'How to...': [
              'game/unity/how-tos/wallet-game'
            ],
          },
        ],
      },
      {
        'Ankr Unreal SDK': [
          'game/unreal/about-unreal',
          'game/unreal/setting-up-unreal',
          {
              'Get Started': [
              'game/unreal/getting-started/unreal-before',
              'game/unreal/getting-started/unreal-connect-wallet',
              'game/unreal/getting-started/unreal-send-retrieve',
              'game/unreal/getting-started/unreal-update-nft',
              'game/unreal/getting-started/unreal-mint-nft',
            ],
          },
        ],
      },
      {
        'Reference': [
          'game/reference/game-reference'
        ],
      },
    ],
  },
    learnSidebar: {
    'Learn': [
      {
         'Tokens & Governance': [
             {
                'Tokens': [
                    'learn/tokens-governance/ankr-tokens',
                    'learn/tokens-governance/buy-ankr-cex',
                    'learn/tokens-governance/buy-ankr-dex',
                ],
             },
             {
                'Governance': [
                 'learn/tokens-governance/governance',
                 'learn/tokens-governance/tokenomics',
                ],
             },

        ],
      },
     {
         'Tutorials': [
          'learn/tutorials/submit-tutorial',
          'learn/tutorials/create-voting-system/movie-voting-web3',
          'learn/tutorials/create-eth-app-tutorial/create-eth-app',
          'learn/tutorials/simple-truffle',
          'learn/tutorials/connect-web3js',
          'learn/tutorials/erigon-bsc-tutorial/erigon-bsc',
          'learn/tutorials/connect-web3py',
        ],
      },
     {
         'Reference': [
          'learn/reference/ankr-vision',
        ],
      },
    ],
  },
}
