<script>
	// @ts-nocheck

	import { user, weekFromNow, today } from './+page';

	user.set({
		username: 'leom12345',
		name: '',
		email: ''
	});
</script>

<p>Your username is: <span style="color: coral;">{$user.username}</span></p>
<!-- svelte-ignore missing-declaration -->
<p>Today's Date is {$today}</p>
<p>{$weekFromNow}</p>
