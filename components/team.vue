<template>
  <div id="team" class="container-1285 mx-auto my-md-16 my-8">
    <div class="title-wraper">
      <img
        src="/team-title.svg"
        alt="team-title"
        width="360"
        class="d-block mx-auto"
      />
    </div>

    <div>
      <img
        src="/team-illustration.png"
        alt="team illustration"
        class="d-block mx-auto team-image"
      />

      <img
        src="/team/img_text01.svg"
        alt="team text01"
        id="team-text01"
        class="team-images"
      />
      <img
        src="/team/img_text02.svg"
        alt="team text02"
        id="team-text02"
        class="team-images"
      />
      <img
        src="/team/img_text04.svg"
        alt="team text03"
        id="team-text04"
        class="team-images"
      />
      <img
        src="/team/img_text05.svg"
        alt="team text05"
        id="team-text05"
        class="team-images"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "team",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const team = document.getElementById("team");
    const images = document.getElementsByClassName("team-images");
    ScrollTrigger.create({
      trigger: team,
      start: "top 30%",
      onEnter: () => {
        if (images.length > 0) {
          for (let i = 0; i < images.length; i++) {
            images[i].classList.add("animate-images");
          }
        }
      },
    });
  },
});
</script>

<style scoped>
#team {
  position: relative;
}
.team-image {
  width: 92%;
}
#team-text01 {
  position: absolute;
  top: 4%;
  left: 0;
  width: 32%;
}
#team-text02 {
  position: absolute;
  top: 42%;
  left: 0;
  width: 25%;
}
#team-text04 {
  position: absolute;
  top: 5%;
  right: 0;
  width: 35%;
}
#team-text05 {
  position: absolute;
  bottom: -10%;
  right: 5%;
  width: 50%;
}

.team-images {
  scale: 1.3;
}

.animate-images {
  animation: boom 0.5s ease-in-out forwards;
}
@keyframes boom {
  0% {
    scale: 1.3;
  }
  25% {
    scale: 1;
  }
  50% {
    scale: 1.3;
  }
  100% {
    scale: 1;
  }
}

@media only screen and (max-width: 900px) {
  #team-text01 {
    top: 10%;
  }
  #team-text02 {
    top: 45%;
  }
  #team-text04 {
    top: 12%;
  }
  #team-text05 {
    bottom: -10%;
  }
}
@media only screen and (max-width: 600px) {
  #team-text01 {
    top: 18%;
  }
  #team-text02 {
    top: 52%;
  }
  #team-text04 {
    top: 20%;
  }
  #team-text05 {
    bottom: -10%;
  }
}
@media only screen and (max-width: 450px) {
  #team-text01 {
    top: 31%;
  }
  #team-text02 {
    top: 58%;
  }
  #team-text04 {
    top: 32%;
  }
  #team-text05 {
    bottom: -7%;
  }
}
</style>
