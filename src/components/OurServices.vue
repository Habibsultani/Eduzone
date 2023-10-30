<template>
  <section class="h-screen w-screen bg-blue-100">
    <div class="max-w-sm mx-auto px-6 pt-6">
      <button @click="GetTheRouter('/start')">
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
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <div class="flex flex-col pt-8 items-center justify-center gap-6">
        <h2 class="text-2xl font-semibold text-gray-700 font-vazirmtn">
          Our Services.
        </h2>
        <p class="text-lg text-gray-600">
          <span class="font-semibold font-vazirmtn">Eduzone</span> serves as an
          online learning platform, offering a diverse range of high-quality,
          up-to-date courses. <br />
          Presently, our offerings are primarily focused on online courses;
          however, we have ambitious plans for expansion into various domains,
          such as web development and freelancing. For the latest updates on our
          future initiatives, we encourage you to follow our Instagram page.
        </p>
        <button
          class="text-xl mt-10 font-vazirmtn py-2 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:rounded-full transform-color duration-300 text-white rounded-full"
        >
          ❤️ Make a donation
        </button>
        <button
          @click="GetTheRouter('/start')"
          class="text-xl py-2 font-vazirmtn px-4 bg-green-600 hover:bg-green-700 active:bg-green-800 active:rounded-full transform-color duration-300 text-white rounded-full"
        >
          Back home
        </button>
      </div>
    </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../UI/TheHeader.vue";
export default {
  components: { TheHeader },
  methods: {
    GetTheRouter(newRoute) {
      this.$router.push(newRoute);
    },
  },
};
</script>
