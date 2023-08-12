<script lang="ts">

	import {colors} from "$lib/vars";
	import banner from "$lib/static/banner.jpg"
	import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
	import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte"
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'
	import IoIosSync from 'svelte-icons/io/IoIosSync.svelte'
	import IoIosLock from 'svelte-icons/io/IoIosLock.svelte'
	import IoIosStar from 'svelte-icons/io/IoIosStar.svelte'

</script>

<div id="Main">
	<div id="tabs">
		<p 
			class="title" 
			style="background-color: {colors.container};">
			<b>🔎︎ Kanwi</b> - Search
		</p>
	</div>
	<div 
		id="toolbar"
		style="background-color: {colors.container};">
		<div class="icon" style="grid-area: left;"><IoIosArrowBack></IoIosArrowBack></div>
		<div class="icon" style="grid-area: right;"><IoIosArrowForward></IoIosArrowForward></div>
		<div class="icon" style="grid-area: reload;"><IoIosSync></IoIosSync></div>
		<div class="icon" style="grid-area: menu;"><IoIosMenu></IoIosMenu></div>
		<div id="searchbar" style="grid-area: search;">
			<div id="whitebar" style="background-color: {colors.background}">
				<div class="tiny-icon" style="grid-area: lock;"><IoIosLock></IoIosLock></div>
				<div class="lighter" style="grid-area: url1; justify-self: right;">https://</div>
				<div class="darker" style="grid-area: url2;">carrd.kaytea.dev</div>
				<div class="tiny-icon" style="grid-area: star; justify-self: center;"><IoIosStar></IoIosStar></div>
			</div>
		</div>
	</div>
	<div id="banner">
		<img src={banner} alt="" />
	</div>
</div>

<style lang="scss">

	$softborder: 2em;
	$iconsize: 24px;
	$tinyiconsize: 16px;
	$default: #303030;
	$defaultlight: #606060;

	#Main {
		min-width: 30vw;
		max-width: 30vw;
		display: grid;
		grid-template-areas: 
			"tabs		tabs"
			"toolbar	toolbar"
			"banner		banner"
			"nav		nav"
			"content	picture";
		row-gap: 0.25em;
	}

	#tabs {
		grid-area: tabs;
		max-width: 50%;
		align-self: left;
		.title {
			margin: 0px;
			padding: 0.125rem 0.25rem;
			border-radius: $softborder;
			border-top-right-radius: 100px;
			font-style: italic;
			user-select: none;
		}
	}

	#toolbar {
		grid-area: toolbar;
		min-width: 100%;
		padding: 0.25rem 0;
		display: grid;
		grid-template-areas: "left right reload search menu";
		grid-template-columns: $iconsize $iconsize $iconsize auto $iconsize;
		column-gap: 0.25rem;
		align-items: stretch;
		.icon {
			max-height: $iconsize;
			max-width: $iconsize;
		}
		#searchbar {
			max-height: $iconsize;
			display: grid;
			#whitebar {
				border-radius: 2.5px;
				max-height: $iconsize;
				display: grid;
				user-select: none;
				align-items: center;
				grid-template-areas: "lock url1 url2 star";
				grid-template-columns: $tinyiconsize auto auto $tinyiconsize;
				.tiny-icon {
					color: $default;
					max-height: $tinyiconsize;
					max-width: $tinyiconsize;
				}
				.darker {
					color: $default;
				}
				.lighter {
					color: $defaultlight;
				}
			}
		}
	}

	#banner {
		max-height: 10vh;
		min-width: 30vw;
		max-width: 30vw;
		overflow: hidden;
		img {
			margin-top: -120px;
			max-width: 30vw;
		}
	}

</style>
