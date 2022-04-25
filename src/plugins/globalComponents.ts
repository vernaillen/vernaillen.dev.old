import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import ListPosts from "@/components/ListPosts.vue";
import PlayerControls from "@/components/PlayerControls.vue";

export const install: UserModule = ({ app }) => {
    /* declare global components */
    app.component("markdown-wrapper", MarkdownWrapper);
    app.component("list-posts", ListPosts);
    app.component("player-controls", PlayerControls);
}