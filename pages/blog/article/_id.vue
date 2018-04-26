<template>
  <!-- 博客主体 -->
  <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <div class="app-body">
      <div class="body-header">
        <div class="title" v-text="article.title"></div>
        <div class="sub-title" v-text="article.created_at"></div>
      </div>

      <div class="body-item" v-if="show">

        <!-- <div class="article-title">Vue单页应用中的数据同步探索</div>
         <div class="article-time">2017年05月7日</div> -->

        <div class="article-content" v-html="article.content">

        </div>
        <div class="article-tags">
          <ul class="article-tag-list">
            <li class="article-tag-list-item" v-for="x in article.tags" :key="'mu-card-'+x.id">
              <span class="article-tag-list-link waves-effect waves-button"  v-text="x.name" @click="toArchives(x.id)"></span>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      show: false,
      article: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      let id = this.$route.params.id

      this.$store.dispatch('ArticleDetail', {id}).then((response) => {
        let article = response.data.article
        if (article) {
          article.content = article.content.replace('MORE', '')
          this.article = article
          this.show = true
        }
      })
    }
  },
  methods: {
    toArchives (id) {
      this.$router.push({ name: 'blog-archives', params: { 'tag_id': id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 987px) {
  .app-body .body-item {
    /* margin-top: 20px; */
    background-color: #ffffff;
    /* height: 200px; */
    padding: 16px 20px 0;
    width: 960px;
    margin: 10px auto;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
  }
  .app-body .body-header {
    text-align: center;
    padding: 20px 0 30px 30px;
    background-color: #3f51b5;
  }
}

@media screen and (max-width: 986px) {
  .app-body .body-item {
    margin-top: 10px;
    background-color: #ffffff;
    /* height: 200px; */
    padding-top: 16px;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
  }
  .app-body .body-header {
    padding: 20px 0 30px 30px;
    background-color: #3f51b5;
  }
}

.app-body {
  margin-top: 56px;
  background-color: #f6f6f6;
  animation-duration:0.5s;
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

.article-time {
  margin: 0 0 10px;
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
.article-content {
  padding-left: 20px;
  padding-right: 20px;
  word-break: break-all;
  padding-bottom: 18px;
  line-height: 1.8;
  font-size: 15px;
}
.read-more {
  display: block;
  font-size: 14px;
  text-decoration-line: none;
}
.article-tags {
  border-top: 1px solid #ddd;
  padding: 10px 20px 0 20px;
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
  background: #8bc34a;
}
.article-tag-list-item:nth-child(n + 2) {
  background: #673ab7;
}
.article-tag-list-item:nth-child(n + 3) {
  background: #ff9800;
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
