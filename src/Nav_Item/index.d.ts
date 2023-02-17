import { SvelteComponentTyped } from 'svelte'
export class index extends SvelteComponentTyped<{
	selected?:boolean
	class?:string
	href?:string
	alt?:string
	title?:string
	a_class?:string
}> {}
