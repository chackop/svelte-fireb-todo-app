<script>
	import Login from './login.svelte';
	import { onMount, setContext } from 'svelte';

	const userContextKey = 'userContext';

	onMount(() => {
		setContext(userContextKey, null);
	});

	// @ts-ignore
	const submit = ({ email, password }) =>
		/** @type {Promise<void>} */ (
			new Promise((resolve, reject) => {
				setTimeout(() => {
					setContext(userContextKey, {
						name: 'TestName',
						lastName: 'TestLastName',
						email: 'test@test.com'
					});
					resolve();
				}, 1000);
			})
		);
</script>

<div>
	<Login {submit} />
</div>
