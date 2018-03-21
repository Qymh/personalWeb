<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/javascript")
    section.articleMain
      nav-left
      .articleMain_body
        base-caption
          span(slot="base") ES6读书笔记之Let和Const
          span(slot="detail") es6标准入门第二版
        base-title(title="Let")
        small-title(title="定义")
</template>

<script>

import NavTop from '~/components/NavTop'
import NavLeft from '~/components/NavLeft'
import BaseCaption from '~/components/BaseCaption'
import BaseTitle from '~/components/BaseTitle'
import SmallTitle from '~/components/SmallTitle'

export default {
  components: {
    NavTop,
    NavLeft,
    BaseCaption,
    BaseTitle,
    SmallTitle
  }
}
</script>

<style lang="scss" scoped>
  
</style>


