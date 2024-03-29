<script setup lang="ts">
import type {DefaultTheme} from 'vitepress/theme'
import VPLink from 'vitepress/theme'
import VPIconHeart from 'vitepress/theme'
import VPSocialLinks from 'vitepress/theme'

interface Props {
  size?: 'small' | 'medium'
  member: DefaultTheme.TeamMember
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})

</script>

<script lang="ts">
export default {
  methods: {
    productOnClick() {
      console.log('你点击了我');
      console.log(this.member.sponsor + ' : ' + (this.member.sponsor));
      if (this.member.sponsor != null && '' != this.member.sponsor) {
        window.open(this.member.sponsor, "_blank");
      }
    },
  },
};
</script>

<template>
  <article class="ProductMembersItem" :class="[size]">
    <div class="profile" v-on:click="productOnClick">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name"/>
      </figure>
      <div class="data">
        <h1 class="name">
          {{ member.name }}
        </h1>
        <p v-if="member.title || member.org" class="affiliation">
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <span v-if="member.title && member.org" class="at"> @ </span>
          <VPLink
              v-if="member.org"
              class="org"
              :class="{ link: member.orgLink }"
              :href="member.orgLink"
              no-icon
          >
            {{ member.org }}
          </VPLink>
        </p>
        <p v-if="member.desc" class="desc" v-html="member.desc"/>
      </div>
    </div>

    <div v-if="member.sponsor" class="sp">
      <VPLink class="sp-link" :href="member.sponsor" no-icon>
        <VPIconHeart class="sp-icon"/>
        Sponsor
      </VPLink>
    </div>
  </article>
</template>

<style scoped>
.ProductMembersItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ProductMembersItem.small .profile {
  padding: 32px;
}

.ProductMembersItem.small .data {
  padding-top: 20px;
}

.ProductMembersItem.small .avatar {
  width: 192px;
  height: 192px;
}

.ProductMembersItem.small .name {
  line-height: 24px;
  font-size: 16px;
}

.ProductMembersItem.small .affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
}

.ProductMembersItem.small .desc {
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}

.ProductMembersItem.small .links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
}

.ProductMembersItem.medium .profile {
  padding: 48px 32px;
}

.ProductMembersItem.medium .data {
  padding-top: 24px;
  text-align: center;
}

.ProductMembersItem.medium .avatar {
  width: 288px;
  height: 288px;
}

.ProductMembersItem.medium .name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.ProductMembersItem.medium .affiliation {
  padding-top: 4px;
  font-size: 16px;
}

.ProductMembersItem.medium .desc {
  padding-top: 16px;
  max-width: 288px;
  font-size: 16px;
}

.ProductMembersItem.medium .links {
  margin: 0 -16px -12px;
  padding: 16px 12px 0;
}

.profile {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  text-align: center;
}

.avatar {
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 0;
  box-shadow: var(--vp-shadow-3);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0;
  object-fit: cover;
}

.name {
  margin: 0;
  font-weight: 600;
}

.affiliation {
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand-1);
}

.desc {
  margin: 0 auto;
}

.desc :deep(a) {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.links {
  display: flex;
  justify-content: center;
  height: 56px;
}

.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>
