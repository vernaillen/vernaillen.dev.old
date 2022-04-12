<template>
    <div class="ud-w-full ud-px-4">
        <div class="ud-text-end">
        <ul class="ud-flex ud-items-center md:ud-justify-end">
            <li class="ud-flex ud-items-center">
                <router-link
                    to="/"
                    class="
                    ud-font-medium ud-text-base ud-text-body-color ud-pr-2
                    hover:ud-text-primary
                    "
                >
                    Home
                </router-link>
                <span class="ud-block ud-w-2 ud-h-2 ud-border-t-2 ud-border-r-2 ud-border-body-color ud-rotate-45 ud-mr-3"></span>
            </li>
            <li v-if="path.startsWith('/blog/')" class="ud-flex ud-items-center ud-font-medium ud-text-base ud-text-primary">
                <router-link to="/blog" 
                    class="
                    ud-font-medium ud-text-base ud-text-body-color ud-pr-2
                    hover:ud-text-primary
                    ">Blog</router-link>
                <span v-if="path.startsWith('/blog')" class="ud-block ud-w-2 ud-h-2 ud-border-t-2 ud-border-r-2 ud-border-body-color ud-rotate-45 ud-mr-3"></span>
            </li>
            <li v-if="pageName" class="ud-flex ud-items-center ud-font-medium ud-text-base ud-text-primary">
                {{ pageName }}
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    pageName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})

</script>