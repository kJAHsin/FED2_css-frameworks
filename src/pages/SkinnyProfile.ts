const dummyPosts = {
	0: {
		post: 'Social media: where I scroll for hours, forget why I opened the app, and still feel productive. 😂',
		url: 'https://loremflickr.com/1280/720',
	},
	1: {
		post: 'Just liked a stranger’s lunch pic. That’s 5 minutes I’ll never get back, but hey, the salad looked amazing. 🥗',
		url: 'https://loremflickr.com/1280/720',
	},
	2: {
		post: 'Spent 3 hours on TikTok. My only takeaway? I definitely don’t need a pet ostrich. 🦩',
		url: 'https://loremflickr.com/1280/720',
	},
	3: {
		post: 'Scrolled past 50 memes, laughed at 3, remembered none. Peak efficiency. 📱',
		url: 'https://loremflickr.com/1280/720',
	},
	4: {
		post: 'Social media: the magical place where I go to avoid my to-do list and find memes about avoiding my to-do list.',
		url: 'https://loremflickr.com/1280/720',
	},
	5: {
		post: 'I just watched 20 ‘cleaning hacks.’ My house? Still dirty. Thanks, internet. 🧹',
		url: 'https://loremflickr.com/1280/720',
	},
	6: {
		post: 'Social media: the art of wasting time while convincing yourself you’re ‘staying connected.’ 🙃',
		url: 'https://loremflickr.com/1280/720',
	},
	7: {
		post: 'Followed 3 fitness influencers, ate a donut, and felt accomplished. Balance, baby. 🍩',
		url: 'https://loremflickr.com/1280/720',
	},
};

class SkinnyProfile extends HTMLElement {
	dummyPosts = dummyPosts;

	constructor() {
		super();
		this.dummyPosts = dummyPosts;
	}

	connectedCallback() {
		this.addElementToDOM(this);
	}

	addElementToDOM(parent: HTMLElement) {
		const wrapper = document.createElement('div');
		wrapper.className =
			'max-w-wrapper bg-slate-100 mx-auto desk:p-chub desk:pt-med pad:p-med pad:pt-squish mob:p-skinny';
		wrapper.innerHTML = `
				<h1 class="text-4xl text-powder_blue-800">Profile</h1>
				<p class="text-tea_green-400">This is all your page.</p>
				${this.renderProfileContent()}
			`;
		parent.appendChild(wrapper);
	}

	renderProfileContent() {
		return `
			<div class="w-fit mx-auto desk:my-chub pad:my-med mob:my-squish">
                <img src="https://i.pravatar.cc/150?img=1" alt="Profile Image" class="w-32 h-32 rounded-full mx-auto">
                <h2 class="text-2xl text-center mt-2 p-squish text-powder_blue-800 capitalize">${localStorage.getItem('userName') || 'User'}</h2>
				<button id="follow" class="bg-powder_blue hover:bg-powder_blue-200 hover:text-powder_blue-800 text-powder_blue-100 transition-colors px-4 py-2 rounded-md mb-med mx-auto block">
					Follow
				</button>
				<div class="text-center">
					<h3 class="text-xl text-powder_blue-800">Following & Followers</h3>
					<div class="flex flex-wrap gap-squish justify-around my-squish">
						<div class="shrink-0">
							<h4 class="text-lg text-powder_blue-600">Following</h4>
							<ul class="text-powder_blue-800">
								<li>ToiletThinker123</li>
								<li>ProcrastinEating</li>
								<li>CantWhistle88</li>
								<li>EmojiOverload😂</li>
								<li>CtrlAltDelicious</li>
							</ul>
						</div>
						<div class="text-powder_blue-800">
							<h4 class="text-lg text-powder_blue-600">Followers</h4>
							<ul class="text-powder_blue-800">
								<li>WiFiThief9000</li>
								<li>OopsIDidItAgain</li>
								<li>SirClickALot</li>
								<li>CaptainObvious42</li>
								<li>IMemeIt4U</li>
							</ul>
						</div>
					</div>
				</div>
                <div class="posts mt-4">
                    <h3 class="text-xl text-powder_blue-800">Your Posts</h3>
                    <ul class="grid w-fit place-content-center bg-nyanza space-y-med desk:p-med pad:p-squish p-skinny mx-auto mt-med rounded-md">
                        ${this.generateFakePosts()}
                    </ul>
                </div>
            </div>
		`;
	}

	generateFakePosts(posts = this.dummyPosts) {
		return Object.values(posts)
			.map(
				(post) => `
				<li class="flex items-center desk:gap-med gap-squish desk:p-med pad:p-squish p-skinny w-full max-w-[48ch] bg-baby_powder-300 rounded-md">
					<img src="${post.url}" alt="Post thumbnail" class="w-chub aspect-square rounded-md">
					<p class="inline-block text-slate_gray-100">cha cha cha${post.post}</p>
				</li>
				`
			)
			.join('');
	}
}

customElements.define('skinny-profile', SkinnyProfile);
