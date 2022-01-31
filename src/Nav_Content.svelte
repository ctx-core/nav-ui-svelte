<script lang="ts">
import { Ctx } from '@ctx-core/object'
import { nav_opened$_ } from '../nav_opened$_.js'
export let ctx:Ctx
const nav_opened$ = nav_opened$_(ctx)
const { close_nav } = nav_opened$
let nav:HTMLElement
function onclick_nav(event) {
	const { target } = event
	if (target !== nav) {
		close_nav()
	}
}
</script>

<nav
	bind:this={nav}
	class="Nav_Content {$$props.class||''}"
	class:nav_opened={$nav_opened$}
	on:click={onclick_nav}
><slot></slot></nav>
