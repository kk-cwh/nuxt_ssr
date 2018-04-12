<template>
  <div>
      <h2>News Index page</h2>
       <p>NewsID:{{$route.params.newsId}}</p>
       <ul>
        <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      </ul>
  </div>
</template>
