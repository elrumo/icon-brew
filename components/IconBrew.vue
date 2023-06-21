<template>
    <component
        :is="iconName"
        :size="size"
        :color="color"
    />
</template>

<script>
import NewsIcon from '~~/components/icons/NewsIcon.vue';
import BookIcon from '~~/components/icons/BookIcon.vue';
import ResourcesIcon from '~~/components/icons/ResourcesIcon.vue';
import HomeIcon from './HomeIcon.vue';
import RuulexIcon from './RuulexIcon.vue';
import CloseIcon from './CloseIcon.vue';
import SideBarLeftIcon from './SideBarLeftIcon.vue';
import WebsiteWithImageIcon from './WebsiteWithImageIcon.vue';
import ChevronDoubleRightIcon from './ChevronDoubleRightIcon.vue';
import LayoutLeftIcon from './LayoutLeftIcon.vue';
import RectangleLeftFilledIcon from './RectangleLeftFilledIcon.vue';
import PencilIcon from './PencilIcon.vue';
import AddIcon from './AddIcon.vue';
import MessageBubbleIcon from './MessageBubbleIcon.vue';
import TrashIcon from './TrashIcon.vue';
import ExternalLinkIcon from './ExternalLinkIcon.vue';

export default {
    name: "IconBrewNew",

    props: {
        icon: {
            type: String,
            required: true,
            default: 'News',
        },
        size: {
            type: Number,
            required: false,
            default: 24
        },
        color: {
            type: String,
            required: false,
            default: "currentColor"
        }
    },

    components: {
        NewsIcon,
        BookIcon,
        ResourcesIcon,
        HomeIcon,
        RuulexIcon,
        CloseIcon,
        SideBarLeftIcon,
        WebsiteWithImageIcon,
        ChevronDoubleRightIcon,
        LayoutLeftIcon,
        RectangleLeftFilledIcon,
        PencilIcon,
        AddIcon,
        MessageBubbleIcon,
        TrashIcon,
        ExternalLinkIcon
    },

    computed: {
        iconName() {
            let icon = this.icon;
            icon = icon.charAt(0).toUpperCase() + icon.slice(1)
            return icon + 'Icon';
        }
    }

}
</script>