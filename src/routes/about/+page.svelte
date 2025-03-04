<script lang="ts">
    import sunset from "$lib/static/sunset.gif";
    import sky from "$lib/static/sky.jpg";
</script>

<svelte:head>
    <link rel="preload" as="image" href={sunset} />
    <link rel="preload" as="image" href={sky} />
</svelte:head>

<div id="Main">
    <div class="img1">
        <div class="img-wrapper">
            <img
                loading="lazy"
                src={sunset}
                alt="Sunset GIF"
                data-sveltekit-preload-data />
        </div>
    </div>
    <div class="games-music">
        <p class="title"><b>Games!</b></p>
        <p class="bm">
            CS2. <b>Minecraft</b>. Roblox. <b>VrChat.</b> Needy Streamer Overload.
            Webfishing. Geometry Dash. Valorant.
        </p>
        <p class="title"><b>Aesthetics!</b></p>
        <p class="bm">
            <b>weirdcore</b>. vaporwave. traumacore*. dreamcore. <b>grunge</b>.
            dark academia. <b>angelcore</b>. kidcore. <b>yume kawaii</b>.
            gurokawaii.
        </p>
        <p class="title"><b>Music</b></p>
        <p><b>Bedroom pop</b>. pop. <b>weirdcore.</b></p>
    </div>
    <div class="img2">
        <div class="img-wrapper">
            <img src={sky} alt="Sunset" data-sveltekit-preload-data />
        </div>
    </div>
    <div class="hobbies-themes">
        <p class="title"><b>Hobbies!</b></p>
        <p class="bm">
            piano. <b>guitar</b> coding. <b>gamedev</b>. <b>sysdev</b>. jvm dev.
            videogames. <b>writing</b>. singing. graphic design.
        </p>
        <p class="title"><b>Themes!</b></p>
        <p>
            <b>Liminal Spaces</b>. the backrooms. true crime. <b>Horror</b>.
            sci-fi. <b>Math</b>. music composing. <b>Cyberpunk Anime</b>.
        </p>
    </div>
</div>

<style lang="scss">
    $container: #cccccc;

    #Main {
        margin-top: 0.5rem;
        display: grid;
        min-width: 30vw;
        max-width: 25vw;
        grid-template-areas:
            "img1 games-music games-music"
            "hobbies-themes hobbies-themes img2";
        grid-template-columns: 45% 10% 45%;
        row-gap: 0.5em;
        place-items: center;
        .img1,
        .img2 {
            width: 100%;
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

        .games-music,
        .hobbies-themes {
            background-color: $container;
            grid-area: games-music;
            padding: 0.25rem;
            p {
                margin: 0;
                font-size: 9pt;
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
            border-radius: 10px;
            max-width: 150%;
        }
    }
</style>
