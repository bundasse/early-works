<template>
  <NaviPage />
  <MainPage />
  <NoticePage />
  <ContentPage />
  <FooterPage />
</template>

<script>
import NaviPage from './components/Navi.vue'
import MainPage from './components/Main.vue'
import NoticePage from './components/Notice.vue'
import ContentPage from './components/Contents.vue'
import FooterPage from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NaviPage,
    MainPage,
    NoticePage,
    ContentPage,
    FooterPage
  }
}
</script>

<style>
</style>
