<script lang="ts">
	import * as Form from '@/shared/ui/form';
	import { Input } from '@/shared/ui/input';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { time } from '../model/time';
	import { Textarea } from '@/shared/ui/textarea';
	import type { ContactSchema } from '../validation/validation-schema';
	import v from '../validation/validation-schema';

	export let data: SuperValidated<Infer<ContactSchema>>;

	const form = superForm(data, {
		validators: zodClient(v.contactSchema),
		onUpdated: ({ form: f }) => {
			if (f.valid) {
				toast.success('Form has been sent', {
					description: time(),
					action: {
						label: 'Undo',
						onClick: () => console.info('Undo')
					}
				});
			} else {
				toast.error('Please fix the errors in the form.');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<!-- Name -->
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label class="select-none"
				>Name
				<span class="ml-2 text-destructive">✶</span>
			</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.Description>Please enter your name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<!-- Phone -->
	<Form.Field {form} name="phone">
		<Form.Control let:attrs>
			<Form.Label class="select-none">Phone</Form.Label>
			<Input type="tel" {...attrs} bind:value={$formData.phone} />
		</Form.Control>
		<Form.Description>Please enter your phone number.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<!-- Email -->
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label class="select-none"
				>Email
				<span class="ml-2 text-destructive">✶</span>
			</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.Description>Please enter your email address.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<!-- Message -->
	<Form.Field {form} name="message">
		<Form.Control let:attrs>
			<Form.Label class="select-none"
				>Message
				<span class="ml-2 text-destructive">✶</span>
			</Form.Label>
			<Textarea {...attrs} bind:value={$formData.message} />
			<!-- Using Textarea component -->
		</Form.Control>
		<Form.Description>Please enter your message.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="mt-5 w-1/2">Button</Form.Button>
</form>
