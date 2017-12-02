<template lang="pug">
  .limit.oa
    .article.col100
      base-caption
        span(slot="base") Vuex学习笔记
      base-title(title="简介")
      base-text
        slot.
          <main>vuex</main>用于在路由切换中仍会存在的组件,即用于需要在路由切换中起到复用的组件<br>
          如美团、饿了么的购物车,音乐播放底部的播放器之类的<br>
          在<main>vuex</main>中定义了数据、计算、突变、事件可以在所有页面的其他组件进行复用
      base-title(title="state")
      base-text
        slot. 
          <main>state</main>与vue中的data是类似的,都是储存数据的地方
      base-code
        slot.
          Vue

          const store = new Vuex.Store({
            state: {
              inner: 123
            }
          })

          const demo = new Vue({
            el:'#demo'
            store,
            computed: {
              counter() {
                return this.$store.state.inner
              }
            }
          })

          Webpack

          webpack中不用书写那么复杂

          如this.$store.state.inner

          import {mapState} from 'vuex' 后
          
          用...mapState 代替

          computed: {
            ...mapState({
              counter: 'inner'
            })
          }
      base-code(type="xml")
        slot.
          HTML

          <div id="demo">
            { { counter } }
          </div>

          解析后

          <div id="demo">123</div>
      base-title(title="getters")
      base-text
        slot.
          getters类似与vue中的computed,vue中是computed对data中的数据进行一些改写,
          getters则是对state中的数据进行改写
      base-code
        slot.
          Vue

          const store = new Vuex.Store({
            state: {
              inner: 123
            },
            getters: {
              addCounter(state) {
                return state.inner + 1
              }
            }
          })

          const demo = new Vue({
            el: '#demo',
            store,
            computed: {
              // 关于state
              counter() {
                return this.$store.state.inner
              },
              // 关于getters
              addCounter() {
                return this.$store.getters.addCounter
              }
            }
          })

          Webpack

          webpack中书写不用这么复杂

          如this.$store.getters.addCounter

          import {mapGetters} from 'vuex'后

          用...mapGetters代替

          computed: {
            ...mapGetters({
              addCounter: 'addCounter'
            })
          }
      base-code(type="xml")
        slot.
          HTML

          <div id="demo">
            { {counter} }
            { {addCounter} }
          </div>

          解析后

          <div id="demo">
            123 124
          </div>
      base-title(title="mutations")
      base-text
        slot.
          <main>mutations</main>则相当于vue中的methods只不过他必须是同步执行的<br>
          下方代码演示了用mutations突变最终获取数组中对象属性special为true的对象的名字
      base-code
        slot.
          Vue

          const store = new Vuex.Store({
            state: {
              items: [
                {id: 1,name: 'category1',special: false},
                {id: 2,name: 'category2',special: true}
              ],
              special: ''
            },
            getters: {
              // 返回special对象中的名字
              specialName(state) {
                return state.special.name
              }
            },
            mutations: {
              // 选择special属性为true的对象
              chooseSpecial(state) {
                state.items.find(item => {
                  if (item.special == true) {
                    state.special = item
                  }
                })
              }
            }
          })

          const demo = new Vue({
            el: '#demo',
            store,
            computed: {
              special() {
                return this.$store.getters.specialName
              }
            },
            methods: {
              choose() {
                this.$store.commit('chooseSpecial')
              }
            }
          })

          Webpack

          webpack中书写不用这么复杂如

          this.$store.commit('chooseSpecial')

          import {mapMutations} from 'vuex'后

          用...mapMutations代替

          methods:{
            ...mapMutations({
              choose:'chooseSpecial'
            })
          }
      base-code(type="xml")
        slot.
          HTML

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltspan @click="choose"&gtclick to choose special&lt/span&gt
              &ltdiv&gt{{special}}&lt/div&gt
            &lt/div&gt
          &lt/div&gt

          解析且点击后

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltspan&gtclick to choose special&lt/span&gt
              &ltdiv&gtcategory2&lt/div&gt
            &lt/div&gt
          &lt/div&gt
      base-title(title="actions")
      base-text
        slot.
          <main>actions</main>类似于vue中的methods,他与mutations的区别是actions可以异步使用
          以下代码用actions异步发送到mutations进行突变请求
      base-code
        slot.
          Vue

          const store = new Vuex.Store({
            state: {
              items: [
                {id: 1,name: 'category1',special: false},
                {id: 2,name: 'category2',special: true}
              ],
              special: ''
            },
            getters: {
              // 返回special对象中的名字
              specialName(state) {
                return state.special.name
              }
            },
            mutations: {
              chooseSpecial(state) {
                state.items.find(item => {
                  if (item.special == true) {
                    state.special = item
                  }
                })
              }
            },
            actions: {
              AsyncChoose({commit}) {
                setTimeout(() => {
                  this.commit('chooseSpecial')
                }, 1000)
              }
            }
          })

          store.commit('chooseSpecial')
          const demo = new Vue({
            el: '#demo',
            store,
            computed: {
              special() {
                return this.$store.getters.specialName
              }
            },
            methods: {
              choose() {
                this.$store.dispatch('AsyncChoose')
              }
            }
          })

          Webpack

          webpack中书写不用这么复杂

          如this.$store.dispatch('AsyncChoose')
          
          import {mapActions} from 'vuex'后
          
          用...mapActions代替

          methods: {
            ...mapActions({
              choose: 'choose'
            })
          }
      base-code
        slot.
          HTML

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltspan @click="choose"&gtclick to choose special&lt/span&gt
              &ltdiv&gt{ { special } }&lt/div&gt
            &lt/div&gt
          &lt/div&gt

          解析且点击后

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltspan&gtclick to choose special&lt/span&gt
              &ltdiv&gtcategory2&lt/div&gt
            &lt/div&gt
          &lt/div&gt
      base-title(title="modules")
      base-text
        slot.
          <main>modules</main>为模块,当项目过大时,<main>state getters mutations actions</main>
          可能无法全部放在一个store直属孩子里面,用modules可以对项目进行结构上的分离<br>
          即便使用了modules对模块进行划分,<main>getters mutations actions</main>也仍然和之前读取操作一样<br>
          变化的是state的读取,如下面的代码所示,读取模块内部的state需要先获取模块<br>
          且当modules模块内部使用了<main>namespaced: true</main>的情况下<br>
          读取state应该才原来的名字前面加上模块名字,如下面代码中的<main>outer/inner</main>
      base-code
        slot.
          Vue

          const store = new Vuex.Store({
            modules: {
              outer: {
                state: {
                  inner: 123,
                  items: [
                    {id: 1,name: 'category1',special: false},
                    {id: 2,name: 'category2',special: true}
                  ],
                  special: ''
                },
                getters: {
                  // 返回special对象中的名字
                  specialName(state) {
                    return state.special.name
                  }
                },
                mutations: {
                  chooseSpecial(state) {
                    state.items.find(item => {
                      if (item.special == true) {
                        state.special = item
                      }
                    })
                  }
                },
                actions: {
                  AsyncChoose({commit}) {
                    setTimeout(() => {
                      this.commit('chooseSpecial')
                    }, 1000)
                  }
                }
              }
            }
          })

          const demo = new Vue({
            el:'#demo',
            store,
            computed: {
              counter(){
                return this.$store.state.outer.inner
              },
              special(){
                return this.$store.getters.specialName
              }
            },
            methods:{
              choose(){
                this.$store.commit('chooseSpecial')
              }
            }
          })

          Webpack

          webpack中书写不用这么复杂如
          
          this.$store.state.outer.inner

          import {mapState} from 'vuex'后
          
          用...mapState代替
          
          如果是模块内的内容需要加上模块的名字

      base-code
        slot.
          HTML

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltdiv&gt{ { counter } }&lt/div&gt
              &ltspan @click="choose"&gtclick to choose special&lt/span&gt
              &ltdiv&gt{ { special } }&lt/div&gt
            &lt/div&gt
          &lt/div&gt

          解析且点击后

          &ltdiv id="demo"&gt
            &ltdiv&gt
              &ltdiv&gt123&lt/div&gt
              &ltspan @click="choose"&gtclick to choose special&lt/span&gt
              &ltdiv&gtcategory2&lt/div&gt
            &lt/div&gt
          &lt/div&gt
</template>

<script>

export default {
  mounted() {

    // 改变重复的id值
    var $ids=document.querySelectorAll('[id]')
    var idArr=[]

    $ids.forEach((id)=>{
      idArr.push(id.id)
    })

    for(var i=0;i<idArr.length;i++){
      for(var j=0;j<i;j++){
        if(idArr[i]==idArr[j]){
          $ids[i].id+=i
          $ids[i].href+=i
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/scss/article.scss';
</style>

