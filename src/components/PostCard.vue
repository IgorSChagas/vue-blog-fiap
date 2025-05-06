<template>
	<Accordion :multiple="true" class="mb-4">
		<AccordionTab :header="post.title">
			<p class="text-gray-700 mb-3">{{ post.description }}</p>
			<router-link :to="`/post/${post.slug}`">
				<Button label="Ler mais" class="p-button-sm" severity="contrast" />
			</router-link>
		</AccordionTab>
	</Accordion>
</template>

<script setup>
import Button from "primevue/button";
defineProps({ post: Object });
</script>
