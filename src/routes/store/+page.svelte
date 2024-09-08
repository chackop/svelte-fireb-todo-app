<script>
	// @ts-nocheck

	import { user, weekFromNow, today } from './+page';

	user.set({
		username: 'leom12345',
		name: '',
		email: ''
	});
</script>

<p>Your writable username is: <span style="color: coral;">{$user.username}</span></p>
<!-- svelte-ignore missing-declaration -->
<p>Today's Date is {$today} that is readable</p>
<p>Derived week is {$weekFromNow}</p>
