<template>
  <div class="view-360">
    <VueProductSpinner
      :images="imagesActive"
      :slider="true"
      :infinite="false"
      :speed="10"
      sliderClass="custom-range"
    >
    </VueProductSpinner>
  </div>
</template>
<script>
import VueProductSpinner from "vue-product-spinner";

export default {
  components: {
    VueProductSpinner,
  },
  data() {
    return {
      sliderValue: 60,
      imagesActive: [
        require("@/assets/1/01.jpg"),
        require("@/assets/1/02.jpg"),
        require("@/assets/1/03.jpg"),
        require("@/assets/1/04.jpg"),
        require("@/assets/1/05.jpg"),
        require("@/assets/1/06.jpg"),
        require("@/assets/1/07.jpg"),
        require("@/assets/1/08.jpg"),
        require("@/assets/1/09.jpg"),
        require("@/assets/1/10.jpg"),
        require("@/assets/1/11.jpg"),
        require("@/assets/1/12.jpg"),
        require("@/assets/1/13.jpg"),
        require("@/assets/1/14.jpg"),
        require("@/assets/1/15.jpg"),
        require("@/assets/1/16.jpg"),
        require("@/assets/1/17.jpg"),
        require("@/assets/1/18.jpg"),
        require("@/assets/1/19.jpg"),
        require("@/assets/1/20.jpg"),
        require("@/assets/1/21.jpg"),
        require("@/assets/1/22.jpg"),
        require("@/assets/1/23.jpg"),
        require("@/assets/1/24.jpg"),
        require("@/assets/1/25.jpg"),
        require("@/assets/1/26.jpg"),
        require("@/assets/1/27.jpg"),
        require("@/assets/1/28.jpg"),
        require("@/assets/1/29.jpg"),
        require("@/assets/1/30.jpg"),
        require("@/assets/1/31.jpg"),
        require("@/assets/1/33.jpg"),
        require("@/assets/1/34.jpg"),
        require("@/assets/1/35.jpg"),
        require("@/assets/1/36.jpg"),
      ],
    };
  },
};
</script>

<style>
.view-360 {
  height: 90vh;
}
.vue-product-spinner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
}
.view-360 img {
  /* height: 80% !important; */
}
.view-360 input {
  max-width: 300px;
  position: absolute;
  bottom: 15%;
}
input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
  border: none !important;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}
</style>
