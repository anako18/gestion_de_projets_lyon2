<template>
  <main class="bienvenue">
    <section>
      <router-link to="/instructions1">
        <div style=" padding: 50px 50px 20px;text-align: center;">
          <img
            width="13%"
            src="../assets/icon.png"
          >
        </div>
        <div style="padding: 20px;">
          <span class="bienvenue">
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
          style="position: absolute;right: 95px;bottom: -10px;"
        >
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: "BienvenueVue"
}
</script>
