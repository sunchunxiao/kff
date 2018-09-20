<style lang="less" scoped>
  .home-nav{
		width: 100%;
		position: fixed;
		background: #fff;
		border-bottom: 1px solid #dcdfe2;
		box-shadow:0 1px 3px 0 rgba(23,81,153,.05);
		/*transition*/
		/*opacity: 0.9;*/
		z-index: 1000;
		.nav-logo{
			width:90%;
			margin:0 auto;
			padding:1rem 0;
			position:relative;
			img{
				width: 100%;

			}
			.down{
        right: 5.5rem;
			}
      .down1{
        right: 0rem;
        display: inline-block;
        padding: 0 13px;
        border-left: 1px solid #ddd;
      }
		}
	}
.com{
  font-size: 1.3rem;
  color: #3b88f6;
  position:absolute;
  top: 17px;
  cursor: pointer;

}
</style>

<template>

    <!--<div class="footerContent">
      <img src="../../assets/project/LOGO@2x.png" alt="">
      <img class="footerImg2" src="../../assets/project/nav.png" alt="">
      <span class="open" @click="next">下载APP</span>
    </div>-->
    <div class="home-nav">
			<div class="nav-logo">
				<div style="display: inline-block;width: 5.5rem">
          <img @click="go" src="../../assets/image/home-logo.png" alt="" />
        </div>
				<span class="com down" @click="next">下载区分APP</span>
        <span class="com down1" @click="register">注册</span>
			</div>

		</div>

</template>

<script>
    export default {
        name: "headerdown",
        created(){
        	var p = 0,t=0;
        	$(window).scroll(function(e){
        		p = $(this).scrollTop();
        		if(t<p&&p!==0){
        			$(".home-nav").slideUp('fast')

        		}else{
        			$(".home-nav").slideDown('fast')
        		}
        		t=p;
        	})
        },
        methods:{
          go(){
            this.$router.push('/main/home')
          },
        	next(){
        	this.$router.push('/user/download')
        	},
          register(){
            this.$router.push('/user/registerSmp')
          }
        }

    }
</script>

<style scoped>

</style>
