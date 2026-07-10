'<template>
	<div class="h-100 dark">
		<UNotifications class="dark" />

		<div id="topArea" class="sticky w-full z-10 top-0 bg-gray-900/50 backdrop-blur-md">
			<TopNavBar/>
			<SearchBar/>
		</div>
		<!-- <HeroSection
			class="page-wrapper"
			:isLink="false"
			:homeData="homeData"
		/> -->

		<MainContentGrid class="page-wrapper"/>
	</div>
</template>

<script>
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

