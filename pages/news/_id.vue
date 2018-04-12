<template>
  <div>
      <h2>News-Content [{{$route.params.id}}]</h2>
      <ul>
         <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      </ul>
  </div>
</template>
<script>
export default {

  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data(){
    return{
      title:this.$route.params.title,
    }
  },
//独立设置head信息
  head(){
      return{
        title:this.title,
        meta:[
          {hid:'description',name:'news',content:'This is news page'}
        ]
      }
    }
}

</script>
