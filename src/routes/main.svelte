<script lang="ts">

	import Links from "./links.svelte";
	import {colors} from "$lib/vars";
	import banner from "$lib/static/banner.jpg"
	import picture from "$lib/static/picture.jpg"
	import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte'
	import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte"
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'
	import IoIosSync from 'svelte-icons/io/IoIosSync.svelte'
	import IoIosLock from 'svelte-icons/io/IoIosLock.svelte'
	import IoIosStar from 'svelte-icons/io/IoIosStar.svelte'
    import { redirect } from "@sveltejs/kit";
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte'

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
	<div id="navi">
		<button class="btn" on:click={() => {throw redirect(308, "/");}} style="background-color: {colors.container};">
			Home
		</button>
		<button class="btn" on:click={() => {throw redirect(308, "/about")}} style="background-color: {colors.container};">
			About
		</button>
	</div>
	<div id="content">
		<div style="font-size: 14pt;"><b style="font-style: italic;">Kanwi</b> (Kathy)</div>
		<div style="text-align: center; font-size: 11pt; display: grid;">
			<p class="inline">She / They | 19 |
			<span class="trans">MtF</span> 
			<span class="lesbian">Lesbian</span>
			 | Cancer | ES/EN</p>
		</div>

		<Links></Links>

		<div class="outline">
			<p>（＾▽＾）<b>weirdcore</b>. <b>Lain</b>. Internet aesthetics. <b>Dark themes</b>. Minecraft. <b>traumacore</b></p>
		</div>
		<div class="outline">
			<p>（ T ^ T ）gore. <b>bigotry</b>. conflict. hatred. <b>drama</b></p>
		</div>
	</div>
	<div id="picture">
		<img src={picture} alt=""/>
	</div>
	<div id="song">
		<div class="out">
			<div class="in"></div>
			<div class="play-icon"><FaPlay></FaPlay></div>
			<div class="song-title">Cinammon Girl - Lana del Rey</div>
			<div class="duration">1:53 : <b>5:00</b></div>
		</div>
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
			"content	picture"
			"song		song"
			"player		player";
		grid-template-columns: 50% 50%;
		row-gap: 0.25em;
		column-gap: 0.25rem;
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
				grid-template-columns: $tinyiconsize 15% auto $tinyiconsize;
				.tiny-icon {
					display: grid;
					place-items: center;
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
		grid-area: banner;
		max-height: 100%;
		min-width: 100%;
		overflow: hidden;
		img {
			margin-top: -180px;
			max-width: 100%;
		}
	}

	#navi {
		grid-area: nav;
		display: grid;
		grid-template-areas: "home about";
		column-gap: 0.25rem;
		.btn {
			padding: 0.25rem;
			border: 0;
			font-size: 14pt;
		}
	}

	#content {
		grid-area: content;
		display: grid;
		place-items: center;	
	}

	#picture {
		grid-area: picture;
		min-width: 100%;
		overflow: hidden;
		display: grid;
		place-items: center;
		img {
			min-width: inherit;
			max-width: 100%;
			border-radius: 5px;
		}
	}

	.lesbian {
		display: inline;
		background: linear-gradient(to right, rgb(213, 44, 0), rgb(226, 150, 136), rgb(180, 180, 180), rgb(210, 127, 164), rgb(162, 2, 98));
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.trans {
		background: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(180, 180, 180), rgb(247, 168, 184), rgb(179, 157, 233), rgb(85, 205, 252));
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.inline {
		display: inline;
	}

	.outline {
		border: 1px;
		border-color: rgb(200, 200, 200);
		border-style: double;
		display: grid;
		place-items: center;
		text-align: center;
		padding: 4px 8px;
		p {
			margin: 4px 0;
		}
	}

	#song {
		grid-area: song;
		margin-top: 0.5em;
		.out {
			display: grid;
			grid-template-areas: "icon title empty time";
			grid-template-columns: 10% 50% auto 15%;
			align-items: center;
			min-width: 100%;
			max-width: 100%;
			min-height: 100%;
			max-height: 100%;
			border: 1px;
			border-color: rgb(200, 200, 200);
			border-style: double;
			position: relative;
			.in {
				position: absolute;
				width: 38%;
				min-height: inherit;
				max-height: inherit;
				background-color: rgb(200, 200, 200);
				z-index: 0;
			}
			.play-icon {
				grid-area: icon;
				z-index: 2;
				max-height: 17px;
				max-width: 17px;
				justify-self: center;
			}
			.song-title {
				grid-area: title;
				z-index: 2;
				align-self: center;
			}
			.duration {
				grid-area: time;
				z-index: 2;
			}
		}
	}

</style>
