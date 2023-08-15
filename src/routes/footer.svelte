<script lang="ts">
	import FaPlay from "svelte-icons/fa/FaPlay.svelte";
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte'
</script>

<div id="Main">
	<div id="song">
			<div class="out">
			<div class="in"></div>
			<div class="play-icon"><FaPlay></FaPlay></div>
			<div class="song-title">Cinammon Girl - Lana del Rey</div>
			<div class="duration">1:53 : <b>5:00</b></div>
		</div>
	</div>
	<div id="player">
		<div style="grid-area: left; justify-self: right;"><a 
			href="https://open.spotify.com/track/7CFfqRW50ffULvBv7lfIIg?si=66e33a4e886d409b"
			target="_blank"><FaArrowLeft></FaArrowLeft></a></div>
		<div style="grid-area: center; justify-self: center;"><a 
			href="https://open.spotify.com/track/2mdEsXPu8ZmkHRRtAdC09e?si=f722125c3ef941c1" 
			target="_blank"><FaPlay></FaPlay></a></div>
		<div style="grid-area: right; justify-self: left;"><a 
			href="https://open.spotify.com/track/7s8VgA8OjvwBUuigKzEGBx?si=d50906dce2f949d1"
			target="_blank"><FaArrowRight></FaArrowRight></a></div>
	</div>
</div>

<style lang="scss">
	@media screen and (max-width: 450px) {
		#Main {
			max-width: 70vw;
			min-width: 70vw;
			grid-template-areas: 
				"song		song"
				"player		player";
		}
	}

	@media screen and (min-width: 450px) {
		#Main {
			max-width: 25vw;
			min-width: 25vw;
			grid-template-areas: 
				"song		song"
				"player		player";
		}
	}

	#Main {
		display: grid;
		grid-template-columns: 49% 49%;
		row-gap: 0.25em;
		column-gap: 2%;
	}

	#song {
		grid-area: song;
		margin-top: 0.5em;
		.out {
			display: grid;
			grid-template-areas: "icon title empty time";
			grid-template-columns: 17px 50% auto 25%;
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
				max-height: 15px;
				max-width: 15px;
				justify-self: center;
			}
			.song-title {
				grid-area: title;
				z-index: 2;
				align-self: center;
				font-style: italic;
				font-size: 10pt;
			}
			.duration {
				grid-area: time;
				justify-self: right;
				z-index: 2;
				padding-right: 0.5em;
				font-style: italic;
				font-size: 9pt;
			}
		}
	}

	#player {
		$dark: #cccccc;
		display: grid;
		grid-template-areas: "left center right";
		grid-template-columns: 45% 10% 45%;
		margin-top: 1em;
		grid-area: player;
		div {
			max-width: 20px;
			a {
				color: $dark;
				grid-area: player;
			}
		}
	}

</style>
