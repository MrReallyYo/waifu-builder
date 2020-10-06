<template>
  <div id="container">
    <div id="editor">
      <div id="character" class="gridcontent">
        <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/waifu-300x300.jpg">
      </div>
      <div id="slot1" class="gridcontent">
        Flower of Life
      </div>
      <div id="slot2" class="gridcontent">
        Plume of Death
      </div>
      <div id="slot3" class="gridcontent">
        Sands of Eon
      </div>
      <div id="slot4" class="gridcontent">
        Goblet of Eonothem
      </div>
      <div id="slot5" class="gridcontent">
        Circlet of Logos
      </div>
      <div id="weapon" class="gridcontent">
        Weapon
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Builder extends Vue {
}
</script>

<style>
#container {
  width: auto;
  margin: auto;
}

#editor {
  display: inline-grid;
  grid-template-columns: repeat(5, minmax(80px, 15vh));
  grid-template-rows: repeat(5, minmax(80px, 15vh));
  grid-gap: 1px;
}

#character {
  grid-column: 1 / 5;
  grid-row: 1 / 5;
}

#weapon {
  grid-column: 2 / 2;
  grid-row: 5 / 5;
}

#slot1 {
  grid-column: 5 / 5;
  grid-row: 1 / 1;
}

#slot2 {
  grid-column: 5 / 5;
  grid-row: 2 / 2;
}

#slot3 {
  grid-column: 5 / 5;
  grid-row: 3 / 3;
}

#slot4 {
  grid-column: 5 / 5;
  grid-row: 4 / 4;
}

#slot5 {
  grid-column: 5 / 5;
  grid-row: 5 / 5;
}

.gridcontent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: thin;
  border-color: yellowgreen;
}

</style>