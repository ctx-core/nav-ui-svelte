<script lang="ts">
import { FA_bars_solid } from '@ctx-core/fontawesome-ui-svelte'
import { nav_opened$_, nav_opened__close } from '@ctx-core/nav'
import type { ctx_T } from 'ctx-core/be'
export let ctx:ctx_T
const nav_opened$ = nav_opened$_(ctx)
const { toggle_nav } = nav_opened$
/**
 * @param _event{MouseEvent}
 */
function window__onclick(_event) {
	nav_opened__close(ctx)
}
</script>

<svelte:window on:click={event=>window__onclick(event)}></svelte:window>

<a
	href=""
	class="nav-handle Nav_Handle {$$props.class||''}"
	on:click|preventDefault|stopPropagation={toggle_nav}
>
	<slot>
		<FA_bars_solid></FA_bars_solid>
	</slot>
</a>
