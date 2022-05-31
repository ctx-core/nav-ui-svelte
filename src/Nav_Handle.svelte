<script lang="ts">
import FA_bars_solid from '@ctx-core/fontawesome/ui/FA-bars-solid.svelte'
import type { nav_Ctx } from '../nav_Ctx.js'
import { nav_opened__ } from '../nav_opened__.js'
export let ctx:nav_Ctx
const nav_opened_ = nav_opened__(ctx)
const { toggle_nav } = nav_opened_
function onclick_window(_event:MouseEvent) {
	nav_opened_.$ = false
}
</script>

<svelte:window on:click="{onclick_window}"></svelte:window>

<a
	href="."
	class="nav-handle Nav_Handle {$$props.class||''}"
	on:click|preventDefault|stopPropagation={toggle_nav}
>
	<slot>
		<FA_bars_solid></FA_bars_solid>
	</slot>
</a>
