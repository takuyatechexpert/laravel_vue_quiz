
<template>
  <div>
    <main>
      <div class="container">
        <article class="col-md-8 col-xs-12">
          <section class="article-section">
            <h2 class="mypage-h2">
              <img class="mypage__logo" src="/images/mypage-icon.png" />マイページ
            </h2>
            <h3 v-if="changeCorrectRatioData.length !== 0">直近{{changeCorrectRatioData.percentage_correct_answer.length }}回の正解率推移</h3>
            <canvas ></canvas>
          </section>
        </article>
        <the-sidebar></the-sidebar>
      </div>
    </main>
  </div>
</template>

<script>
import TheSidebar from "../layout/TheSidebar";
export default {
  components: {
    TheSidebar
  },

  data() {
    return {
      changeCorrectRatioData: []
    };
  },

  mounted() {
    this.$http.get("/api/mypage").then(response => {
      this.changeCorrectRatioData = response.data;
      console.log(this.changeCorrectRatioData);
    });
  }
};
</script>