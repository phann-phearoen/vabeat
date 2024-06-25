<template>
  <div id="contact">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        id="background"
        fill="#417DE3"
        fill-opacity="1"
        d="M0,256L21.8,224C43.6,192,87,128,131,133.3C174.5,139,218,213,262,202.7C305.5,192,349,96,393,101.3C436.4,107,480,213,524,229.3C567.3,245,611,171,655,144C698.2,117,742,139,785,165.3C829.1,192,873,224,916,234.7C960,245,1004,235,1047,208C1090.9,181,1135,139,1178,106.7C1221.8,75,1265,53,1309,80C1352.7,107,1396,181,1418,218.7L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </svg>
    <div class="contents-wraper">
      <div class="mb-16">
        <img
          src="/contact-title.svg"
          alt="contact title"
          class="d-block mx-auto"
        />
      </div>

      <v-form ref="form" lazy-validation>
        <v-row dense class="my-0 pa-0 container-800 mx-auto" justify="center">
          <v-col cols="11">
            <v-text-field
              variant="solo"
              v-model="company"
              :rules="required"
              validate-on="blur"
            >
              <template #label>
                <div>
                  会社名<span class="red-text text-caption">（必須）</span>
                </div>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="11">
            <v-text-field
              variant="solo"
              v-model="name"
              :rules="required"
              validate-on="blur"
            >
              <template #label>
                <div>
                  お名前<span class="red-text text-caption">（必須）</span>
                </div>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="11">
            <v-text-field
              variant="solo"
              v-model="email"
              :rules="emailRules"
              validate-on="blur"
            >
              <template #label>
                <div>
                  メールアドレス<span class="red-text text-caption"
                    >（必須）</span
                  >
                </div>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="11">
            <v-textarea
              variant="solo"
              v-model="inquiry"
              :rules="required"
              validate-on="blur"
            >
              <template #label>
                <div>
                  お問い合わせ内容<span class="red-text text-caption"
                    >（必須）</span
                  >
                </div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn
              min-width="150"
              class="d-block mt-10 mb-16 mx-auto"
              :loading="sending"
              @click="sendEmail"
            >
              送信
            </v-btn>
          </v-col>

          <v-col cols="12">
            <div class="text-center white-text text-caption">
              ©{{ new Date().getFullYear() }} バビート株式会社
            </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <v-snackbar
      v-model="snackbar.model"
      :color="snackbar.color"
      timeout="2000"
      elevation="24"
    >
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn color="red" icon @click="snackbar.model = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

export default defineComponent({
  data() {
    return {
      company: "",
      name: "",
      email: "",
      inquiry: "",
      required: [(v: string) => v?.length > 0 || "必須項目です"],
      emailRules: [
        (v: string) => !!v || "必須項目です",
        (v: string) =>
          /.+@.+\..+/.test(v) || "正しいEmailアドレスの形式で入力してください",
      ],
      sending: false,

      ejsService: "date@wannagrow.co.jp",
      ejsTemplate: "mamaeco",

      snackbar: {
        model: false,
        color: "",
        text: "",
      },
    };
  },
  methods: {
    async sendEmail() {
      if (!(await this.validate())) return;
      const obj = {
        company: this.company,
        name: this.name,
        email: this.email,
        inquiry: this.inquiry,
      };

      this.sending = true;
      await emailjs
        .send(
          this.ejsService,
          this.ejsTemplate,
          obj,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        )
        .then((res) => {
          this.snackbar.text = "メールが送信されました";
          this.snackbar.color = "light-blue-darken-2";
          this.snackbar.model = true;
        })
        .catch((err) => {
          console.log(err);
          this.snackbar.text = "エラーが発生されました";
          this.snackbar.color = "red";
          this.snackbar.model = true;
        })
        .finally(() => {
          this.sending = false;
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
    },

    async validate() {
      const { valid } = await this.$refs.form.validate();
      return valid ? true : false;
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const background1 = document.getElementById("background");
    ScrollTrigger.create({
      trigger: background1,
      start: "top 50%",
      onEnter: () => {
        background1?.classList.add("animate-background");
      },
    });
  },
});
</script>

<style scoped>
.contents-wraper {
  background-color: #417de3;
  margin-top: -30px;
}

#background {
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

.red-text {
  color: red;
}
.white-text {
  color: white;
}
.v-btn {
  color: white;
  background-color: black;
}
.v-btn:hover {
  color: black;
  background-color: #fff700;
}
</style>
