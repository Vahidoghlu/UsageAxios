import { createRouter, createWebHistory } from 'vue-router'
import Users from "@/views/user/Users.vue";
import NewUser from "@/views/user/NewUser.vue";
import Details from "@/views/user/Details.vue";
import posts from "@/views/post/posts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/users",
      name: 'users',
      component : Users
    },
    {
      path : "/new-user",
      name: 'newUser',
      component : NewUser
    },
    {
      path : "/users/:id",
      name: 'details',
      component : Details
    },
    { path: '/:catchAll(.*)',
      component: Users
    },
    { path: '/posts',
      name: 'posts',
      component: posts
    }
  ]
})

export default router