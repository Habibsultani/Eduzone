<template>
  <section class="h-screen w-screen bg-blue-50">
    <div class="max-w-sm mx-auto px-4 py-6">
      <div class="flex items center gap-3">
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
        <input
          type="search"
          placeholder="Search your course..."
          class="grow p-3 rounded-full bg-gray-200 border-[1.75px] border-gray-700"
        />
      </div>
      <div class="flex flex-col items-center justify-center pt-36">
        <P class="text-[16px] font-semibold font-vazirmtn"
          >No internet Connection</P
        >
        <p class="text-[14px] font-vazirmtn">
          Try these steps to get back online:
        </p>
        <div class="p-4 flex gap-2 flex-col">
          <div class="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-vazirmtn">Check your modem and router</p>
          </div>
          <div class="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p class="font-vazirmtn">Reconnect to Wi-Fi</p>
          </div>
        </div>
        <button
          class="px-6 py-2 font-vazirmtn bg-sky-700 active:bg-sky-800 active:rounded-full text-white rounded-full my-4"
        >
          Open Network Setting
        </button>
        <button
          @click="GetTheRouter('/start')"
          class="px-6 py-2 font-vazirmtn bg-green-700 active:bg-green-800 active:rounded-full text-white rounded-full my-4"
        >
          Back to home
        </button>
      </div>
    </div>
  </section>
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
