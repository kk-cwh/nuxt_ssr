<template>
  <!-- 博客主体 -->
  <div class="app-body" >
    <div class="body-header">
      <div class="title">关于我</div>
      <div class="sub-title">-- 伪全栈程序猿的自留地 --</div>
    </div>
    <div class="body-item">
      <br>
      <div class="article-content">
        本人学识渊博、经验丰富，代码风骚、效率恐怖，PHP、Java、Python、Javascript 无不精通，熟练掌握各种框架，深山苦练 20 余年，一天只睡 4 小时， 千里之外定位问题，瞬息之间修复上线。身体强壮、健步如飞，可连续编程 100 小时不休息，讨论技术方案5小时。
      </div>
    </div>
    <div class="music" :style="{width:music_width+ 'px'}">
      <!-- showlrc -->
      <!-- <aplayer showLrc autoplay :music="{
          title: '那些你很冒险的梦',
          artist: '演唱 - 林俊杰',
          src:'/mp3/那些你很冒险的梦.mp3',
          pic: 'https://p1.music.126.net/lN7r5689EMOPy8G1unOIYw==/125344325567243.jpg?param=130y130',
          lrc:  `[00:00.00] 作曲 : 林俊杰\n[00:01.00] 作词 :
               王雅君\n[00:14.15]当两颗心开始震动\n[00:21.81]当你瞳孔学会闪躲\n[00:28.25]当爱慢慢被遮住只剩下黑\n[00:35.87]距离像影子被拉拖\n[00:40.23]\n[00:43.10]当爱的故事剩听说\n[00:49.26]我找不到你单纯的面孔\n[00:56.67]当生命每分每秒都为你转动\n[01:03.54]心多执着就加倍心痛\n[01:09.06]\n[01:09.71]那些你很冒险的梦
               我陪你去疯\n[01:17.59]折纸飞机 碰到雨天 终究会坠落\n[01:23.79]太残忍的话我直说 因为爱很重\n[01:31.71]你却不想懂
               只往反方向走\n[01:37.95]\n[01:50.12]当爱的故事剩听说\n[01:56.48]我找不到你单纯的面孔\n[02:03.31]当生命每分每秒都为你转动\n[02:10.40]心有多执着就加倍心痛\n[02:16.35]\n[02:16.97]那些你很冒险的梦
               我陪你去疯\n[02:24.78]折纸飞机 碰到雨天 终究会坠落\n[02:30.84]太残忍的话我直说 因为爱很重\n[02:38.49]你却不想懂
               只往反方向走\n[02:44.48]\n[02:46.35]我不想放手 你松开的左手\n[02:49.78]你爱的放纵 我白不回天空\n[02:53.71]我输了 累了 当你 再也
               不回头\n[03:00.84]\n[03:02.54]那些你很冒险的梦 我陪你去疯\n[03:10.61]折纸飞机 碰到雨天 终究会坠落\n[03:16.67]太残忍的话我直说
               因为爱很重\n[03:24.56]你却不想懂 只往反方向走\n[03:31.24]你真的不懂 我的爱已降落\n[03:41.50]\n`

        }"></aplayer> -->
    </div>
  </div>

</template>

<script>
// import Aplayer from 'vue-aplayer'
export default {
  components: {
    // Aplayer
  },
  data() {
    return {
      message:'快来领支付宝红包！人人可领，天天可领！复制此消息，打开最新版支付宝就能领取！FYIX2u52ai',
      show: false,
      archives: {},
      loading: false,
      page: 1,
      scroller: null,
      noArticle: false,
      music_width: 375
    }
  },
  mounted() {
  //   if (process.BROWSER_BUILD) {
  //   let w = document.body.clientWidth
  //   this.music_width = w >= 375 ? 376 : w
  //  }

  },
  methods: {
      showSilder() {
          this.show = !this.show
      },
      toArticle(id) {
          this.$router.push({name: 'blog-article-id', params: {'id': id}})
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
.music {
  position: fixed;
  left: 0;
  width: 300px;
  bottom: 0;
  background-color: #ffffff;
}
.article-content {
  padding-left: 20px;
  padding-right: 20px;
  word-break: break-all;
  padding-bottom: 0px;
  line-height: 1.8;
  font-size: 15px;
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
