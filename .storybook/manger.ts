import { addons } from '@storybook/manager-api'
import {
    defaultConfig,
    type TagBadgeParameters,
} from 'storybook-addon-tag-badges'

addons.setConfig({
    tagBadges: [
        // TODO - make custom tag work
        {
            tags: 'frog',
            badge: {
                text: 'Frog 🐸',
                bgColor: '#001c13',
                fgColor: '#e0eb0b',
                tooltip: 'This component can catch flies!',
            },
            display: {
                sidebar: ['component'],
                toolbar: true,
            },
        },
        ...defaultConfig,
    ] satisfies TagBadgeParameters,
})