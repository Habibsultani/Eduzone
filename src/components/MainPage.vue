<template>
  <section class="bg-blue-200 h-[100vh] w-screen">
    <!-- big screen -->
    <header class="hidden md:block w-screen">
      <nav class="max-w-[1280px] mx-auto p-8">
        <ul class="flex items-center justify-between">
          <div>
            <li>
              <a
                href="#"
                class="text-center pt-10 text-gray-700 text-xl font-logo"
                >Eduzone</a
              >
            </li>
          </div>
          <div class="flex gap-6">
            <li>
              <router-link
                to="/service"
                href="#"
                class="text-lg font-vazirmtn font-bold text-gray-700 px-6 py-2 active:bg-blue-100 hover:bg-blue-100 rounded-full hover:scale-150 active:"
                >Our Service</router-link
              >
            </li>
            <li>
              <a
                href="#"
                class="text-lg font-vazirmtn font-bold text-gray-700 px-6 py-2 active:bg-blue-100 hover:bg-blue-100 rounded-full hover:scale-150"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-lg font-vazirmtn font-bold text-gray-700 px-6 py-2 active:bg-blue-100 hover:bg-blue-100 rounded-full hover:scale-150"
                >Log in
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-lg font-vazirmtn font-bol px-6 py-2 bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 rounded-full hover:scale-150"
                >Sign Up
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
    <section id="hero-big-screen" class="hidden md:block">
      <div class="w-screen">
        <div class="max-w-1280px mx-auto p-6 flex items-center gap-4">
          <div class="flex flex-col gap-5 p-10">
            <h1
              class="text-6xl tracking-widest leading-2 text-gray-800 font-vazirmtn font-bold items-start"
            >
              Providing The Best <br />
              <Span class="rounded-xl text-blue-600">Online Learning</Span
              ><br />
              Experenice
            </h1>
            <p class="text-md text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              quaerat <br />provident, dicta distinctio architecto optio et
              perferendis ullam! <br />
              Cumque deleniti
            </p>
            <div class="flex gap-4">
              <button
                class="w-32 px-4 py-2 bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 rounded-lg text-xl font-bold font-vazirmtn"
              >
                Get Start
              </button>
              <button
                class="w-48 px-4 py-2 text-gray-700 bg-blue-100 active:bg-blue-400 hover:bg-blue-300 rounded-lg text-xl font-bold font-vazirmtn"
              >
                Explore more
              </button>
            </div>
          </div>
          <main-img></main-img>
        </div>
      </div>
    </section>

    <!-- small screen part   -->
    <top-shape></top-shape>
    <div
      id="hero-small-screen"
      class="flex md:hidden gap-2 px-8 min-w-[200px] sm:min-w-1200px flex-col items-center justify-center"
    >
      <h4 class="md:hidden text-center pt-10 text-gray-700 text-xl font-logo">
        Eduzone
      </h4>
      <main-img></main-img>
      <div class="flex flex-col gap-1">
        <h1
          class="text-3xl leading-10 text-gray-800 font-vazirmtn font-bold items-start"
        >
          Providing The Best <br />
          <Span class="bg-red-50 rounded-xl">Online Learning</Span><br />
          Experenice
        </h1>
        <p
          class="text-sm items-start font-vazirmtn leading-4 text-slate-500 font-light my-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          itaque optio maxime dicta
        </p>
      </div>
      <button
        @click="GoToStartPage"
        class="w-full font-vazirmtn bg-blue-600 hover:bg-blue-700 transform-color duration-200 active:bg-blue-800 text-slate-100 py-2 text-md font-bold rounded-full"
      >
        Get started
      </button>
    </div>
  </section>
</template>

<script>
import MainImg from "../UI/MainImg.vue";
export default {
  components: {
    MainImg,
  },

  methods: {
    GoToStartPage() {
      this.$router.push("/register");
    },
  },
};
</script>
