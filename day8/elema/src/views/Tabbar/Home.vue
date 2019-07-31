<template>
  <div class="home">
    <Search />
    <Grid />
    <Option />
    <Tabbar />
  </div>
</template>

<script>

import Search from "../../components/Search.vue";
import Grid from "../../components/Grid.vue";
import Option from "../../components/Option.vue";
import Tabbar from "../../components/Tabbar.vue";

export default {
  name: "home",
  components: {
    Search,
    Grid,
    Option,
    Tabbar
  }
};
</script>


