<template>
  <div id="catch-phrases">
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105%"
      viewBox="0 0 1400 1080"
    >
      <path
        id="cp-background"
        d="M608.593,932.57c-110.073,0-83.434,130.756-215.592,133.887-66.838,1.583-112.044-30.523-151.56-62.628-38.62-31.377-71.806-62.753-114.44-62.683-86.26.142-127,90.5-127,90.5V48.506S42.739,88.556,127,86.589s92.327-15.664,210.5-67.877,210.711,96.949,320.9,96.949,142.559-88.1,261.9-96.949,194.191,72.842,271.97,76.579S1366,48.506,1366,48.506v89.313h-.011c-.1,56.754-.748,480.865,1.118,765.037.584,89.078-64.889,126.3-139.606,128.792-36.189,1.206-66.107-24.311-95.187-49.828-30.96-27.167-60.97-54.333-96.588-49.25-97.559,13.924-105.861,146.944-214.19,146.944S718.664,932.57,608.593,932.57Z"
        transform="translate(0 -7.625)"
        fill="#ff9710"
      />
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" width="105%" viewBox="0 0 1366 750">
      <path
        id="cp-background"
        d="M608.1,647.183c-109.983,0-83.367,91.49-215.417,93.68-66.783,1.108-111.953-21.357-151.437-43.821C202.656,675.089,169.5,653.134,126.9,653.183,40.707,653.283,0,716.508,0,716.508V28.6S42.7,56.628,126.9,55.251,219.149,44.291,337.23,7.757,547.77,75.592,657.867,75.592,800.31,13.951,919.551,7.757,1113.584,58.725,1191.3,61.34,1364.89,28.6,1364.89,28.6V91.1h-.011c-.1,39.711-.747,336.461,1.117,535.3.584,62.327-64.836,88.373-139.493,90.116-36.16.844-66.053-17.01-95.109-34.864-30.935-19.008-60.921-38.017-96.51-34.46C937.4,656.926,929.11,750,820.869,750S718.08,647.183,608.1,647.183Z"
      />
    </svg>

    <img src="/new-text1.svg" alt="text01" id="text01" />
    <img src="/new-text2.svg" alt="text03" id="text02" />

    <!-- <img src="/text01.svg" alt="text01" id="text01" />
    <img src="/text03.svg" alt="text03" id="text03" />
    <img src="/text04.svg" alt="text04" id="text04" />
    <img src="/text06.svg" alt="text06" id="text06" />

    <img src="/text02.svg" alt="text02" id="text02" />
    <img src="/text05.svg" alt="text05" id="text05" />
    <img src="/text07.svg" alt="text07" id="text07" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "catch-phrases",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const background1 = document.getElementById("cp-background");
    ScrollTrigger.create({
      trigger: background1,
      start: "top 50%",
      onEnter: () => {
        background1?.classList.add("animate-background");
        gsap.to("#text01", {
          left: "15%",
          // transform: "rotate(5deg)",
          duration: 1.2,
        });
        gsap.to("#text02", {
          left: "15%",
          transform: "rotate(-2deg)",
          top: "55%",
          duration: 1.2,
        });
        // gsap.to("#text04", {
        //   left: "31%",
        //   transform: "rotate(-20deg)",
        //   duration: 1.2,
        // });
        // gsap.to("#text06", {
        //   left: "2%",
        //   transform: "rotate(-15deg)",
        //   duration: 1.2,
        // });
        // gsap.to("#text02", {
        //   right: "5%",
        //   transform: "rotate(-15deg)",
        //   duration: 1.2,
        // });
        // gsap.to("#text05", {
        //   right: "1%",
        //   transform: "rotate(12deg)",
        //   duration: 1.2,
        // });
        // gsap.to("#text07", {
        //   right: "4%",
        //   transform: "rotate(-23deg)",
        //   duration: 1.2,
        // });
      },
    });
  },
});
</script>

<style scoped>
#catch-phrases {
  margin-top: -9.5vw;
  overflow: hidden;
  position: relative;
}
#cp-background {
  transform-origin: center;
  transform: scaleX(1.1);
}
.animate-background {
  transform-origin: center;
  animation: stretch 1.2s ease-in forwards;
}
@keyframes stretch {
  0% {
    transform: scaleX(1.1);
  }
  60% {
    transform: scaleX(2.5);
  }
  100% {
    transform: scaleX(1);
  }
}

#text01 {
  position: absolute;
  width: 65vw;
  left: -65%;
  top: 20%;
}
#text02 {
  position: absolute;
  width: 60vw;
  right: -63%;
  top: 21%;
}
/* #text03 {
  position: absolute;
  width: 15vw;
  left: -12%;
  top: 40%;
}
#text04 {
  position: absolute;
  width: 35vw;
  left: -29%;
  top: 42%;
}
#text06 {
  position: absolute;
  width: 52vw;
  left: -32%;
  top: 57%;
}
#text05 {
  position: absolute;
  width: 41vw;
  top: 45%;
  right: -32.5%;
}
#text07 {
  position: absolute;
  width: 75vw;
  top: 59%;
  right: -46.5%;
} */

@media only screen and (max-width: 600px) {
  #catch-phrases {
    margin-top: -11vw;
  }
}
</style>
