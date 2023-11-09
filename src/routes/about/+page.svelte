<script lang="ts">
	import sunset from "$lib/static/sunset.gif"
	import sky from "$lib/static/sky.jpg"
</script>

<div id="Main">
	<div class="img1">
		<div class="img-wrapper">
			<img src={sunset} alt="Sunset GIF"/>
		</div>
	</div>
	<div class="games-music">
		<p class="title"><b>Games!</b></p>
		<p class="bm">CS2. <b>Minecraft</b>. Roblox. <b>VrChat.</b></p>
		<p class="title"><b>Aesthetics!</b></p>
		<p class="bm"><b>weirdcore</b>. vaporwave. traumacore*. dreamcore. <b>grunge</b>. dark academia. <b>angelcore</b>. kidcore</p>. <b>yume kawaii</b>. gurokawaii.
		<p class="title"><b>Music</b></p>
		<p><b>Bedroom pop</b>. pop. <b>weirdcore.</b> rock.</p>
	</div>
	<div class="img2">
		<div class="img-wrapper">
			<img src={sky} alt="Sunset"/>
		</div>
	</div>
	<div class="hobbies-themes">
		<p class="title"><b>Hobbies!</b></p>
		<p class="bm">piano. coding. <b>gamedev</b>. <b>sysdev</b>. Jvm dev. videogames. <b>writing</b>. singing. graphic design.</p>
		<p class="title"><b>Themes!</b></p>
		<p><b>Liminal Spaces</b>. the backrooms. true crime. <b>Horror</b>. sci-fi. <b>Math</b>. music composing. <b>Cyberpunk Anime</b>.</p>
	</div>
</div>

<style lang="scss">

	$container: #cccccc;

	#Main {
		display: grid;
		min-width: 25vw;
		max-width: 25vw;
		grid-template-areas: 
		"img1 games-music games-music"
		"hobbies-themes hobbies-themes img2";
		grid-template-columns: 45% 10% 45%;
		row-gap: 0.5em;
		place-items: center;
		.img1, .img2 {
			width: 100%;
			height: 100%;
			grid-area: img1;
			display: grid;
			align-items: center;
			justify-items: center;
		}
		.img2 {
			grid-area: img2;
		}

		@media screen and (max-width: 450px) {
			.img1 {
				margin-top: 1em;
			}
		}

		.games-music, .hobbies-themes {
			background-color: $container;
			grid-area: games-music;
			padding: 0.25em 0.5em;
			p {
				margin: 0;
				font-size: 8pt;
				text-align: justify;
			}
			.title {
				margin: 0;
				font-style: italic;
			}
			.bm {
				margin-bottom: 0.5em;
			}
		}
		.hobbies-themes {
			grid-area: hobbies-themes;
			max-width: 100%;
		}
	}

	@media screen and (max-width: 450px) {
		#Main {
			min-width: 70vw;
			max-width: 70vw;
			grid-template-areas: 
			"img1"
			"games-music"
			"img2"
			"hobbies-themes";
			grid-template-columns: 100%;
			column-gap: 0;
		}
	}

	.img-wrapper {
		display: grid;
		place-items: center;
		width: 95%;
		height: auto;
		border-radius: 10px;
		overflow: hidden;
		img {
			max-width: 150%;
		}
	}

</style>
