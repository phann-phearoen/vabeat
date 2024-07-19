<template>
  <div id="products" class="mx-auto py-md-16 py-0">
    <div class="title-wraper mt-10">
      <img
        src="/products-title.svg"
        alt="products title"
        class="d-block mx-auto"
      />
    </div>

    <img
      src="/products/arrow.svg"
      alt="arrow"
      id="arrow"
      class="d-none d-sm-block"
    />
    <!-- normal screen -->
    <v-row class="ma-0 pa-0 d-none d-sm-flex">
      <v-col cols="12">
        <!-- <a href="https://aji-navi.com" target="_blank" class="company-links">
          <img
            src="/products/ajinavi.svg"
            alt="ajinavi"
            id="logo2"
            height="190"
            class="logos"
          />
        </a> -->
      </v-col>
      <v-col cols="12">
        <a href="https://kinkan.travel/kinkanhouse-kitasenju" target="_blank" class="company-links">
          <img
            src="/products/kinkanhouse.svg"
            alt="kinkanhouse"
            id="kinkanhouse"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
      <v-col cols="12">
        <a href="https://kinkan.travel/kinkan-vip" target="_blank" class="company-links">
          <img
            src="/products/kinkan-vip.svg"
            alt="kinkan-vip"
            id="kinkan-vip"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
      <v-col cols="12">
        <a href="https://kinkan.travel/kinkan-meet" target="_blank" class="company-links">
          <img
            src="/products/kinkan-meet.svg"
            alt="kinkan-meet"
            id="kinkan-meet"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
      <v-col cols="12">
        <a href="https://ajiron.aji-navi.com" target="_blank" class="company-links">
          <img
            src="/products/ajiron.svg"
            alt="ajiron"
            id="ajiron"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
      <v-col cols="12">
        <a href="https://baritoku.jp" target="_blank" class="company-links">
          <img
            src="/products/baritoku.svg"
            alt="baritoku"
            id="baritoku"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
      <v-col cols="12">
        <a href="https://kokotag.jp" target="_blank" class="company-links">
          <img
            src="/products/kokotag.svg"
            alt="logo1"
            id="logo1"
            height="190"
            class="logos"
          />
        </a>
      </v-col>
    </v-row>
    <!-- mobile screen -->
    <v-row class="ma-0 pa-0 d-flex d-sm-none font-weight-bold">
      <!-- <v-col cols="12">
        <a href="https://aji-navi.com" target="_blank" class="company-links">
          <img
            src="/products/ajinavi-sm.svg"
            alt="ajinavi"
            class="logo-sm"
            id="ajinavi-sm"
          />
        </a>
        <div class="text-white">アジナビ</div>
        <div class="hr-white"></div>
        <div class="text-white">
          アジナビは、アジアトップクラスのソフトウェアエンジニアを中小企業に繋げます。<br>
        </div>
      </v-col> -->
      <v-col cols="12">
        <a href="https://kinkan.travel/kinkanhouse-kitasenju" target="_blank" class="company-links">
          <img
            src="/products/kinkanhouse-sm.svg"
            alt="kinkanhouse-sm"
            class="logo-sm"
            id="kinkanhouse-sm"
          />
        </a>
        <div class="text-white">キンカンハウス北千住</div>
        <div class="hr-white"></div>
        <div class="text-white">
          Welcome to Kinkanhouse Kita-senju
        </div>
      </v-col>
      <v-col cols="12">
        <a href="https://kinkan.travel/kinkan-vip" target="_blank" class="company-links">
          <img
            src="/products/kinkan-vip-sm.svg"
            alt="kinkan-vip-sm"
            class="logo-sm"
            id="kinkan-vip-sm"
          />
        </a>
        <div class="text-white">kinkan VIP</div>
        <div class="hr-white"></div>
        <div class="text-white">
          An exquisite experience with a Japanese owner. Experiences you won't find in travel guidebooks.
        </div>
      </v-col>

      <v-col cols="12">
        <a href="https://kinkan.travel/kinkan-meet" target="_blank" class="company-links">
          <img
            src="/products/kinkan-meet-sm.svg"
            alt="kinkan-meet-sm"
            class="logo-sm"
            id="kinkan-meet-sm"
          />
        </a>
        <div class="text-white">kinkan Meet</div>
        <div class="hr-white"></div>
        <div class="text-white">
          Would you like to interaction with Japanese locals ? <br> At a Japanese drinking restaurant or a cafe.
        </div>
      </v-col>

      <v-col cols="12">
        <a href="https://ajiron.aji-navi.com" target="_blank" class="company-links">
          <img
            src="/products/ajiron-sm.svg"
            alt="ajiron"
            class="logo-sm"
            id="ajiron-sm"
          />
        </a>
        <div class="text-white">アジロン</div>
        <div class="hr-white"></div>
        <div class="text-white">
          個人にITエンジニアを提供。破格でITエンジニアをパートナーに。
        </div>
      </v-col>

      <v-col cols="12">
        <a href="https://baritoku.jp" target="_blank" class="company-links">
          <img
            src="/products/baritoku-sm.svg"
            alt="baritoku"
            class="logo-sm"
            id="baritoku-sm"
          />
        </a>
        <div class="text-white">バリトク</div>
        <div class="hr-white"></div>
        <div class="text-white">
          バリ得！大特価の日用品を扱う会員制通販サイトです。
          廃棄処分されてしまう日用品を大特価で購入できます。
        </div>
      </v-col>
      <v-col cols="12">
        <a href="https://kokotag.jp" target="_blank" class="company-links">
          <img
            src="/products/kokotag-sm.svg"
            alt="kokotag"
            class="logo-sm"
            id="kokotag"
          />
        </a>
        <div class="text-white">ココタグ</div>
        <div class="hr-white"></div>
        <div class="text-white">
          ココタグは、Apple正規認証品のスマートタグです。<br />
          落とし物や忘れ物の紛失を防止します。Appleの「探す」アプリに対応！
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  mounted() {
    const logos = document.getElementsByClassName("logos");
    if (logos.length > 0) {
      for (let i = 0; i < logos.length; i++) {
        const reveal = gsap.to(logos[i], {
          paused: true,
          left: "-15px",
          duration: 1,
        });
        logos[i].addEventListener("mouseenter", () => reveal.play());
        logos[i].addEventListener("mouseleave", () => reveal.reverse());
      }
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#baritoku-sm", {
      scrollTrigger: {
        trigger: "#baritoku-sm",
        start: "top 50%",
      },
      left: "-300",
      duration: 1,
    });
    gsap.to("#logo1-sm", {
      scrollTrigger: {
        trigger: "#logo1-sm",
        start: "top 50%",
      },
      left: "-200",
      duration: 1,
    });
    // gsap.to("#ajinavi-sm", {
    //   scrollTrigger: {
    //     trigger: "#ajinavi-sm",
    //     start: "top 50%",
    //   },
    //   left: "-250",
    //   duration: 1,
    // });
    gsap.to("#kinkanhouse-sm", {
      scrollTrigger: {
        trigger: "#kinkanhouse-sm",
        start: "top 50%",
      },
      left: "-240",
      duration: 1,
    });
    gsap.to("#kinkan-vip-sm", {
      scrollTrigger: {
        trigger: "#kinkan-vip-sm",
        start: "top 50%",
      },
      left: "-250",
      duration: 1,
    });
    gsap.to("#kinkan-meet-sm", {
      scrollTrigger: {
        trigger: "#kinkan-meet-sm",
        start: "top 50%",
      },
      left: "-250",
      duration: 1,
    });
    gsap.to("#kokotag", {
      scrollTrigger: {
        trigger: "#kokotag",
        start: "top 50%",
      },
      left: "-250",
      duration: 1,
    });
    gsap.to("#ajiron-sm", {
      scrollTrigger: {
        trigger: "#ajiron-sm",
        start: "top 50%",
      },
      left: "-270",
      duration: 1,
    });
  },
});
</script>

