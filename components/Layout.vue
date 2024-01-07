<template>
  <Layout>
    <template #doc-before>
      <DocTopToBeMember style="margin-bottom: 24px;" />
      <DocTopToBeMember style="margin-bottom: 24px;" />
    </template>

    <template #doc-footer-before>
      <DocTopToBeMember style="margin-top: 24px; margin-bottom: 24px" />
      <NoGeekProduct/>
    </template>

    <template #doc-after>
<!--      <Comment style="margin-top: 24px;" />-->
<!--      <Friends />-->
      <FootFriends/>
    </template>

    <template #not-found>
      <NotFound />
    </template>

    <template #aside-outline-before>
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <AdWxPublic/>
    </template>

    <template #aside-ads-after>
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <DocTopToBeMember style="margin-bottom: 5px;" />
      <DocTopToBeMember style="margin-bottom: 5px;" />
    </template>



  </Layout>

<!--
aside-top
aside-outline-before

目录

aside-outline-after
aside-ads-before
aside-ads-after
aside-bottom
-->
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue';
import NotFound from './NotFound.vue';
import Friends from './Friends.vue';

import DocTopToBeMember from './DocTopToBeMember.vue';
import AdComponent from "./ad/AdComponent.vue";



import FootFriends from "./foot/FootFriends.vue";


import NoGeekProduct from "./product/NoGeekProduct.vue";
import AdWxPublic from "./adWxPublic/AdWxPublic.vue";

const { Layout } = DefaultTheme


let HOST_LIST = ['localhost', 'scydxq.com']
const refer_check = HOST_LIST.includes(location.hostname);
// 组件中可以嵌套  v-if="refer_check"

if (refer_check) {

}

</script>
