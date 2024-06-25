<template>
  <div id="company" class="pt-8 pt-md-16 mb-sm-n12">
    <div class="title-wraper">
      <img
        src="/company-title.svg"
        alt="company title"
        class="d-block mx-auto"
      />
    </div>

    <v-card
      max-width="1079"
      color="#FFF700B3"
      class="mx-sm-auto mx-2 rounded-xl"
    >
      <div class="px-sm-16 px-1 py-8">
        <v-row justify="center" class="ma-0 pa-0">
          <v-col cols="3">
            <div class="company-text">社名</div>
          </v-col>
          <v-col cols="9">
            <div class="company-text">
              バビート株式会社 <br />
              <a href="https://wannagrow.co.jp" target="_blank" class="to_wg">
                株式会社WANNAGROW</a
              >の一事業を分社化
            </div>
          </v-col>

          <v-col cols="3">
            <div class="company-text">事業概要</div>
          </v-col>
          <v-col cols="9">
            <div class="company-text">ITサービスの企画・開発・運営</div>
          </v-col>

          <v-col cols="3">
            <div class="company-text">役員</div>
          </v-col>
          <v-col cols="9">
            <div class="company-text">
              代表取締役 山本 晃大（KODAI YAMAMOTO）<br />
              取締役 瀬野 亮英（RYOEI SENO）
            </div>
          </v-col>
          <v-col cols="3">
            <div class="company-text">所在地</div>
          </v-col>
          <v-col cols="9">
            <div class="company-text">
              東京都文京区西方1-15-18モリカワビル4F
            </div>
          </v-col>

          <v-col cols="12" sm="10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.415249697232!2d139.75021341111196!3d35.71242832814556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c3604eb620f%3A0x3d262e3aa01aacba!2z5pel5pys44CB44CSMTEzLTAwMjQg5p2x5Lqs6YO95paH5Lqs5Yy66KW_54mH77yR5LiB55uu77yR77yV4oiS77yR77yYIOODouODquOCq-ODr-ODk-ODqyA0Zg!5e1!3m2!1sja!2skh!4v1682780759086!5m2!1sja!2skh"
              width="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="my-sm-10"
              id="map"
            ></iframe>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.company-text {
  font-size: 24px;
  font-weight: 600;
  margin: 0.5em 0;
}
#map {
  height: 450px;
}
.to_wg {
  color: white;
  background-color: #417DE3;
  text-decoration: none;
  padding: 2px 8px;
}
.to_wg:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 600px) {
  .company-text {
    font-size: 12px;
    margin: 0;
  }
  #map {
    height: 250px;
  }
}
</style>
