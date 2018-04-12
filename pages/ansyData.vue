<template>
  <div>
    {{name}}
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
     return {
         name:'hello World'
     }
  },
  async asyncData(){
      let {data} = await axios.get('https://api.myjson.com/bins/ys0db');
      return {info: data}

  }
  // asyncData(){
  //     return axios.get('https://api.myjson.com/bins/e674f')
  //     .then((res)=>{

  //         return {info:res.data}
  //     })

  // }
}
</script>
