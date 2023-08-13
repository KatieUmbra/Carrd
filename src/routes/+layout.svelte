<script lang="ts">

	import Main from "./main.svelte";
	import { colors } from "$lib/vars";

</script>

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=poppins">

<div id="page" style="background-color: {colors.background}"> 
	<div id="main">
		<Main></Main>
		<slot></slot>
	</div>
</div>

<style lang="scss">

:global(*) {
	font-family: 'poppins';
}

#page {
	min-width: 100vw;
	min-height: 100vh;
	margin: 0;
	padding: 0px;
	overflow: scroll;
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
}

</style>
