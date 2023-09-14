import { createRouter, createWebHistory } from 'vue-router'
import Posts from "@/components/Posts.vue";
import NewPost from "@/components/NewPost.vue";
import details from "@/components/details.vue";
import posts from "@/components/Posts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/posts",
      name: 'posts',
      component : Posts
    },
    {
      path : "/new-post",
      name: 'newPost',
      component : NewPost
    },
    {
      path : "/posts/:id",
      name: 'details',
      component : details
    },
    { path: '/:catchAll(.*)',
      component: posts,}
  ]
})

export default router
