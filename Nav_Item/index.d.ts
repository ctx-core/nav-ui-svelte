import { SvelteComponent } from 'svelte'
export class index extends SvelteComponent<{
	selected?:boolean
	class?:string
	href?:string
	alt?:string
	title?:string
	a_class?:string
}> {}
