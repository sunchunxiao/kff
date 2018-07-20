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
				width: 20%;
				
			}
			span{
				font-size: 1.3rem;
				color: #3b88f6;
				position:absolute;
				right: 1rem;
				top: 17px;
				cursor: pointer;
			}
		}
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
				<img src="../../assets/image/home-logo.png" alt="" />
				<span @click="next">下载区分APP</span>
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
        	next(){
        	this.$router.push('/user/download')
        	}
        }

    }
</script>

<style scoped>

</style>
