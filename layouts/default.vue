<template>
  <div>
    <img id="floating-logo" src="/logo.svg" alt="logo" />
  
    <div id="floating-menu">
      <div class="menu-wraper">
        <v-icon id="icon" color="black" class="clickable" @click="expandMenu">
          {{ menuExpanded ? "mdi-close" : "mdi-menu" }}
        </v-icon>
  
        <div v-if="showMenu" class="menu">
          <div
            v-for="menu in menus"
            :key="menu.name"
            class="menu-items clickable my-4 my-sm-8"
            @mouseenter="moveMenuItems"
            @mouseleave="moveMenuItems"
            @click="goTo(menu.id)"
          >
            <div class="text-16 font-weight-bold">{{ menu.name }}</div>
            <img :src="menu.icon" class="menu-title" />
          </div>
        </div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  const menuExpanded = ref(false);
  const showMenu = ref(false);
  const menus = ref([
    {
      name: "チーム",
      id: "team",
      icon: "/team.svg",
    },
    {
      name: "プロダクト一覧",
      id: "products",
      icon: "/products.svg",
    },
    {
      name: "会社概要",
      id: "company",
      icon: "/company.svg",
    },
    {
      name: "お問い合わせ",
      id: "contact",
      icon: "/contact.svg",
    },
  ]);

  watch(menuExpanded, (val) => {
    if (val) setTimeout(() => (showMenu.value = true), 250);
    else showMenu.value = false;
  });

  const expandMenu = () => {
    menuExpanded.value = !menuExpanded.value;
    const el = document.getElementById("floating-menu");
    if (el?.classList.contains("expand-menu")) {
      el.classList.remove("expand-menu");
      el.classList.add("shrink-menu");
    } else if (el?.classList.contains("shrink-menu")) {
      el.classList.remove("shrink-menu");
      el.classList.add("expand-menu");
    } else {
      el?.classList.add("expand-menu");
    }
  };
  const moveMenuItems = (e: Event) => {
    const el = e.target as HTMLElement;
    if (el.classList.contains("move-right")) {
      el.classList.remove("move-right");
      el.classList.add("move-left");
    } else if (el.classList.contains("move-left")) {
      el.classList.remove("move-left");
      el.classList.add("move-right");
    } else {
      el.classList.add("move-right");
    }
  };

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

useHead({
  title: "VAbeat｜バビート株式会社",
  htmlAttrs: { lang: "ja" },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "バビート株式会社のコーポレートサイトです。良い！と判断したプロダクトをどんどんカタチにすることを掲げています。",
    },
    { name: "format-detection", content: "telephone=no" },
    {
      hid: "keywords",
      name: "keywords",
      content: "バビート株式会社 , VAbeat , バビート",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "VAbeat｜バビート株式会社",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "バビート株式会社のコーポレートサイトです。良い！と判断したプロダクトをどんどんカタチにすることを掲げています。",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://vabeat.co.jp",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `/linkcard.jpg`,
    },
    
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
})
</script>

<style scoped lang="scss">
#floating-logo {
  position: absolute;
  top: 38px;
  left: 30px;
  width: 233px;
}
// floating menu
#floating-menu {
  z-index: 10;
  position: fixed;
  width: 70px;
  height: 70px;
  top: 20px;
  right: 30px;
  background-color: #fff700;
  border-radius: 35px;
  box-shadow: 5px 5px black;
  .menu-wraper {
    position: relative;
    width: 100%;
    padding-top: 3em;
    #icon {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 40px;
    }
    .menu {
      position: relative;
      padding-left: 2em;
    }
  }
}
.menu-title {
  height: 60px;
}
.expand-menu {
  animation: expand 0.25s ease-in forwards;
}
.shrink-menu {
  animation: shrink 0.25s ease-in forwards;
}
@keyframes expand {
  0% {
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
  100% {
    width: 467px;
    height: 615px;
    border-radius: 15px;
  }
}
@keyframes shrink {
  0% {
    width: 467px;
    height: 615px;
    border-radius: 15px;
  }
  100% {
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
}

// menu item animations
.move-right {
  animation: to-right 0.2s ease-in forwards;
}
.move-left {
  animation: to-left 0.2s ease-in forwards;
}

@keyframes to-right {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 30px;
  }
}
@keyframes to-left {
  0% {
    margin-left: 30px;
  }
  100% {
    margin-left: 0;
  }
}

@media only screen and (max-width: 600px) {
  #floating-logo {
    position: absolute;
    top: 15px;
    left: 7px;
    width: 100px;
  }
  #floating-menu {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 7px;
    .menu-wraper {
    padding-top: 2em;
      #icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
      }
      .menu {
        position: relative;
        padding-left: 1em;
      }
    }
  }
  .menu-title {
    height: 30px;
  }
  @keyframes expand {
    0% {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    100% {
      width:  256px;
      height: 382px;
      border-radius: 15px;
    }
  }
  @keyframes shrink {
    0% {
      width: 256px;
      height: 382px;
      border-radius: 15px;
    }
    100% {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }
}
</style>

<style>
.container-1285 {
  max-width: 1285px;
}
.container-1200 {
  max-width: 1200px;
}
.container-800 {
  max-width: 800px;
}
.clickable {
  cursor: pointer;
}
.text-16 {
  font-size: 16px;
}
.title-wraper {
  padding: 4em 0;
}
.text-white {
  color: white;
}
.hr-white {
  background-color: white;
  height: 1px;
}
</style>
