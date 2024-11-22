<script lang="ts">
    import flowers from "$lib/static/flowers.jpg";
    import cloud from "$lib/static/cloud.jpg";
</script>

<svelte:head>
    <link rel="preload" as="image" href={flowers}/>
    <link rel="preload" as="image" href={cloud}/>
</svelte:head>

<div id="Main">
    <div class="byf">
        <p class="title"><b>Byf!</b></p>
        <p class="bm"><b>I'm 20, latina, trans/lesbian.</b> anarchist, I have bpd/madd/ocd. Might talk about dark themes and trauma (sh/ed). <b>Neither anti nor pro shipping.</b> might retweet suggestive or light nsfw. <b>I speak spanish and english.</b> I block easily.</p>
    </div>
    <div class="img1">
        <div class="img-wrapper">
            <img src={flowers} alt="a flower field with a blue sky background and daisies in the foreground" loading="lazy" data-sveltekit-preload-data/>
        </div>
    </div>
    <div class="img2">
        <div class="img-wrapper">
            <img src={cloud} alt="a pink/purple sky with a moon visible over a cloud" loading="lazy" data-sveltekit-preload-data/>
        </div>
    </div>
    <div class="dni">
        <p class="title"><b>Dni!</b></p>
        <p class="bm"><b>Basic dni. minors. terf, tirf, radfem.</b> zionist. <b>misandry.</b> proship, hardcore antiship. <b>4chan users. lolicon, zoo.</b> jirai kei. <b>uses the t-slur without tw.</b> marxist-leninists, <b>conservatives,</b> liberals. edsky/shsky</p>
    </div>
</div>

<style lang="scss">

	$container: #cccccc;

	#Main {
		display: grid;
		min-width: 25vw;
		max-width: 25vw;
		grid-template-areas: 
		"byf byf img1"
		"img2 dni dni";
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

		.byf, .dni {
			background-color: $container;
			grid-area: byf;
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
		.dni {
			grid-area: dni;
			max-width: 100%;
		}
	}

	@media screen and (max-width: 450px) {
		#Main {
			min-width: 70vw;
			max-width: 70vw;
			grid-template-areas: 
			"img1"
			"byf"
			"img2"
			"dni";
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
			max-width: 100%;
		}
	}

</style>
