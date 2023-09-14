<script lang="ts">

	import { MetaTags } from "svelte-meta-tags";
	import Main from "./main.svelte";
	import Footer from "./footer.svelte";
	import Source from "./src.svelte";
	import { colors } from "$lib/vars";
    import { fade, slide } from "svelte/transition";
    import type { LayoutData } from "./$types";
	import { cubicOut } from "svelte/easing";
    import { onMount } from "svelte";

	export let data: LayoutData;
	const duration = 300;
	const props = {
		duration: duration,
		easing: cubicOut
	};

	let ready = false;
	onMount(() => ready = true);

	const description = "Kanwi's (Aka. Katherine) presentation carrd with useful links, likes, etc..."
	const title = "Pretty Girl - Search"
	const imgurl = "https://files.catbox.moe/a86sxd.png"
</script>

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=poppins">

<MetaTags
	title={title}
	description={description}
	openGraph={{
		type: "website",
		url: "https://carrd.kaytea.dev",
		title: title,
		description: description,
		site_name: "Kanwi's Carrd",
		images : [
			{
				url: imgurl,
				width: 1200,
				height: 627,
				alt: "Preview of the website"
			}
		]
	}}
/>

<svelte:head>
	<title>Pretty Girl - Search</title>
	<meta name="description" content="Kanwi's (Aka. Katherine) presentation carrd with useful links, likes, etc..."/>
	<meta name="author" content="Katherine C."/>
	<meta name="og:image" content={imgurl}/>
</svelte:head>

<div id="page" style="background-color: {colors.background}">
{#if ready}
	<div id="main" in:fade={{duration:500}}>
		<Main></Main>
		{#key data.url}
		<div in:fade={props} out:fade={props}>
			<div in:slide={props} out:slide={props}>
				<slot/>
			</div>
		</div>
		{/key}
		<Footer></Footer>
	</div>
	<Source></Source>
{/if}
</div>

<style lang="scss">

@font-face {
	font-family: "Poppins";
	src: local("../lib/static/Poppins-Regular.ttf") format("ttf")
}

:global(*) {
	font-family: 'Poppins', sans-serif;
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
