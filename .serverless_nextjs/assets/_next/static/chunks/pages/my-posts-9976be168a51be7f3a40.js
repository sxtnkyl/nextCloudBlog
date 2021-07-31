(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2997],{7292:function(n,t,e){"use strict";e.d(t,{qb:function(){return i},CP:function(){return r},fR:function(){return o}});var i="\n  mutation CreatePost(\n    $input: CreatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    createPost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      createdAt\n      updatedAt\n    }\n  }\n",r="\n  mutation UpdatePost(\n    $input: UpdatePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    updatePost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      createdAt\n      updatedAt\n    }\n  }\n",o="\n  mutation DeletePost(\n    $input: DeletePostInput!\n    $condition: ModelPostConditionInput\n  ) {\n    deletePost(input: $input, condition: $condition) {\n      id\n      title\n      content\n      username\n      coverImage\n      createdAt\n      updatedAt\n    }\n  }\n"},7146:function(n,t,e){"use strict";e.d(t,{xl:function(){return i},aA:function(){return r},zu:function(){return o}});var i="\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      id\n      title\n      content\n      username\n      coverImage\n      createdAt\n      updatedAt\n    }\n  }\n",r="\n  query ListPosts(\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",o="\n  query PostsByUsername(\n    $username: String\n    $sortDirection: ModelSortDirection\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    postsByUsername(\n      username: $username\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        title\n        content\n        username\n        coverImage\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"},3789:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var i=e(7757),r=e.n(i),o=e(5893),s=e(2137),u=e(7294),a=e(1664),c=e(5914),d=e(5112),l=e(7146),m=e(7292);function p(){var n=(0,u.useState)([]),t=n[0],e=n[1];function i(){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(r().mark((function n(){var t,i,o;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.g.currentAuthenticatedUser();case 2:return t=n.sent,i=t.username,n.next=6,d.b.graphql({query:l.zu,variables:{username:i}});case 6:o=n.sent,e(o.data.postsByUsername.items);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=(0,s.Z)(r().mark((function n(t){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.b.graphql({query:m.fR,variables:{input:{id:t}},authMode:"AMAZON_COGNITO_USER_POOLS"});case 2:i();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,u.useEffect)((function(){i()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-3xl font-semibold tracking-wide mt-6 mb-2",children:"My Posts"}),t.map((function(n,t){return(0,o.jsxs)("div",{className:"border-b border-gray-300\tmt-8 pb-4",children:[(0,o.jsx)("h2",{className:"text-xl font-semibold",children:n.title}),(0,o.jsxs)("p",{className:"text-gray-500 mt-2 mb-2",children:["Author: ",n.username]}),(0,o.jsx)(a.default,{href:"/edit-post/".concat(n.id),children:(0,o.jsx)("a",{className:"text-sm mr-4 text-blue-500",children:"Edit Post"})}),(0,o.jsx)(a.default,{href:"/posts/".concat(n.id),children:(0,o.jsx)("a",{className:"text-sm mr-4 text-blue-500",children:"View Post"})}),(0,o.jsx)("button",{className:"text-sm mr-4 text-red-500",onClick:function(){return function(n){return f.apply(this,arguments)}(n.id)},children:"Delete Post"})]},t)}))]})}},3709:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-posts",function(){return e(3789)}])}},function(n){n.O(0,[9351,8764,3935,9774,2888,179],(function(){return t=3709,n(n.s=t);var t}));var t=n.O();_N_E=t}]);