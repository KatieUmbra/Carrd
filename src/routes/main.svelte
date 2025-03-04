<script lang="ts">
    import Links from "./links.svelte";
    import { colors } from "$lib/vars";
    import banner from "$lib/static/banner.jpg";
    import picture from "$lib/static/picture.jpg";
    import sunset from "$lib/static/sunset.gif";
    import sky from "$lib/static/sky.jpg";
    import music from "$lib/static/music.mp3";
    import flowers from "$lib/static/flowers.jpg";
    import cloud from "$lib/static/cloud.jpg";

    const audio = new Audio(music);
    audio.pause();
    audio.play();
</script>

<svelte:head>
    <link rel="preload" as="image" href={sunset} />
    <link rel="preload" as="image" href={sky} />
    <link rel="preload" as="image" href={banner} />
    <link rel="preload" as="image" href={picture} />
    <link rel="preload" as="image" href={flowers} />
    <link rel="preload" as="image" href={cloud} />
</svelte:head>

<div id="Main">
    <div id="tabs">
        <p class="title" style="background-color: {colors.container};">
            <b>🔎︎ Kathy</b> - Search
        </p>
    </div>
    <div id="toolbar" style="background-color: {colors.container};">
        <div class="icon" style="grid-area: left;">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-left-fill"
                viewBox="0 0 16 16">
                <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
        </div>
        <div class="icon" style="grid-area: right;">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16">
                <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
        </div>
        <div class="icon" style="grid-area: reload;">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16">
                <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
        </div>
        <div class="icon" style="grid-area: menu;">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16">
                <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </div>
        <div id="searchbar" style="grid-area: search;">
            <div id="whitebar" style="background-color: {colors.background}">
                <div class="tiny-icon" style="grid-area: lock;">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
                </div>
                <div class="url-wrapper">
                    <div class="lighter">https://</div>
                    <div class="darker">carrd.kaytea.dev</div>
                </div>
                <div
                    class="tiny-icon"
                    style="grid-area: star; justify-self: center;">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div id="banner">
        <img src={banner} alt="" />
    </div>
    <div id="navi">
        <a class="btn" href="/" style="background-color: {colors.container};">
            Home
        </a>
        <a
            class="btn"
            href="/about"
            style="background-color: {colors.container};">
            About
        </a>
        <a
            class="btn"
            href="/criteria"
            style="background-color: {colors.container};">
            Criteria
        </a>
    </div>
    <div id="content">
        <div style="font-size: 11pt;">
            <b style="font-style: italic;">Katherine</b> (Kathy)
        </div>
        <div style="text-align: center; font-size: 9pt; display: grid;">
            <p class="inline">
                She / They | 20 |
                <span class="trans"><b>MtF</b></span>
                <span class="lesbian"><b>Lesbian</b></span>
                | Cancer | ES/EN
            </p>
        </div>

        <Links></Links>

        <div class="outline">
            <p>
                （＾▽＾）<b>weirdcore</b>. <b>Evangelion</b>. <b>Lain</b>.
                Internet aesthetics. <b>Dark themes</b>. Minecraft.
                <b>traumacore</b>
            </p>
        </div>
        <div class="outline">
            <p>
                （ T ^ T ）gore. <b>bigotry</b>. conflict. hatred. <b>drama</b>.
                discourse.
            </p>
        </div>
    </div>
    <div id="picture">
        <img src={picture} alt="" />
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
            max-width: 30vw;
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
        padding: 0.25rem;
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
        grid-template-areas: "home about criteria";
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
        background: linear-gradient(
            to right,
            rgb(213, 44, 0),
            rgb(226, 150, 136),
            rgb(210, 127, 164),
            rgb(162, 2, 98)
        );
        background-size: 100% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .trans {
        background: linear-gradient(
            to right,
            rgb(85, 205, 252),
            rgb(179, 157, 233),
            rgb(247, 168, 184),
            rgb(247, 168, 184),
            rgb(179, 157, 233),
            rgb(85, 205, 252)
        );
        background-size: 100% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: white;
        color: transparent;
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
