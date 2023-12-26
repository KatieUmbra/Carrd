<script lang="ts">
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte'
	import FaRedditAlien from 'svelte-icons/fa/FaRedditAlien.svelte'
	import FaSpotify from 'svelte-icons/fa/FaSpotify.svelte'
	import FaUser from 'svelte-icons/fa/FaUser.svelte'
	import roblox from "$lib/static/roblox.svg"
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
</script>

<div id="main">
	<a href="https://discordapp.com/users/883348946708221952" target="_blank" style="grid-area: discord;">
		<div class="icon"><FaDiscord></FaDiscord></div>
	</a>
	<a href="https://www.roblox.com/users/190949460/profile" target="_blank" style="grid-area: roblox;">
		<img class="svg" src={roblox} alt="icon by https://icons8.com"/>
	</a>
	<a href="https://open.spotify.com/user/da4pu6hzyb4g9d78gsk7u6e9f?si=165bc9be6709456f" target="_blank" style="grid-area: spotify;">
		<div class="icon"><FaSpotify></FaSpotify></div>
	</a>
	<a href="https://en.pronouns.page/@kanwi" target="_blank" style="grid-area: pronouns;">
		<div class="icon"><FaUser></FaUser></div>
	</a>
	<a href="https://github.com/KatieUmbra" target="_blank" style="grid-area: github;">
		<div class="icon"><FaGithub></FaGithub></div>
	</a>
</div>

<style lang="scss">
	
	$defaultlight: rgba(200, 200, 200);

	#main {
		display: grid;
		grid-template: "discord reddit roblox spotify pronouns github";
		column-gap: 0.5em;
	}

	.icon {
		max-width: 20px;
		max-height: 20px;
		min-width: 20px;
		min-height: 20px;
		color: $defaultlight;
	}

	.svg {
		filter: invert(87%) sepia(9%) saturate(0%) hue-rotate(187deg) brightness(96%) contrast(81%);
		max-width: 20px;
		max-height: 20px;
		min-width: 20px;
		min-height: 20px;
	}

</style>
