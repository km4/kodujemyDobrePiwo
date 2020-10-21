<template>
  <img alt="kodujemyDobrePiwo logo" src="./assets/beer-bottle.svg" id="logo"/>
  <h1>kodujemyDobrePiwo</h1>
  <Sidebar />
  <main>
    <router-view />
  </main>
</template>

<script>

import {Sidebar} from  './components'

export default {
  components: {
    Sidebar,
  },
}
</script>

<style>
#logo {
  width: 200px;
  height: 200px;
}
</style>