<style scoped>
#products {
  position: relative;
  overflow: hidden;
}
#arrow {
  position: absolute;
  left: 65%;
  top: 55%;
  z-index: 0 !important;
}
.v-col {
  height: 210px;
}
#baritoku {
  position: absolute;
  left: -830px;
}
#logo1 {
  position: absolute;
  left: -780px;
}
#logo2 {
  position: absolute;
  left: -840px;
}
#kinkanhouse {
  position: absolute;
  left: -685px;
}
#kinkan-meet {
  position: absolute;
  left: -735px;
}
#kinkan-vip {
  position: absolute;
  left: -740px;
}
#ajiron {
  position: absolute;
  left: -790px;
}

#baritoku-sm {
  position: relative;
  left: -450px;
}
#logo1-sm {
  position: relative;
  left: -420px;
}
#ajinavi-sm {
  position: relative;
  left: -380px;
}
#kinkanhouse-sm {
  position: relative;
  left: -500px;
}
#kinkan-vip-sm {
  position: relative;
  left: -500px;
}
#kinkan-meet-sm {
  position: relative;
  left: -500px;
}
#ajiron-sm {
  position: relative;
  left: -500px;
}
#kokotag {
  position: relative;
  left: -500px;
}
.company-links {
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .v-col{
    height: unset;
    min-height: 150px;
  }
}
</style>
