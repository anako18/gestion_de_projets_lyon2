<template>
  <router-link to="/instructions1">
    <main class="bienvenue">
      <section>
        <div style="padding: 50px 50px 20px; text-align: center;">
          <img width="13%" src="../assets/icon.png">
        </div>
        <div style="padding: 20px;">
          <span
            class="bienvenue"
            style=" color: white; font-weight: 700; font-size: 34px; font-family: Hind; letter-spacing: 1px;"
          >
            Bienvenue chez
            <img
              width="80%"
              src="../assets/images/logo-white.png"
              style="margin-left: 40px;"
            >
          </span>
        </div>
        <img
          src="../assets/images/illustration-1.png"
          style="position: absolute; right: 95px; bottom: 0;"
        >
      </section>
    </main>
  </router-link>
</template>

<script>
export default {
  name: "BienvenueVue"
}
</script>
