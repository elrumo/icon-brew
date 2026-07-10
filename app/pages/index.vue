<template>
	<div class="min-h-screen" style="background: var(--surface-subtle)">
		<div id="topArea" class="sticky w-full z-20 top-0 backdrop-blur-md" style="background: color-mix(in srgb, var(--surface-subtle) 80%, transparent); border-bottom: 1px solid var(--border-color)">
			<TopNavBar/>
			<div style="border-top: 1px solid var(--border-color)">
				<SearchBar/>
			</div>
		</div>

		<MainContentGrid class="page-wrapper"/>
	</div>
</template>

<script setup>
</script>
