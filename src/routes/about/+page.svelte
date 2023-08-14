<script lang="ts">
	import sunset from "$lib/static/sunset.gif"
	import sky from "$lib/static/sky.jpg"
</script>

<div id="Main">
	<div class="img1">
		<img src={sunset} alt="Sunset GIF"/>
	</div>
	<div class="games-music">
		<p class="title"><b>Games!</b></p>
		<p class="bm">valorant. <b>Minecraft</b>. geometry dash. roblox. <b>VrChat.</b></p>
		<p class="title"><b>Aesthetics!</b></p>
		<p class="bm"><b>weirdcore</b>. vaporwave. outrun. traumacore. dreamcore. <b>grunge</b>. dark academia. <b>angelcore</b>. kidcore</p>
		<p class="title"><b>Music</b></p>
		<p><b>Bedroom pop</b>. pop. <b>weirdcore.</b> rock.</p>
	</div>
	<div class="img2">
		<img src={sky} alt="Sunset"/>
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
		overflow: auto;
		display: grid;
		min-width: 30vw;
		max-width: 30vw;
		grid-template-areas: 
		"img1 games-music games-music"
		"hobbies-themes hobbies-themes img2";
		place-items: center;
		gap: 1em;
		.img1, .img2 {
			padding: 0.1em;
			grid-area: img1;
			img {
				border-radius: 10px;
			}
		}
		.img2 {
			grid-area: img2;
			img {
				max-width: 15vw;
			}
		}

		@media screen and (max-width: 450px) {
			.img2, .img1 {
				img {
					max-width: 60vw;
				}
			}

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
				font-size: 10pt;
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
		}
	}

	@media screen and (max-width: 450px) {
		#Main {
			min-width: 60vw;
			max-width: 60vw;
			grid-template-areas: 
			"img1"
			"games-music"
			"img2"
			"hobbies-themes";
		}
	}

</style>
