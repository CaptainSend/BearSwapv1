import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: 'Bridge',
    href: '/Bridge',
    icon: 'Bridge',
  },
  {
    label: 'Launchpad',
    href: '/Launchpad',
    icon: 'Launchpad',
  },
  {
    label: 'More',
    href: '#',
    icon: 'More',
    hideSubNav: false,
    items: [
      {
        label: t('Protocol BEAR'),
        href: 'https://ProtocolBEAR.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }
    ],
  },
]

export default config
