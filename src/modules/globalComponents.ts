import type { UserModule } from '~/types'
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import ListPosts from "@/components/ListPosts.vue";

export const install: UserModule = ({ app }) => {
    app.component("markdown-wrapper", MarkdownWrapper);
    app.component("list-posts", ListPosts);
}