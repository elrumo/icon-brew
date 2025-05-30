<template>
	<div class="h-100 dark">
		<div id="topArea" class="sticky w-full z-10 top-0 bg-gray-900/80 backdrop-blur-md">
			<TopNavBar/>
			<SearchBar/>
		</div>
		<!-- <HeroSection
			class="page-wrapper"
			:isLink="false"
			:homeData="homeData"
		/> -->

		<!-- <UploadIcons/> -->

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
