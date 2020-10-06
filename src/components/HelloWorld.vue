<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button class="button" @click="test">
      Launch snackbar (global)
    </button>

    <button class="button" @click="warning">
      Launch snackbar (this)
    </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SnackbarProgrammatic as Snackbar } from 'buefy'
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  test() {
    Snackbar.open('Look at me!')
  }

  warning() {
    this.$buefy.snackbar.open({
      message: 'Yellow button and positioned on top, click to close',
      type: 'is-warning',
      position: 'is-top',
      actionText: 'Retry',
      indefinite: true,
      onAction: () => {
        this.$buefy.toast.open({
          message: 'Action pressed',
          queue: false
        })
      }
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
