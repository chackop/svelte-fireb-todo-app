<script>
	import { firebaseApp } from '$lib/firebase/firebase.admin';
	import {
		getFirestore,
		collection,
		onSnapshot,
		doc,
		addDoc,
		updateDoc,
		deleteDoc
	} from 'firebase/firestore';

	// Initialize Cloud Firestore and get a reference to the service
	// const db = getFirestore(firebaseApp);
	const db = getFirestore();

	//read data from database
	const colRef = collection(db, 'todos');

	// an array of todos, where all our todo is been created
	/**
	 * @type {any[]}
	 */
	let todos = [];
	const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
		/**
		 * @type {any[]}
		 */
		let dbTodos = [];
		querySnapshot.forEach((doc) => {
			let todo = { ...doc.data(), id: doc.id };
			dbTodos = [todo, ...dbTodos];
		});
		todos = dbTodos;
	});
	let task = '';

	// the onclick event that will fire, when the button is clicked
	const addTodo = async () => {
		if (task !== '') {
			const docRef = await addDoc(collection(db, 'todos'), {
				task: task,
				isDone: false,
				Date: new Date()
			});
		}
		task = '';
	};

	const keyPressed = (/** @type {{ key: string; }} */ event) => {
		if (event.key === 'Enter') {
			addTodo();
		}
	};

	const markAsDone = async (/** @type {{ id: string; isDone: any; }} */ item) => {
		await updateDoc(doc(db, 'todos', item.id), {
			isDone: !item.isDone
		});
	};

	const delTodo = async (/** @type {string} */ id) => {
		await deleteDoc(doc(db, 'todos', id));
	};
</script>

<svelte:head>
	<title>Todo App</title>
	<meta name="description" content="Todo App using Firebase" />
</svelte:head>

<svelte:window on:keydown={keyPressed} />

<div class="text-column">
	<h1>Todo App using Firebase</h1>

	<input type="text" placeholder="add your new task" bind:value={task} />
	<button on:click={addTodo}>Add Todo</button>

	<!-- for each loop to loop through our available todo in the todos array -->
	{#each todos as item}
		<li class:done={item.isDone}>
			<span class="items">{item.task}</span>
			<span><button on:click={() => markAsDone(item)}>Done</button></span>
			<span><button on:click={() => delTodo(item.id)}>Delete</button></span>
		</li>
	{:else}
		<p>No Task found, schedule your todo task above.</p>
	{/each}
</div>
