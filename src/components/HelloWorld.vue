<template>
  <div class="hello">
    {{ age }} {{ msg }}
    <el-button type="primary" @click="onClick">点击加一</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface Person {
  name: string
  age: number
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  public name: string = ''
  public age: number = 0
  public tom: Person = {
    name: '111',
    age: 111
  }
  public persons: Person[] | null = [
    {
      name: 'uzi',
      age: 12
    }
  ]
  onClick(): void {
    this.age += 1
    this.tom.age = this.age
  }
  created() {
    console.log('====================================')
    this.onClick()
    console.log(this.age, this.persons)
    this.persons = null
    console.log('====================================')
  }

  @Watch('tom', { deep: true })
  handerl(val: Person): void {
    console.log('====================================')
    console.log(val)
    console.log('====================================')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
