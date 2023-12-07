<template>
  <section :class="{ bigOldStyleContainer: isOldscreen }">
    <!-- ******************************************************************************************************************************************** -->

    <!-- this the new testing ui for big screen in the hero section and the main page -->

    <section class="md:max-w-[1280px] mx-auto hidden md:block px-5">
      <!-- The hero section  -->
      <div id="hero-section" class="h-screen">
        <header class="container max-w-[1280px] mx-auto px-5 fixed">
          <nav class="py-6 flex justify-between align-center">
            <!-- Here is the logo place -->
            <h2 class="text-center text-gray-700 text-xl font-logo">Eduzone</h2>
            <ul class="flex gap-4 align-baseline">
              <li>
                <button class="btn-nav font-vazirmtn">about us</button>
              </li>
              <li>
                <button class="btn-nav font-vazirmtn">our service</button>
              </li>
              <li>
                <button class="btn-nav font-vazirmtn">your cart</button>
              </li>
            </ul>
            <button class="animated-button-nav">
              <span class="font-vazirmtn">Sign up</span>
              <span></span>
            </button>
          </nav>
        </header>
        <div
          id="hero-child-section"
          class="container flex align-center justify-center pt-48"
        >
          <div class="flex flex-col">
            <h1
              class="text-6xl text-center font-vazirmtn font-bold text-teal-950 leading-snug tracking-wider"
            >
              Unlock Your <br />
              Learning Potential
            </h1>
            <p
              class="text-center text-lg tracking-widest text-teal-900 font-semibold"
            >
              High-Quality Education, Accessable Anywhere
            </p>
            <div class="flex gap-5 align-center justify-center mt-10">
              <button class="animated-button-register">
                <span class="font-vazirmtn">Register</span>
                <span></span>
              </button>
              <!-- <button
              class="text-lg text-white px-14 py-3 rounded-full bg-teal-950"
            >
              Register
            </button> -->
              <button
                class="text-md font-vazirmtn font-bold px-8 py-3 rounded-full border-2"
              >
                Sign in <span class="ml-1">&#x2197;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- The testemonials part -->
      <div id="testemonials" class="bg-teal-900 p-10 rounded-[10px]">
        <div class="flex gap-3">
          <div>
            <h1
              class="text-center text-3xl text-white font-bold font-vazirmtn my-3"
            >
              1M+
            </h1>
            <p
              class="text-md text-center font-vazirmtn text-teal-50 p-6 flex-wrap border-r-2 border-teal-700"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              explicabo culpa architecto consectetur quidem aliquid, iste nihil
              minus cum quas
            </p>
          </div>
          <div>
            <h1
              class="text-center text-3xl text-white font-bold font-vazirmtn my-3"
            >
              500+
            </h1>
            <p
              class="text-md text-center font-vazirmtn text-teal-50 p-6 flex-wrap border-r-2 border-teal-700"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              explicabo culpa architecto consectetur quidem aliquid, iste nihil
              minus cum quas
            </p>
          </div>
          <div>
            <h1
              class="text-center text-3xl text-white font-bold font-vazirmtn my-3"
            >
              98%
            </h1>
            <p
              class="text-md text-center font-vazirmtn text-teal-50 p-6 flex-wrap"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              explicabo culpa architecto consectetur quidem aliquid, iste nihil
              minus cum quas
            </p>
          </div>
        </div>
        <!-- This buttton must be correct in the future -->
        <!-- <button class="text-white text-center block">Learn more</button> -->
      </div>
      <!-- The Who we are section  -->
      <div id="who-we-are" class="h-[95vh]">
        <div
          class="flex items-center justify-center gap-1 flex-col mb-10 mt-28"
        >
          <whowe-are></whowe-are>
          <h2 class="text-center font-vazirmtn font-semibold text-4xl mb-6">
            Who We Are?
          </h2>
          <p class="max-w-[500px] text-center leading-[27px] font-vazirmtn">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo saepe
            quos hic quidem fugiat. Optio expedita suscipit ad non dolore
            molestias. Veniam, dicta maiores blanditiis ipsam facilis officia
            aliquam tempora!
          </p>
        </div>
      </div>
    </section>
    <!-- Our Students opiniion -->

    <div class="h-[95vh] w-screen bg-slate-400 relative">
      <div class="max-w-[1280px] mx-auto px-6 py-5">
        <h2 class="text-4xl font-semibold font-vazirmtn">
          Our student opinion
        </h2>
        <div
          class="absolute top-[50%] translate-y-[-50%] left-0 h-[300px] w-[200px] p-10 bg-red-500"
        >
          Here is a card
        </div>
      </div>
    </div>

    <!-- *******************************************************************************************************************************************************-->
    <!-- big screen -->
    <!-- <header
      :class="{ glassHeader: isGlass }"
      class="hidden md:block w-screen fixed"
    >
      <nav class="max-w-[1280px] mx-auto p-6">
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

    <section
      id="hero-big-screen"
      class="hidden max-w-[1280px] mx-auto md:block pt-24"
    >
      <div class="">
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
              <button class="cssbuttons-io-button">
                Get started
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
              <button>
                <p>Subscribe</p>
                <svg
                  stroke-width="4"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <img
                src="../assets/people/customer-01.jpg"
                alt="customer"
                class="h-12 rounded-full hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-02.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-03.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-04.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-05.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-06.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-07.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-08.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-01.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <img
                src="../assets/people/customer-01.jpg"
                alt="customer"
                class="h-12 rounded-full ml-[-30px] hover:scale-125 animation-scale duration-150"
              />
              <p class="font-vazirmtn text-md ml-4">
                <span class="font-bold text-blue-600">+1000K</span> users usinng
                this app.
              </p>
            </div>
          </div>
          <main-img></main-img>
        </div>
      </div>
    </section>
    <section class="hidden md:block">
      <the-footer></the-footer>
    </section> -->

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
        @click="GoToStartPage('/register')"
        class="w-full font-vazirmtn bg-blue-600 hover:bg-blue-700 transform-color duration-200 active:bg-blue-800 text-slate-100 py-2 text-md font-bold rounded-full"
      >
        Get started
      </button>
    </div>
  </section>
</template>

<script>
import MainImg from "../UI/MainImg.vue";
import WhoweAre from "../UI/imgs/WhoWeAre.vue";
export default {
  components: {
    MainImg,
    WhoweAre,
  },

  data() {
    return {
      isGlass: false,
      isOldscreen: false,
    };
  },

  methods: {
    GoToStartPage(router) {
      this.$router.push(router);
    },

    makingGlassy() {
      this.isGlass = true;
      console.log("scrollong");
    },
  },

  mounted() {
    window.addEventListener("scroll", this.makingGlassy);
  },
};
</script>
