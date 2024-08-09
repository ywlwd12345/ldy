<template>
  <div  class="container">
    <h1 class="title">
     {{objContent.title}}
      <span class="subtitle"> <slot name="subtitle"> </slot></span>
    </h1>

    <h3 class="pain-points">解决行业痛点：</h3>

    <div class="points-wrap">
      <p class="points-item" v-for="(item, index) in objContent.content" :key="item.id">
       {{item.text}}
      </p>
    </div>

    <div class="img-wrap">
      <el-image
        v-for="item in objContent.imgUrl"
        :key="item.url"
        :src="item.url"
        lazy
        class="image-item"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {


	props:{
			objContent:{
				type:Object,
				default:()=>{{}}
			},
			
		},


  data() {
    return {
   
    };
  },
};
</script>

<style  lang="less" scoped="scoped">
.title {
  font-size: 24px;
  font-weight: 800;
  color: #2c0002;
  position: relative;
}

.title::before {
  content: " ";
  position: absolute;
  width: 5px;
  height: 24px;
  background: #e62129;
  top: 5px;
  left: -10px;
}

.subtitle {
  font-size: 18px;
  color: #777777;
  font-weight: 400;
}

.pain-points {
  margin-top: 23px;
  font-size: 18px;
  font-weight: 800;
  color: #2c0002;
}

.points-wrap {
  margin-top: 22px;
}

.points-item {
  margin-top: 20px;
  font-size: 18px;
  color: #777777;
  letter-spacing: 1.2px;
}

.img-wrap {
    width: 700px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
}

.image-item{
    margin-bottom: 40px;
}


.container{
  margin-top:50px;

}

</style>