<template>
	<div class="header">
		<router-link :to="{name: 'home'}"><img class="header__image" src="images/ASTRA-logo-white.png" alt=""></router-link>
		<div class="header__navigation">
			<ul class="navigation__list">
				<router-link :to="{name: 'tempest'}"><li class="list__item"><button class="nav-button">Tempest</button></li></router-link>
				<router-link :to="{name: 'fameux'}"><li class="list__item"><button class="nav-button">Fameux</button></li></router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	.header {
		width: 100%;
		height: 8rem;
		/* background: rgba(0, 0, 0, 0.185); */
		padding: 1.5rem 3rem;
		display: flex;
	}

	.header__image {
		height: 100%;
		width: auto;
		padding: 0 4rem 0 0;
	}

	.header__navigation {
		width: 65%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navigation__list {
		width: 20rem;
		display: flex;
		list-style: none;
		justify-content: space-between;
	}

	.list__item {
		padding: 0.5rem;
	}

	.nav-button {
		border: 0;
		background: rgba(255, 255, 255, 0.202);
		color: white;
		padding: 1rem 2rem;
		border-radius: 2rem;
	}

	.nav-button:hover {
		border: 0;
		background: rgb(255, 255, 255);
		color: rgb(0, 0, 0);

	}
</style>