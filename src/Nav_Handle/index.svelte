<script>
import FA_bars_solid from '@ctx-core/fontawesome-ui-svelte/src/ui/FA-bars-solid.svelte'
import { nav_opened__, nav_opened__close } from '@ctx-core/nav'
/** @type {import('@ctx-core/object').Ctx} */
export let ctx
const nav_opened_ = nav_opened__(ctx)
const { toggle_nav } = nav_opened_
/**
 * @param _event{MouseEvent}
 */
function window__onclick(_event) {
	nav_opened__close(ctx)
}
</script>

<svelte:window on:click={event=>window__onclick(event)}></svelte:window>

<a
	href="."
	class="nav-handle Nav_Handle {$$props.class||''}"
	on:click|preventDefault|stopPropagation={toggle_nav}
>
	<slot>
		<FA_bars_solid></FA_bars_solid>
	</slot>
</a>
