<script setup lang="ts">

import ProductPage from "./atomic/ProductPage.vue";
import ProductPageTitle from "./atomic/ProductPageTitle.vue";
import ProductMembers from "./atomic/ProductMembers.vue";
import ProductPageSection from "./atomic/ProductPageSection.vue";
import {ref,onMounted, watch} from "vue";
import {useRoute} from "vitepress";

const eduCodeQrList = [
  "/qrimg/educode/out/00.png",
  "/qrimg/educode/out/01.png",
  "/qrimg/educode/out/02.png",
  "/qrimg/educode/out/03.png",
  "/qrimg/educode/out/04.png",
  "/qrimg/educode/out/05.png",
  "/qrimg/educode/out/06.png",
  "/qrimg/educode/out/07.png",
  "/qrimg/educode/out/08.png",
  "/qrimg/educode/out/09.png",
  "/qrimg/educode/out/10.png",
]

const wxPublicQrList = [
  '/qrimg/wxpublic/out/00.png',
  '/qrimg/wxpublic/out/01.png',
  '/qrimg/wxpublic/out/02.png',
  '/qrimg/wxpublic/out/03.png',
  '/qrimg/wxpublic/out/04.png',
  '/qrimg/wxpublic/out/05.png',
  '/qrimg/wxpublic/out/06.png',
  '/qrimg/wxpublic/out/07.png',
  '/qrimg/wxpublic/out/08.png',
  '/qrimg/wxpublic/out/09.png',
  '/qrimg/wxpublic/out/10.png'
];

function randomEduCodeQr(): string {
  return eduCodeQrList[Math.floor(Math.random() * (eduCodeQrList.length - 1))];
}

function randomWxPublicQr(): string {
  return wxPublicQrList[Math.floor(Math.random() * (wxPublicQrList.length - 1))]
}


const partners = ref([
  {
    avatar: randomWxPublicQr(),
    name: '微信公众号',
    title: '扫描关注微信公众号',
    sponsor: ''
  },
  {
    avatar: randomEduCodeQr(),
    name: '免费的编程小资料',
    title: '扫码或点击查询',
    sponsor: 'https://educode.cn'
  }
])

let route = useRoute();
onMounted(() => {
  watch(
      () => route.path,
      () => {
        partners.value = [
          {
            avatar: randomWxPublicQr(),
            name: '微信公众号',
            title: '扫描关注微信公众号',
            sponsor: ''
          },
          {
            avatar: randomEduCodeQr(),
            name: '免费的编程小资料',
            title: '扫码或点击查询',
            sponsor: 'https://educode.cn'
          }
        ]
        console.log('setInterval.partners: ' + partners);
      },
      {immediate: true}
  )
})

// setInterval(function () {
//   partners.value = [
//     {
//       avatar: randomWxPublicQr(),
//       name: '微信公众号',
//       title: '扫描关注微信公众号',
//       sponsor: ''
//     },
//     {
//       avatar: randomEduCodeQr(),
//       name: '免费的编程小资料',
//       title: '扫码或点击查询',
//       sponsor: 'https://educode.cn'
//     }
//   ]
//   console.log('setInterval.partners: ' + partners);
// },500)
</script>

<template>
  <ProductPage>
    <ProductPageSection>
      <template #title>相关链接</template>
      <!--      <template #lead>product list</template>-->
      <template #members>
        <ProductMembers size="small" :members="partners"/>
      </template>
    </ProductPageSection>
  </ProductPage>
</template>


<style scoped>
</style>
