const dummyPosts: {
	[key: number]: { post: string; url: string; userName: string | null };
} = {
	0: {
		post: 'Commented on a post. Realized it’s from 2015. I’m officially that person. ⌛',
		url: 'https://loremflickr.com/1280/720',
		userName: 'ToiletThinker123',
	},
	1: {
		post: 'My social media bio: Professional procrastinator and meme enthusiast. 📖',
		url: 'https://loremflickr.com/1280/720',
		userName: 'ProcrastinEating',
	},
	2: {
		post: 'Unfollowed 20 people today. Productivity levels skyrocketed. 🎯',
		url: 'https://loremflickr.com/1280/720',
		userName: 'CantWhistle88',
	},
	3: {
		post: 'Why are there ads for things I literally just talked about? Is my phone listening to me? 📱',
		url: 'https://loremflickr.com/1280/720',
		userName: 'EmojiOverload😂',
	},
	4: {
		post: 'Saw a post about staying hydrated. Drank 3 sips of water. Feeling accomplished. 💧',
		url: 'https://loremflickr.com/1280/720',
		userName: 'CtrlAltDelicious',
	},
	5: {
		post: 'Social media: where everyone’s life looks perfect, except mine. 🤷',
		url: 'https://loremflickr.com/1280/720',
		userName: 'WiFiThief9000',
	},
	6: {
		post: 'Liked a cat video. Algorithm: So you want ONLY cat videos now? 🐱',
		url: 'https://loremflickr.com/1280/720',
		userName: 'OopsIDidItAgain',
	},
	7: {
		post: 'Checked my screen time stats. Realized my phone is my new best friend. 📊',
		url: 'https://loremflickr.com/1280/720',
		userName: 'SirClickALot',
	},
	8: {
		post: 'Social media: where I learn new recipes I’ll never cook. 🥘',
		url: 'https://loremflickr.com/1280/720',
		userName: 'CaptainObvious42',
	},
	9: {
		post: 'Thought about going to bed early. Spent 2 hours scrolling instead. Sleep: denied. 🌙',
		url: 'https://loremflickr.com/1280/720',
		userName: 'IMemeIt4U',
	},
	10: {
		post: 'Social media: the place where I feel connected but still lonely. 🌐',
		url: 'https://loremflickr.com/1280/720',
		userName: 'CantWhistle88',
	},
	11: {
		post: 'Scrolled through memes all day. I’m officially a meme connoisseur. 😂',
		url: 'https://loremflickr.com/1280/720',
		userName: 'CtrlAltDelicious',
	},
	12: {
		post: 'Bought a planner. Posted a picture of it. Never opened it again. ✍️',
		url: 'https://loremflickr.com/1280/720',
		userName: 'ToiletThinker123',
	},
	13: {
		post: 'Just realized social media trends change faster than my wardrobe. 🧥',
		url: 'https://loremflickr.com/1280/720',
		userName: 'SirClickALot',
	},
	14: {
		post: 'Social media: where I scroll for hours, forget why I opened the app, and still feel productive. 😂',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	15: {
		post: 'Just liked a stranger’s lunch pic. That’s 5 minutes I’ll never get back, but hey, the salad looked amazing. 🥗',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	16: {
		post: 'Spent 3 hours on TikTok. My only takeaway? I definitely don’t need a pet ostrich. 🦩',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	17: {
		post: 'Scrolled past 50 memes, laughed at 3, remembered none. Peak efficiency. 📱',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	18: {
		post: 'Social media: the magical place where I go to avoid my to-do list and find memes about avoiding my to-do list.',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	19: {
		post: 'I just watched 20 ‘cleaning hacks.’ My house? Still dirty. Thanks, internet. 🧹',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	20: {
		post: 'Social media: the art of wasting time while convincing yourself you’re ‘staying connected.’ 🙃',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	21: {
		post: 'Followed 3 fitness influencers, ate a donut, and felt accomplished. Balance, baby. 🍩',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	22: {
		post: 'Why does my phone battery drain faster when I’m doing absolutely nothing? 🤔',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	23: {
		post: 'My favorite workout? Scrolling past gym photos and convincing myself I burned calories. 🏋️‍♂️',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	24: {
		post: 'They say don’t compare yourself to others. But then why does everyone post their vacations? 🏝️',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
	25: {
		post: 'Tried a social media detox. Got bored in 5 minutes and came back. Detox failed. 💻',
		url: 'https://loremflickr.com/1280/720',
		userName: localStorage.getItem('userName'),
	},
};

class SkinnyFeed extends HTMLElement {
	dummyPosts: typeof dummyPosts;
	postForm: HTMLFormElement | null = null;

	constructor() {
		super();
		this.dummyPosts = dummyPosts;
	}

	connectedCallback() {
		this.addElementToDOM(this);
		this.setupFormHandler();
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub desk:pt-med pad:p-med pad:pt-squish mob:p-skinny';
		wrapper.innerHTML = `
			<h1 class="text-4xl text-slate-900">Feed</h1>
			<p class="text-tea_green-400">This is the page where you get to spy on people.</p>
			<div class="flex flex-col gap-squish items-center pad:flex-row pad:justify-center w-full max-w-wrapper">
				<form name="sortPosts" class="grid w-fit place-content-center bg-nyanza space-y-med desk:p-med pad:p-squish p-skinny mt-med rounded-md">
					<h2 class="text-2xl text-tea_green-200">Refine Search</h2>
					<div class="flex items-center gap-squish">
						<label for="search" class="text-nowrap">Find a post: </label>
						<input type="text" name="search" id="search" class="p-skinny rounded-md w-full" />
					</div>
					<button type="submit" class="bg-powder_blue-500 text- p-squish rounded-md">Search</button>
					<div class="flex items-center gap-squish">
						<label for="filterDate" class="text-nowrap">Filter by Date: </label>
						<input type="date" name="filterDate" id="filterDate" class="p-skinny rounded-md border w-full" />
					</div>
					<div class="grid gap-squish">
						<div class="flex items-center gap-squish">
							<label for="filterUser">Filter by User: </label>
							<input type="text" name="filterUser" id="filterUser" class="p-skinny rounded-md border" />
						</div>
						<button type="button" class="bg-powder_blue-500 text-slate-900 p-squish rounded-md" id="applyFilters">Apply Filters</button>
					</div>
				</form>
				<form name="newPost" class="grid w-fit place-content-center bg-nyanza space-y-med desk:p-med pad:p-squish p-skinny mt-med rounded-md">
					<h2 class="text-2xl text-tea_green-200">New Post</h2>
					<div class="flex flex-col">
						<label for="postText" class="text-slate-900">Post Text:</label>
						<textarea id="postText" maxLength="80" name="postText" class="p-skinny rounded-md border resize-none"></textarea>
					</div>
					<div class="flex flex-col">
						<label for="postUrl" class="text-slate-900">Post URL:</label>
						<input type="url" id="postUrl" name="postUrl" class="p-skinny rounded-md border" />
					</div>
					<button type="submit" class="bg-powder_blue-500 text-slate-900 p-squish rounded-md">Post</button>
				</form>
			</div>
			<ul id="posts" class="grid w-fit place-content-center bg-nyanza space-y-med desk:p-med pad:p-squish p-skinny mx-auto mt-med rounded-md">
				${this.generateFakePosts()}
			</ul>
		`;
		parent.appendChild(wrapper);
	}

	setupFormHandler() {
		const form = this.querySelector(
			'form[name="newPost"]'
		) as HTMLFormElement;
		this.postForm = form;
		if (form) {
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				this.handleFormSubmit(form);
			});
		}
	}

	handleFormSubmit(form: HTMLFormElement) {
		const postText = (
			form.querySelector('#postText') as HTMLTextAreaElement
		).value;
		const postUrl = (form.querySelector('#postUrl') as HTMLInputElement)
			.value;
		const userName = localStorage.getItem('userName') || 'Anonymous';

		const newPostKey = Object.keys(this.dummyPosts).length;
		this.dummyPosts[newPostKey] = {
			post: postText,
			url: postUrl ? postUrl : 'https://loremflickr.com/1280/720',
			userName: userName,
		};

		this.refreshPosts();
		form.reset();
	}

	refreshPosts() {
		const postsContainer = this.querySelector('#posts');
		if (postsContainer) {
			postsContainer.innerHTML = this.generateFakePosts();
		}
	}

	generateFakePosts(posts = dummyPosts) {
		return Object.values(posts)
			.map(
				(post) => `
				<li class="flex items-center desk:gap-med gap-squish desk:p-med pad:p-squish p-skinny w-full max-w-[48ch] bg-baby_powder-300 rounded-md">
					<img src="${post.url}" alt="Post thumbnail" class="w-chub aspect-square rounded-md">
					<p class="grid text-slate_gray-100">${post.post}
						<span><strong>Posted by:</strong> ${post.userName}</span>
					</p>
				</li>
				`
			)
			.join('');
	}
}

customElements.define('skinny-feed', SkinnyFeed);
