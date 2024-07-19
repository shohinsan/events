<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { Editor } from '@tiptap/core'
	import StarterKit from '@tiptap/starter-kit'
	import { cn } from '@/shared/lib/utils'
	import { Bold, Italic, BulletList, NumberedList, ArrowNewLine } from '@/shared/icons'
	import { Toggle } from '@/shared/ui/toggle'
	import type { HTMLInputAttributes } from 'svelte/elements'
	import type { InputEvents } from '@/shared/ui/input'

	let element: HTMLElement
	let editor: Editor

	type $$Props = HTMLInputAttributes
	type $$Events = InputEvents
	let className: $$Props['class'] = undefined
	export let value: $$Props['value'] = undefined
	export { className as class }

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit.configure({
					bulletList: {
						HTMLAttributes: {
							class: 'px-3 py-2 list-disc'
						}
					},
					orderedList: {
						HTMLAttributes: {
							class: 'px-3 py-2 list-decimal'
						}
					}
				})
			],
			editorProps: {
				attributes: {
					class: cn(
						className,
						'min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
					)
				}
			},
			content: value,
			onUpdate: ({ editor }) => {
				value = editor.getHTML()
			}
		})
	})

	onDestroy(() => {
		if (editor) {
			editor.destroy()
		}
	})
</script>

<div class="flex flex-col gap-2">
	{#if editor}
		<div class="border-input border rounded-md">
			<Toggle
				pressed={editor.isActive('bold')}
				onPressedChange={() => editor.chain().focus().toggleBold().run()}
				aria-label="toggle bold"
			>
				<Bold />
			</Toggle>
			<Toggle
				pressed={editor.isActive('italic')}
				onPressedChange={() => editor.chain().focus().toggleItalic().run()}
				aria-label="toggle italic"
			>
				<Italic />
			</Toggle>
			<Toggle
				pressed={editor.isActive('bulletList')}
				onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
				aria-label="toggle bullet list"
			>
				<BulletList />
			</Toggle>
			<Toggle
				pressed={editor.isActive('orderedList')}
				onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
				aria-label="toggle ordered list"
			>
				<NumberedList />
			</Toggle>
			<Toggle
				onPressedChange={() => editor.chain().focus().setHardBreak().run()}
				aria-label="insert new line"
			>
				<ArrowNewLine />
			</Toggle>
		</div>
	{/if}
</div>

<div bind:this={element} />
