<template>
  <section class="h-screen w-screen bg-blue-100">
    <button @click="GetTheRouter('/start')" class="p-6">
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
    <div class="flex flex-col items-center justify-center pt-48">
      <p class="text-xl font-semibold font-vazirmtn">
        You did not add any payment.
      </p>
      <button
        class="text-xl font-vazirmtn mt-10 py-2 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:rounded-full transform-color duration-300 text-white rounded-full"
      >
        Set your payment method
      </button>
    </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
export default {
  methods: {
    GetTheRouter(newRoute) {
      this.$router.push(newRoute);
    },
  },
};
</script>
