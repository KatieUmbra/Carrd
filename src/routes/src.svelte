<script lang="ts">
import FaGithub from "svelte-icons/fa/FaGithub.svelte"
let shown = false;
const showHover = () => {shown = true};
const hideHover = () => {shown = false};
</script>

<div id="main">
	<a href="https://github.com/KatieUmbra/Carrd" target="_blank" style="grid-area: left;">
		<div class="icon" on:mouseenter={showHover} on:mouseleave={hideHover}>
			<FaGithub></FaGithub>
		</div>
	</a>
	{#if shown}
		<div class="popup">
			Carrd Source
		</div>
	{/if}
</div>

<style lang="scss">
#main {
	position: absolute;
	left: 10px;
	bottom: 10px;
	display: grid;
	grid-template-areas: "left right";
	grid-template-columns: 35px auto;
	grid-template-rows: 35px;
	max-height: 35px;
	overflow: hidden;
	justify-items: stretch;
	align-items: stretch;
}
.icon {
	max-width: 35px;
	min-width: 35px;
	max-height: 35px;
	min-height: 35px;
	color: rgb(200, 200, 200);
}

.popup {
	margin: 0;
	padding: 0;
	grid-area: right;
	text-align: center;
	display: grid;
	place-items: center;
	margin-left: 10px;
	background-color: rgb(200, 200, 200);
	border-radius: 5px;
	padding: 5px;
}
</style>
