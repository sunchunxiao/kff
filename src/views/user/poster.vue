<template>
    <div class="poster">
      <img :src="src" alt="">
    </div>
</template>

<script>
  import {poster} from '@/service/user';
    export default {
        name: "poster",
      data(){
        return {
          token:localStorage.token,
          src:""
        }
      },
      mounted(){
          let params={
            token:this.token
          }
        poster(params).then(res=>{
          if (res.code==0){
            console.log(res.data.url)
			//线上 路径
			this.src = res.data.url;
            console.log(this.src)

          }
        })
      }
    }
</script>

<style scoped>
    .poster{
      width: 100%;
      height: 100%;
    }
    .poster img{
      width: 100%;
      height: 100%;
    }
</style>
