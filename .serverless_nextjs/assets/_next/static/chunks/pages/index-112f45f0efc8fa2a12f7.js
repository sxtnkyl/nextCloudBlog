(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{7146:function(n,t,e){"use strict";e.d(t,{xl:function(){return r},aA:function(){return i},zu:function(){return s}});var r="\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      id\n      title\n      content\n      username\n      coverImage\n      createdAt\n      updatedAt\n    }\n  }\n",i="\n  query ListPosts(\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",s="\n  query PostsByUsername(\n    $username: String\n    $sortDirection: ModelSortDirection\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    postsByUsername(\n      username: $username\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"},6124:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return d}});var r=e(7757),i=e.n(r),s=e(5893),o=e(2137),a=e(7294),c=e(1664),u=(e(5675),e(5112)),l=e(7146);function d(){var n=(0,a.useState)([]),t=n[0],e=n[1];function r(){return(r=(0,o.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.graphql({query:l.aA});case 2:t=n.sent,console.log(t),e(t.data.listPosts.items);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),(0,s.jsxs)("div",{className:"container mx-6",children:[(0,s.jsx)("h1",{className:"text-3xl font-semibold tracking-wide m-8",children:"Posts"}),t.map((function(n,t){return(0,s.jsx)(c.default,{href:"/posts/".concat(n.id),passHref:!0,children:(0,s.jsxs)("div",{className:"m-6 pb-6 border-b border-gray-300",children:[n.coverImage&&(0,s.jsx)("img",{alt:"".concat(n.title,"'s image"),src:n.coverImage,className:"w-56"}),(0,s.jsxs)("div",{className:"cursor-pointer mt-2",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold",children:n.title}),(0,s.jsxs)("p",{className:"text-gray-500 mt-2",children:["Author: ",n.username]})]})]})},t)}))]})}},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(6124)}])}},function(n){n.O(0,[9351,8764,3935,5675,9774,2888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);