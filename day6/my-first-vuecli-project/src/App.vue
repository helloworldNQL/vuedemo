<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
// import'./css/base.css';
import'./css/index.css';
import Header from './components/Header';
import Main from './components/main';
export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>


