// Async/Await Example

const service = {
	getUsers: () => fetch('https://jsonplaceholder.typicode.com/users'),
	getPosts: () => fetch('https://jsonplaceholder.typicode.com/posts')
}

async function Fetchy() {
	try {
		const users = await service.getUsers()
		const posts = await service.getPosts()

		console.log('Example: Fetchy', {
			Users: users.data,
			Posts: posts.data
		})

	} catch(err) {
		console.warn('ERROR', err)
	}
}

Fetchy()

async function FetchyAll() {
	try	{
		const values = await Promise.all([ service.getUsers(), service.getPosts() ])
		console.info('Example: FetchyAll', values.map(v => v.data))

	} catch(err) {
		console.warn(err)
	}
}

FetchyAll()