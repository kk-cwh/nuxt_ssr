<template>
  <!-- 博客主体 -->
  <div class="app-body">
    <div class="body-header">
      <div class="title">Tags</div>
      <div class="sub-title">全栈程序员成长之旅</div>
    </div>
    <div class="body-item">
      <transition  name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <div class="article-tags" v-if="show">
        <ul class="article-tag-list">
          <li class="article-tag-list-item" v-for="x in tags" :key="'mu-card-'+x.id">
            <a v-if="x.articles_count<=10" class="article-tag-list-link tag-p1 waves-effect waves-button"  v-text="x.name" @click="toArchives(x.id)"></a>
            <a v-else-if="x.articles_count<=20" class="article-tag-list-link tag-p2 waves-effect waves-button"  v-text="x.name" @click="toArchives(x.id)"></a>
            <a v-else-if="x.articles_count<=30" class="article-tag-list-link tag-p3 waves-effect waves-button"  v-text="x.name" @click="toArchives(x.id)"></a>
            <a v-else class="article-tag-list-link waves-effect tag-p4 waves-button"  v-text="x.name" @click="toArchives(x.id)"></a>
          </li>

        </ul>
      </div>

       </transition>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      show: false,
      tags: [],
      loading: false,
      page: 1,
      scroller: null,
      noArticle: false
    }
  },
  mounted () {
    this.$store.dispatch('TagList').then((response) => {
      // console.log(response)
      let list = response.data.tags
      if (list) {
        this.show = true
        this.tags = list
      }
    })
  },
  methods: {
    showSilder () {
      this.show = !this.show
    },
    toArticle (id) {
      this.$router.push({ name: 'blog-article-id', params: { 'id': id } })
    },
    toArchives (id) {
      this.$router.push({ name: 'blog-archives', params: { 'tag_id': id } })
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
    padding-top: 16px;
  }
}
.archives-date {
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
  /* border-bottom: 1px solid #ddd; */
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
.article-tag-list-item:nth-child(n + 6) {
  background: #ff9800;
}
.article-tag-list-item:nth-child(n + 7) {
  background: #673ab7;
}
.article-tag-list-item:nth-child(n + 8) {
  background: #8bc34a;
}
.article-tag-list-item:nth-child(n + 9) {
  background: #f44336;
}
.article-tag-list-item:nth-child(n + 10) {
  background: #00abc0;
}
.article-tag-list-item:nth-child(n + 11) {
  background: #ff9800;
}
.article-tag-list-item:nth-child(n + 12) {
  background: #673ab7;
}
.article-tag-list-item:nth-child(n + 13) {
  background: #8bc34a;
}
.article-tag-list-item:nth-child(n + 14) {
  background: #f44336;
}
.article-tag-list-item:nth-child(n + 15) {
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
.tag-p1 {
  padding-top: 3px;
  padding-bottom: 3px;
}
.tag-p2 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.tag-p3 {
  padding-top: 9px;
  padding-bottom: 9px;
}
.tag-p4 {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
