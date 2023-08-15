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
				<div class="url-wrapper">
					<div class="lighter">https://</div>
					<div class="darker">carrd.kaytea.dev</div>
				</div>
				<div class="tiny-icon" style="grid-area: star; justify-self: center;"><IoIosStar></IoIosStar></div>
			</div>
		</div>
	</div>
	<div id="banner">
		<img src={banner} alt="" />
	</div>
	<div id="navi">
		<a 
			class="btn"
			href="/"
			style="background-color: {colors.container};">
			Home
		</a>
		<a class="btn" href="/about" style="background-color: {colors.container};">
			About
		</a>
	</div>
	<div id="content">
		<div style="font-size: 11pt;"><b style="font-style: italic;">Kanwi</b> (Kathy)</div>
		<div style="text-align: center; font-size: 9pt; display: grid;">
			<p class="inline">She / They | 19 |
			<span class="trans"><b>MtF</b></span> 
			<span class="lesbian"><b>Lesbian</b></span>
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
</div>

<style lang="scss">

	$softborder: 2em;
	$iconsize: 24px;
	$tinyiconsize: 16px;
	$default: #303030;
	$defaultlight: #606060;

	@media screen and (max-width: 450px) {
		#Main {
			max-width: 70vw;
			min-width: 70vw;
			grid-template-areas: 
				"tabs		tabs"
				"toolbar	toolbar"
				"banner		banner"
				"nav		nav"
				"content	content"
				"picture	picture";
			grid-template-rows: auto auto 7.5vh auto auto auto;
		}

		#tabs {
			max-width: 70%;
		}

		#whitebar {
			display: none;
		}
	}

	@media screen and (min-width: 450px) {
		#Main {
			max-width: 25vw;
			min-width: 25vw;
			grid-template-areas: 
				"tabs		tabs"
				"toolbar	toolbar"
				"banner		banner"
				"nav		nav"
				"content	picture";
			grid-template-rows: auto auto 7.5vh auto auto;
		}

		#tabs {
			max-width: 50%;
		}

		#whitebar {
			display: grid;
		}
	}

	#Main {
		display: grid;
		grid-template-columns: 49% 49%;
		row-gap: 0.25em;
		column-gap: 2%;
	}

	#tabs {
		grid-area: tabs;
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
				user-select: none;
				align-items: center;
				grid-template-areas: "lock url star";
				grid-template-columns: $tinyiconsize auto $tinyiconsize;
				.tiny-icon {
					display: grid;
					place-items: center;
					color: $default;
					max-height: $tinyiconsize;
					max-width: $tinyiconsize;
				}
				.darker {
					color: $default;
					grid-area: right;
					justify-self: left;
				}
				.lighter {
					color: $defaultlight;
					grid-area: left;
					justify-self: right;
				}
			}
		}
	}

	.url-wrapper {
		display: grid;
		grid-area: url;
		grid-template-areas: "left right";
		grid-template-columns: auto auto;
		justify-self: stretch;
		width: inherit;
		overflow: hidden;
	}

	#banner {
		grid-area: banner;
		max-height: 100%;
		min-width: 100%;
		overflow: hidden;
		img {
			margin-top: -60px;
			max-width: 100%;
		}
	}

	@media screen and (min-width: 450px) {
		#banner img {
			margin-top: -150px;
		}
	}

	@keyframes hover {
		from {
			color: $default;
		}

		to {
			color: $defaultlight;
		}
	}

	#navi {
		grid-area: nav;
		display: grid;
		grid-template-areas: "home about";
		column-gap: 0.25rem;
		.btn {
			text-align: center;
			padding: 0.125rem;
			border: 0;
			font-size: 11pt;
			color: $default;
			text-decoration: none;
			&:hover {
				cursor: pointer;
				animation: 0.5s hover;
				color: $defaultlight;
			}
		}
	}

	#content {
		grid-area: content;
		display: grid;
		place-items: center;
		width: 100%;
		overflow: auto;
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
		margin: 0.5em 0;
		p {
			font-size: 10pt;
			margin: 4px 0;
		}
	}
</style>
