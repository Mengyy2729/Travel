<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">     
        <!--{{this.$store.state.city}}-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>     
      </div>
    </router-link>
  </div>
</template>

<script>
  //vuex中mapState的使用
  import { mapState } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['city'])//将vuex中的state中的属性映射到computed中，将state中的city映射到computed中的city
    },
    methods: {

    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    /*height: .86rem*/
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        display: block
        text-align: center
        font-size: .4rem
    .header-right
      min-width: 1.04rem
      float: right
      text-align: center
      color: #fff
      padding: 0 .15rem
      .arrow-icon
        margin-left: 0rem
        font-size: .24rem
    .header-input
      flex: 1
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .24rem
      height: .64rem
      line-height: .64rem
      background: #fff
      color: #ddd
      padding-left: .2rem
</style>