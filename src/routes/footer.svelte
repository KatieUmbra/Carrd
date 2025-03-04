<script lang="ts">
    import FaPlay from "svelte-icons/fa/FaPlay.svelte";
    import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";
    import FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
</script>

<div id="Main">
    <div id="song">
        <div class="out">
            <div class="in"></div>
            <div class="play-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </div>
            <div class="song-title">Pretty When You Cry - Lana Del Rey</div>
            <div class="duration">2:55 - <b>3:54</b></div>
        </div>
    </div>
    <div id="player">
        <div style="grid-area: left; justify-self: right;">
            <a
                href="https://open.spotify.com/track/7CFfqRW50ffULvBv7lfIIg?si=66e33a4e886d409b"
                aria-label="Previous song"
                target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-left-short"
                    viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
            </a>
        </div>
        <div style="grid-area: center; justify-self: center;">
            <a
                href="https://open.spotify.com/track/6PnluwP0fjGnpIBsqTdUTq"
                target="_blank"
                aria-label="play button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-play-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </a>
        </div>
        <div style="grid-area: right; justify-self: left;">
            <a
                href="https://open.spotify.com/track/7s8VgA8OjvwBUuigKzEGBx?si=d50906dce2f949d1"
                aria-label="next song"
                target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
            </a>
        </div>
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
            max-width: 30vw;
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
                width: 74%;
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
