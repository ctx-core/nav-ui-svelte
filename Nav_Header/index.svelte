<script lang="ts">
import { nav_opened__close } from '@ctx-core/nav'
import type { Ctx } from 'ctx-core/be'
export let ctx:Ctx
</script>

<div class="Nav_Header header">
	<slot name="close">
		<a href="" class="close" on:click|preventDefault={()=>nav_opened__close(ctx)}>
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
