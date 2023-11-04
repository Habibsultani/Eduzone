<template>
  <header class="">
    <top-shape></top-shape>
    <div class="backdrop" v-if="menuOpen" @click="openMenu"></div>
    <div
      class="OpenMenuAnimation text-2xl fixed z-40 h-screen min-w-[250px] bg-slate-50"
      v-if="menuOpen"
    >
      <div class="px-4 py-4 z-30">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <img
              src="../assets/RASHED.jpg"
              alt="userPhoto"
              class="w-18 bg-contain h-20 rounded-full-"
            />
            <p class="text-[16px] font-vazirmtn font-semibold leading-6">
              Ahmad <br />
              Rhasid
            </p>
          </div>
          <button @click="openMenu">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg> -->
            <svg
              @click="closeBar"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
        <hr class="border-[1.78px] w-[100%] mt-6 bg-gray-900" />
        <div class="px-3">
          <ul class="py-5">
            <li>
              <button
                @click="GetTheRouter('my-learning')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                  <path
                    d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"
                  />
                </svg>
                <p class="text-[18px] font-vazirmtn">my Learnings</p>
              </button>
            </li>
            <li>
              <button
                @click="GetTheRouter('/notification')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
                  ></path>
                </svg>
                <p class="text-[18px] font-vazirmtn">Notification</p>
              </button>
            </li>
            <li>
              <button
                @click="GetTheRouter('/my-payment')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
                <p class="text-[18px] font-vazirmtn">My Payment</p>
              </button>
            </li>
            <li>
              <button
                @click="GetTheRouter('/saved')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
                <p class="text-[18px] font-vazirmtn">Saved</p>
              </button>
            </li>
            <li>
              <button
                @click="GetTheRouter('/service')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                <p class="text-[18px] font-vazirmtn">Our Services</p>
              </button>
            </li>
            <li>
              <button
                @click="GetTheRouter('/about')"
                class="flex items-center gap-3 p-2 w-48 hover:scale-105 transform-scale duration-300 hover:bg-slate-300 hover:rounded-xl active:bg-slate-400 active:rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <p class="text-[18px] font-vazirmtn">About</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="flex items-center justify-between p-10">
      <div class="">
        <button class="fixed z-20 top-50" @click="openMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="bevel"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <button
          class="fixed right-[48px] z-20"
          @click="GetTheRouter('/search')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="bevel"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import TopShape from "./TopShape.vue";
export default {
  components: { TopShape },
  data() {
    return {
      menuOpen: false,
      searchOpen: false,
      closeAni: false,
    };
  },

  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeBar() {
      this.closeAni = true;
    },

    openTheSearchBar() {
      this.searchOpen = !this.searchOpen;
    },

    GetTheRouter(newRoute) {
      this.$router.push(newRoute);
    },
  },
};
</script>
