<template>

  <div class="container" id="editor">
    <div id="right">
      <div id="slot1">1</div>
      <div id="slot2">2</div>
      <div id="slot3">3</div>
      <div id="slot4">4</div>
      <div id="slot5">5</div>
    </div>

    <div id="left">
      <div id="character">C</div>
      <div id="weapon">W</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class Builder extends Vue {}
</script>

<style>
#editor {
  overflow: auto;
  background: red;
}
#left {
  background: azure;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 80px;
  position: absolute;
}

#right {
  float: right;
  background: blueviolet;
}


#character {
}

#weapon {
  position: absolute;
  bottom: 0px;
}


#slot1 {
  clear: both;
  float: right;
  width: 80px;
  height: 80px;
  background: #2c3e50;
}

#slot2 {
  clear: both;
  float: right;
  width: 80px;
  height: 80px;
  background: #42b983;
}
#slot3 {
  clear: both;
  float: right;
  width: 80px;
  height: 80px;
  background: aliceblue;
}
#slot4 {
  clear: both;
  float: right;
  width: 80px;
  height: 80px;
  background: aqua;
}
#slot5 {
  clear: both;
  float: right;
  width: 80px;
  height: 80px;
  background: aquamarine;
}
</style>