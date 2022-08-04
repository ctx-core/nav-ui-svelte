<script lang="ts">
import { nav_opened__ } from '@ctx-core/nav'
import { type Ctx } from '@ctx-core/object'
export let ctx:Ctx
const nav_opened_ = nav_opened__(ctx)
const { close_nav } = nav_opened_
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
	class:nav_opened={$nav_opened_}
	on:click={onclick_nav}
><slot></slot></nav>
