<template>
  <NaviPage :navContents="navContents[lang]" @lang="lang=$event" :lang="lang"/>
  <MainPage />
  <FooterPage :contents="contents[lang]" :lang="lang"/>
</template>

<script>
import NaviPage from './components/NaviPage.vue'
import MainPage from './components/MainPage.vue'
import FooterPage from './components/FooterPage.vue'
import navi from './assets/nav.json'
import data from './assets/Data.json'
export default {
  name: 'App',
  data() {
    return {
      lang: 0,
      contents:data,
      navContents: navi
    }
  },
  components: {
    NaviPage,
    MainPage,
    FooterPage
  },
  mounted() {
    this.lang = localStorage.getItem("language");
  },
}
</script>

<style>
</style>
