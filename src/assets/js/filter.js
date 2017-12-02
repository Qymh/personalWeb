import Vue from 'vue'

Vue.filter('limitWord',(value)=>{
  return value.trim().substr(0,90)+'...'
})