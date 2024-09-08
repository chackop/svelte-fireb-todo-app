import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { derived, writable } from 'svelte/store';

import { readable } from 'svelte/store';

export const today = readable(new Date());

export const user = writable({
	username: 'leomofthings',
	name: 'Ayodele Aransiola',
	email: 'ayo@example.com'
});

export let weekFromNow: unknown = derived(today, ($date) => {
	weekFromNow = new Date($date.getFullYear(), $date.getMonth(), $date.getDate() + 7);
	return weekFromNow;
});
