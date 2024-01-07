<template>
  <VPHero name="不止极客" text="不止极客" :tagline="tagline" :image="image" :actions="actions" />
  <div style="display: flex; justify-content: center; align-items: center;">
    <DocTopToBeMember style="margin-bottom: 24px; max-width: 1152px; width: 1152px" />
  </div>
  <VPFeatures :features="pages" />
</template>

<script setup lang="ts">
import VPHero from 'vitepress/dist/client/theme-default/components/VPHero.vue'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import { data as pages } from '../.vitepress/create.data'
import DocTopToBeMember from "./DocTopToBeMember.vue";

const tagline = `累计更新 `
// +`${pages.length} 篇文章`
//     + `\n`
    + `${allContentLength()} 字`
    + `\n`
    + `持续更新中`
const image = { light: '/NoGeekAvatar.png', dark: '/NoGeekAvatar.png' }
const actions = [
  {
    text: '随便逛逛',
    link: randomPage(),
  },
  {
    text: '成为不止极客的付费会员',
    link: 'http://nogeek.cn'
  }
]

function allContentLength() {
  let result = 0;
  for(var page of pages) {
    console.log(page);
    result += page.contentLength;
  }
  return result;
}

function randomPage(): string {
  const length = pages.length - 1
  return pages[Math.floor(Math.random() * length)]?.link
}
</script>

<style scoped>
:deep(.details) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>
