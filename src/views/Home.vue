<template>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-center text-primary mb-10">
			📝 Meu Blog
		</h1>

		<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			<PostCard v-for="post in postsbancocarregado" :key="post._id" :post="post" />
		</div>
	</div>
</template>

<script setup>
import { posts } from "../data/posts";
import PostCard from "../components/PostCard.vue";
</script>

<script>

import PostsBanco from '../services/PostsBanco'

export default {

  data(){

    return {
		postsbancocarregado : []
    }
  },

  mounted(){
    PostsBanco.listar().then(resposta => {
      console.log(resposta.data);
      this.postsbancocarregado = resposta.data;
    })
  }

}
</script>

<style scoped>
/* Caso queira um fundo suave */
body {
	background-color: #f9fafb;
}
</style>
