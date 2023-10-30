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
    <div class="flex items-center justify-center pt-48">
      <p class="text-xl font-vazirmtn">There is not any saved items.</p>
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
