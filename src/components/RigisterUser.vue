<template>
  <section class="h-screen w-screen bg-blue-50">
    <div class="flex flex-col gap-4 max-w-sm mx-auto px-4 py-4">
      <router-link to="/home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.1"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </router-link>
      <div class="flex items-center flex-col justify-center pt-7">
        <h2
          class="text-center font-vazirmtn text-gray-700 text-2xl font-semibold leading-10"
        >
          Welcome to <br />
          your Online Course
        </h2>
        <form action="" class="flex flex-col gap-4 p-8 mt-4 max-w-sm">
          <input
            type="text"
            id="name"
            placeholder="Type your name"
            class="grow p-2 px-4 min-w-[250px] rounded-2xl border-2 border-sky-300 shadow-lg"
          />
          <input
            type="text"
            id="name"
            placeholder="Type your last name"
            class="grow p-2 px-4 min-w-[250px] rounded-2xl border-2 border-sky-300 shadow-lg"
          />
          <input
            type="text"
            id="name"
            placeholder="email, example@gmail.com"
            class="grow p-2 px-4 min-w-[250px] rounded-2xl border-2 border-sky-300 shadow-lg"
          />
          <input
            type="text"
            id="name"
            placeholder="Password"
            class="grow p-2 px-4 min-w-[250px] rounded-2xl border-2 border-sky-300 shadow-lg"
          />
          <input
            type="text"
            id="name"
            placeholder="Confirm Password"
            class="grow p-2 px-4 min-w-[250px] rounded-2xl border-2 border-sky-300 shadow-lg"
          />
          <input
            type="button"
            id="name"
            value="Register"
            placeholder="Confirm Password"
            class="grow p-2 bg-sky-400 font-vazirmtn px-4 min-w-[250px] rounded-2xl border-2 shadow-lg border-sky-300 mt-6 cursor-pointer hover:bg-sky-700 hover:text-white active:bg-sky-800 active:rounded-2xl active:text-white"
          />
          <router-link to="login" class="underline font-vazirmtn"
            >Already registered?</router-link
          >
        </form>
      </div>
    </div>
  </section>
</template>
