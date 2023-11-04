<template>
  <section class="bg-blue-200 h-[100vh] w-screen">
    <header class="hidden md:block w-screen">
      <nav class="w-[1280px] mx-auto p-8">
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
              <a href="#">Our Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Log in </a>
            </li>
            <li>
              <a href="#">Sign Up </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
    <top-shape></top-shape>
    <div
      class="flex md:flex-row gap-2 px-8 min-w-[200px] sm:min-w-1200px flex-col items-center justify-center"
    >
      <h4 class="text-center pt-10 text-gray-700 text-xl font-logo">Eduzone</h4>
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
