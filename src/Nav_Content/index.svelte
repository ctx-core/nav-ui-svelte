<script>
import { nav_opened__, nav_opened__close } from '@ctx-core/nav'
/** @type {import('@ctx-core/object').Ctx} */
export let ctx
const nav_opened_ = nav_opened__(ctx)
/** @type {HTMLElement} */
let nav
/**
 * @param event{MouseEvent}
 */
function nav__onclick(event) {
	const { target } = event
	if (target !== nav) {
		nav_opened__close(ctx)
	}
}
</script>

<nav
	bind:this={nav}
	class="Nav_Content {$$props.class||''}"
	class:nav_opened={$nav_opened_}
	on:click={nav__onclick}
><slot></slot></nav>
