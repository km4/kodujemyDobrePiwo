<template>
  <div class="">
    <div id="main" class="flex h-screen w-screen">
      <Sidebar />
      <div class="flex w-full flex-col bg-gray-100">
      <Nav />
        <Main />
      <Footer />
        </div>
    </div>
</div>
</template>

<script>

import {Main, Sidebar, Nav, Footer} from  './components'

export default {
  components: {
    Sidebar,
    Nav,
    Main,
    Footer,
  },
}
</script>
