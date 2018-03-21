
import axios from 'axios'
import {server} from '../lib/appconfig'
import * as api from '../lib/api'

export default{
  getArticle(name){
    return new Promise((resolve,reject)=>{
      axios.get(`${server.domain}${api[name]}`).then(res=>{
        resolve(res.data)
      })
    })
  }
}