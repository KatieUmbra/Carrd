<script lang="ts">
    let shown = $state(false);
    const showHover = () => {
        shown = true;
    };
    const hideHover = () => {
        shown = false;
    };
</script>

<div id="main">
    <a
        href="https://github.com/KatieUmbra/Carrd"
        target="_blank"
        style="grid-area: left;"
        aria-label="Source code">
        <div
            class="icon"
            onmouseenter={showHover}
            onmouseleave={hideHover}
            role="button"
            tabindex="0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
        </div>
    </a>
    {#if shown}
        <div class="popup">Carrd Source</div>
    {/if}
</div>

<style lang="scss">
    #main {
        position: absolute;
        left: 10px;
        bottom: 10px;
        display: grid;
        grid-template-areas: "left right";
        grid-template-columns: 35px auto;
        grid-template-rows: 35px;
        max-height: 35px;
        overflow: hidden;
        justify-items: stretch;
        align-items: stretch;
    }
    .icon {
        max-width: 35px;
        min-width: 35px;
        max-height: 35px;
        min-height: 35px;
        color: rgb(200, 200, 200);
    }

    .popup {
        margin: 0;
        padding: 0;
        grid-area: right;
        text-align: center;
        display: grid;
        place-items: center;
        margin-left: 10px;
        background-color: rgb(200, 200, 200);
        border-radius: 5px;
        padding: 5px;
    }
</style>
