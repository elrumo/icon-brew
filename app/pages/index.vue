<template>
	<div class="min-h-screen bg-white">
		<div id="topArea" class="sticky w-full z-20 top-0 bg-white/85 backdrop-blur-md border-b border-zinc-200/70">
			<TopNavBar/>
			<div class="border-t border-zinc-100">
				<SearchBar/>
			</div>
		</div>

		<MainContentGrid class="page-wrapper"/>
	</div>
</template>

<script setup>
</script>
