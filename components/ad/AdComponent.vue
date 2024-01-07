<script setup>
import icon from './documate.vue'
</script>

<template>
  <div class="ad-component">
    <a target="_blank" href="http://nogeek.cn">
      <icon class="icon"/>
      <span>
        快来成为不止极客的付费会员吧
      </span>
      <span class="cta">Try now →</span>
    </a>
  </div>
</template>

<style scoped>
.ad-component {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


  margin-bottom: 2rem;
  padding: .5rem .85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: color 0.4s ease-in-out;
  font-size: 0.8rem;
}

.ad-component:hover {
  color: var(--vp-c-text-1);
}

.ad-component .icon {
  display: inline-block;
  width: .75rem;
  height: .75rem;
  margin-right: 0.3rem;
}

.ad-component .cta {
  margin-left: 0.3rem;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>