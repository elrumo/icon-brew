<template>
	<div class="h-100 dark">
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

<script>
// import { defineComponent } from "vue";
// import { useToast } from "primevue/usetoast";

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
