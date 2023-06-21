<template>
	<div class="h-100">
		<TopNavBar/>
		<!-- <HeroSection
			class="page-wrapper"
			:isLink="false"
			:homeData="homeData"
		/> -->

		<!-- <UploadIcons/> -->
		
		<SearchBar/>
		<MainContentGrid class="page-wrapper"/>
	</div>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { useToast } from "primevue/usetoast";

export default {
	data() {
		return {
			text: ''
		};
	},

	mounted() {
	},

	methods: {
		greet() {
			const toast = useToast();
			toast.add({ severity: "info", summary: "Hello " + this.text });
		},
	},
};
</script>

<style>
/* // @import 'primeflex/primeflex.scss';
// @import 'style/utilities.scss';
// @import 'iconBrewIcons.scss'; */
</style>
