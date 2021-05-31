export default [
      {
        path: '/msite',
        name: 'Msite',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Msite/Msite.vue"),
        meta:{
            isShowNav:true
        }
      },
      {
        path: '/search',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Search/Search.vue"),
        meta:{
            isShowNav:false
        }
      },
      {
        path: '/order',
        name: 'Order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Order/Order.vue"),
        meta:{
            isShowNav:true
        }
      },
      {
        path: '/kingkongList',
        name: 'kingkongNavtype',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Navtype/Navtype.vue"),
        meta:{
            isShowNav:false
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Profile/Profile.vue"),
        meta:{
            isShowNav:true
        }
      },
      {
        path: '/cate/:id',
        name: 'Cate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/components/Cate/Cate.vue"),
        props:(route: { params: any; })=>({shopListId:route.params}),
        children:[
            {
                path:"menu",
                component: () => import("@/components/Cate/menu.vue")
            },
            {
                path:"evaluate",
                name:"evaluate",
                component: () => import("@/components/Cate/evaluate.vue"),
            },
            {
                path:"merchant",
                name:"merchant",
                component: () => import("@/components/Cate/merchant.vue"),
            },
        ]
      },
      {
        path:"/login",
        name:"login",
        component:()=>import("@/views/login/login.vue")
      },
      {
        path: '',
        redirect: '/msite'
      },
      {
        path: '/',
        name: 'msite',
        component:()=>import("@/views/Msite/Msite.vue")
      }
]