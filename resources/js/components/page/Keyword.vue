<template>
  <div>
    <main>
      <div class="container">
        <article class="col-md-8 col-xs-12">
          <section>
            <h2 class="keyword-h2">
              <img class="keyword__logo" src="/images/search-mark.png" />
              【{{ initial }}】からはじまるキーワード（{{ keyword.length }}語)
            </h2>
            <dl v-for="(key, index) in keyword" :key="index">
              <dt>{{key.keyword}}</dt>
              <dd class="keyword__description">
                {{ key.description}}
                <p class="text-right">カテゴリー：{{key.category.name }}</p>
              </dd>
            </dl>
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
    TheSidebar,
  },
  data() {
    return {
      keyword: [],
      initial : '',
    }
  },
  mounted() {
    const initial = this.$route.query.initial;
    this.initial = initial;
    this.$http.get(`/api/keyword?initial=${initial}`).then(response => {
      this.keyword = response.data;
    });
  }
};
</script>
