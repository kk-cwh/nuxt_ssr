<template>
  <div class="blog">
    <!-- 头部 bar -->
    <div class="app-bar">
      <div class="icon-menu">
        <i class="icon iconfont icon-list " @click="showSilder"></i>
      </div>
      <div class="space"></div>
      <div class="icon-searchs">
        <i class="icon iconfont icon-search" />
      </div>
    </div>
    <!-- 博客主体 -->
    <!-- <router-view></router-view> -->
     <nuxt-child/>
    <!-- 侧滑菜单 -->
    <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <div class="app-slider" v-if="show">
        <div class="slider-header">
          <div class="author-image"></div>
          <div class="author-name">张小张 &nbsp;
            <a href="https://github.com/zhangyake" target="_blank"><i class="icon iconfont icon-github li-icon"></i></a>
          </div>
          <div class="author-email">
            <a href="mailto:zhangykvip@126.com" title="zhangykvip@126.com">zhangykvip@126.com</a>
          </div>
        </div>
        <div class="list-menu">
          <div class="list-li" @click="routerTo('blog')">
            <i class="icon iconfont icon-home li-icon"></i>
            <!-- <i class="material-icons li-icon">home</i> -->
            <div class="li-title" >主页</div>
          </div>
          <div class="list-li" @click="routerTo('blog-tags')">
            <i class="icon iconfont icon-tags li-icon"></i>
            <div class="li-title" >标签</div>
          </div>
          <div class="list-li" @click="routerTo('blog-archives')">
            <i class="icon iconfont icon-archive li-icon"></i>
            <div class="li-title" >归档</div>
          </div>
          <!-- <div class="list-li">
                    <i class="icon iconfont icon-github li-icon"></i>
                    <div class="li-title">github</div>
                </div> -->
          <div class="list-li" @click="routerTo('blog-about')">
            <i class="icon iconfont icon-icnavabout li-icon"></i>
            <div class="li-title" >关于</div>
          </div>
          <!-- <div class="list-li">
                    <i class="icon iconfont icon-iconfonticonfontweibo li-icon"></i>
                    <div class="li-title">weibo</div>
                </div> -->

        </div>
      </div>
    </transition>

    <!-- 全屏遮罩 -->
    <div class="app-shade" v-if="show" @click="showSilder"></div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      m_show: false,
      show: false,
      choose: 1,
      menus: [
        { name: 'blog', color: 1, cn: '首页' },
        { name: 'grade', color: 0, cn: '收藏' },
        { name: 'search', color: 0, cn: '搜索' },
        { name: 'person', color: 0, cn: '关于' }
      ]
    }
  },
  mounted () {
      this.$store.dispatch('ClientInfo').then((response) => {
          console.log(response)
      })
  },
  methods: {
    showSilder () {
      this.show = !this.show
    },
    routerTo (name) {
      this.show = !this.show
      if(name=='blog-archives'){
        this.$router.push({ name: 'blog-archives', params: { 'tag_id': 0 } })
      }else {
        this.$router.push({ name })
      }

    },
    chooseRef (id) {
      let now = this.$refs[id]
      now.style.fontSize = '19px'
      let other =
        id === 'tuijian' ? this.$refs.new_article : this.$refs.tuijian
      other.style.fontSize = '16px'
    },
    changYellow (index) {
      this.menus.forEach(function (item, i) {
        if (index === i) {
          item.color = 1
        } else {
          item.color = 0
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
}
.app-shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  background-color: #000;
  z-index: 1000;
}
.app-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  bottom: 0;
  background-color: #ffffff;
  z-index: 1001;
   animation-duration:0.2s;
}
.app-slider .slider-header {
  background-image: url('/logo.jpg');
  background-size: 100% 100%;
  padding: 20px;
}
.author-image {
  width: 76px;
  height: 76px;
  background-image: url('/logo.jpg');
  background-size: 100% 100%;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px #ffffff;
}
.author-name {
  margin: 12px 0;
  font-size: 16px;
  color: rgb(255, 255, 255);
}
.author-email {
  font-size: 0.83em;
  color: #000;
}
.author-email a {
  text-decoration: none;
  color: #f0f2ff;
}
.list-menu {
  padding-top: 20px;
}
.list-li {
  display: flex;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  height: 36px;
}
.list-li:hover{
    background-color: #f2f2f2;
}
.list-li .li-icon {
  flex: 1;
  font-size: 19px;
}
.list-li .li-title {
  flex: 3;
  /* font-size: 18px; */
}
.app-bar {
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #3f51b5;
  height: 56px;
  display: flex;
}
.app-bar .icon-menu {
  flex-basis: 56px;
  margin-top: 16px;
  margin-left: 16px;
}
.space {
  flex: 1;
}
.icon-searchs {
  flex-basis: 56px;
  margin-top: 16px;
}

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
    margin-top: 20px;
    background-color: #ffffff;
    /* height: 200px; */
    padding-top: 16px;
  }
  .m-slider{
    position: fixed;
    left: 0;
     width: 30px;
     height: 50px;
     bottom: 0;
     background-color: #e66262;
  }
  .music{
    position: fixed;
    left: 0;
    width: 300px;
    bottom: 0;
    background-color: #ffffff;

  }
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
