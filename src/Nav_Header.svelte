<script lang="ts">
import type { nav_Ctx } from '../nav_Ctx.js'
import { nav_opened$_ } from '../nav_opened$_.js'
export let ctx:nav_Ctx
const nav_opened$ = nav_opened$_(ctx)
const { close_nav } = nav_opened$
</script>

<div class="Nav_Header header">
	<slot name="close">
		<a href="." class="close" on:click|preventDefault={close_nav}>
			<slot name="in__close">×</slot>
		</a>
	</slot>
	<slot></slot>
</div>

<style>
.Nav_Header a {
	text-decoration: none;
}
</style>
