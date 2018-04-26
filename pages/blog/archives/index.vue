<template>
  <!-- 博客主体 -->
  <div class="app-body">
    <div class="body-header">
      <div class="title">Archives</div>
      <div class="sub-title">全栈程序员成长之旅</div>
    </div>
    <div class="body-item" v-for="(value, key) in archives" :key="'mu-card'+key">
      <div v-text="key" class="archives-date"></div>
      <div v-for="(item, index) in value" :key="item.id+item.created_at+index">
        <div class="article-time" v-text="item.created_at"></div>
        <div class="article-title" v-text="item.title" @click="toArticle(item.id)"></div>

        <div class="article-tags">
          <ul class="article-tag-list">
            <li class="article-tag-list-item" v-for="x in item.tags" :key="'mu-card-'+x.id">
               <span class="article-tag-list-link waves-effect waves-button"  v-text="x.name"></span>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  data () {
    return {
      show: false,
      archives: {},
      loading: false,
      page: 1,
      scroller: null,
      noArticle: false
    }
  },
  mounted () {
    let id = this.$route.params.tag_id ? this.$route.params.tag_id : 0
    let page = this.page
    this.$store.dispatch('AchivesList', {page, tag_id: id}).then((response) => {
      // console.log(response)
      let list = response.data.articles.list
      if (list) {
        this.archives = list
      }
    })
  },
  methods: {
    showSilder () {
      this.show = !this.show
    },
    toArticle (id) {
       this.$router.push({ name: 'blog-article-id', params: { 'id': id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-body {
  margin-top: 56px;
  background-color: #f6f6f6;
}

.app-body .body-header {
  padding: 40px 0 36px 36px;
  background-color: #3f51b5;
}
.body-header .title {
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
}
.body-header .sub-title {
  padding-top: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #c5cae9;
}

@media screen and (min-width: 968px) {
  .app-body .body-item {
    margin-top: 20px;
    background-color: #ffffff;
    /* height: 200px; */
    padding: 16px 20px 0;
    margin-left: 15%;
    margin-right: 15%;
  }
}

@media screen and (max-width: 967px) {
  .app-body .body-item {
    /* margin-top: 20px; */
    background-color: #ffffff;
    /* height: 200px; */
    /* padding-top: 16px; */
  }
}
.archives-date{
    padding: 30px 0 18px 20px;
    color: #3f51b5;
    font-size: 16px;
    font-weight: bold;
    background-color: #f6f6f6;
}
.article-time {
  margin: 20px 0 10px;
  line-height: 14px;
  font-size: 13px;
  font-weight: bold;
  color: #727272;
  padding-left: 20px;
}
.article-title {
  color: #3f51b5;
  position: relative;
  display: inline-block;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 10px;
  padding-left: 20px;
}
.article-tags {
  border-bottom: 1px solid #ddd;
  padding: 5px 20px 5px 20px;
}
.article-tag-list {
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-size: 13px;
  list-style: none;
}
.article-tag-list-item {
  display: inline-block;
  margin: 0 8px 8px 0;
  border-radius: 2px;
}
.article-tag-list-item:nth-child(n + 1) {
  background: #ff9800;
}
.article-tag-list-item:nth-child(n + 2) {
  background: #673ab7;
}
.article-tag-list-item:nth-child(n + 3) {
  background: #8bc34a;
}
.article-tag-list-item:nth-child(n + 4) {
  background: #f44336;
}
.article-tag-list-item:nth-child(n + 5) {
  background: #00abc0;
}
.waves-button,
.waves-button:hover,
.waves-button:visited,
.waves-button-input {
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1em;
  text-align: center;
  text-decoration: none;
  z-index: 1;
}
.article-tag-list-link {
  display: block;
  padding: 0 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.8);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
</style>
