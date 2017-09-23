<template>
  <div>
    <Cardbanner></Cardbanner>
    <Cardbanner></Cardbanner>
    <Cardbanner></Cardbanner>
    <Cardbanner></Cardbanner>
    <Cardbanner></Cardbanner>
    <Cardbanner></Cardbanner>
  </div>
</template>

<script>
import Cardbanner from './card-baner/Card-baner'

export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  components:{
     Cardbanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
