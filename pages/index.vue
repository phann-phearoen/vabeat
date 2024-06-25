<template>
  <div id="index">
    <video
      width="100%"
      autoplay
      loop
      muted
      defaultMuted
      playsinline
      oncontextmenu="return false;"
      preload="auto"
    >
      <source
        src="https://wg-internal-use.s3.ap-northeast-1.amazonaws.com/mamaeco/video_TOP.mp4"
        type="video/mp4"
      />
    </video>

    <catch-phrases></catch-phrases>
    <team></team>
    <products></products>
    <company></company>
    <contact></contact>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import catchPhrases from "~/components/catch-phrases.vue";
import Company from "~/components/company.vue";
import Contact from "~/components/contact.vue";
import Team from "~/components/team.vue";

export default defineComponent({
  components: { catchPhrases, Team, Company, Contact },
});
</script>

<style scoped lang="scss">
#index:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url("/img_background.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
