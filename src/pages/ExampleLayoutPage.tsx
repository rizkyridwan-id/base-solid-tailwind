import { Component, For, createMemo, onMount } from "solid-js"
import { createAvatar } from "@dicebear/core"
import { botttsNeutral, thumbs } from "@dicebear/collection"

// TODO: REFACTOR THIS PAGES INTO COMPONENTS
const ExampleLayoutPage: Component = () => {
	const seeds = ["Whisker", "Simba", "Patches", "Angel", "Sheba"]
	const avatarList = createMemo(() =>
		new Array(5).fill(0).map((v, i) =>
			createAvatar(botttsNeutral, {
				size: 128,
				seed: seeds[i],
			}).toDataUriSync(),
		),
	)

	const contactSeeds = [
		"Lucky",
		"Precious",
		"Charlie",
		"Mimi",
		"Cookie",
		"Dusty",
		"Patches",
	]
	const contactList = createMemo(() =>
		new Array(7).fill(0).map((v, i) =>
			createAvatar(thumbs, {
				size: 25,
				seed: contactSeeds[i],
			}).toDataUriSync(),
		),
	)
	let shinobiButton: HTMLButtonElement | undefined
	onMount(() => shinobiButton && shinobiButton.focus())
	return (
		<div class="flex h-screen w-full flex-row bg-basedark-1">
			<div class="flex h-screen w-36 flex-col items-center space-y-2 bg-basedark-3 py-2">
				<div class=" flex size-12 rounded-2xl bg-blurple">
					<img src="./src/assets/icon-discord.svg" class="m-auto h-3/5 w-3/5" />
				</div>
				<hr class="h-0.5 w-3/4 border-0 bg-basedark-light" />
				<For each={avatarList()}>
					{(avatar) => {
						return (
							<div class="group flex w-full justify-center">
								<div class="absolute left-0 mt-4 h-3 w-1 scale-0  rounded-lg bg-white transition-all group-hover:scale-100 " />
								<img
									class="size-12 flex-none cursor-pointer rounded-3xl transition-all duration-300 ease-in-out hover:rounded-2xl"
									src={avatar}
								/>
							</div>
						)
					}}
				</For>
				<div class="flex size-12 cursor-pointer rounded-3xl bg-basedark-1 text-green-600 transition-all duration-300 ease-in-out hover:rounded-2xl hover:bg-green-600 hover:text-white">
					<i class="fa-solid fa-plus m-auto text-2xl " />
				</div>
				<div class="flex size-12 cursor-pointer rounded-3xl bg-basedark-1 text-green-600 transition-all duration-300 ease-in-out hover:rounded-2xl hover:bg-green-600 hover:text-white">
					<i class="fa-solid fa-compass m-auto text-2xl" />
				</div>
				<a
					href="/"
					class="absolute bottom-3 flex size-12 cursor-pointer rounded-3xl bg-basedark-1 text-green-600 transition-all duration-300 ease-in-out hover:rounded-2xl hover:bg-green-600 hover:text-white"
				>
					<i class="fa-solid fa-angle-left m-auto text-2xl" />
				</a>
			</div>
			<div class="flex h-screen w-4/12 flex-col bg-basedark-2">
				<div class="w-full px-2 py-2 shadow-[rgba(0,0,15,0.3)_0px_1px_1px_0px]">
					<button class="w-full rounded-md bg-basedark-3 px-2 py-2 text-left text-xs font-semibold text-basedark">
						Find or start a conversation
					</button>
				</div>
				<div class="w-full space-y-1 px-2 py-2 ">
					<button
						ref={shinobiButton}
						class="text-md flex w-full flex-row rounded-md py-2 pl-2 pr-2 text-left font-medium text-gray-400 hover:bg-basedark-light hover:text-gray-200 focus:bg-basedark-light focus:text-gray-200"
					>
						<div class="mr-2 flex h-5 w-8 justify-center">
							<i class="fa-solid fa-user-ninja text-xl  hover:text-gray-200 focus:text-gray-200" />{" "}
						</div>
						Shinobi
					</button>
					<button class="text-md flex w-full flex-row rounded-md py-2 pl-2 pr-2 text-left font-medium text-gray-400 hover:bg-basedark-light hover:text-gray-200 focus:bg-basedark-light focus:text-gray-200">
						<div class="mr-2 flex h-5 w-8 justify-center">
							<i class="fa-brands fa-sitrox text-xl  hover:text-gray-200 focus:text-gray-200" />{" "}
						</div>
						Sitro
					</button>
					<button class="text-md flex w-full flex-row rounded-md py-2 pl-2 pr-2 text-left font-medium text-gray-400 hover:bg-basedark-light hover:text-gray-200 focus:bg-basedark-light focus:text-gray-200">
						<div class="mr-2 flex h-5 w-8 justify-center">
							<i class="fa-solid fa-bag-shopping text-xl hover:text-gray-200 focus:text-gray-200" />{" "}
						</div>
						Shop
					</button>
				</div>
				<div class="mt-2 w-full flex-grow space-y-1 px-2">
					<div class="mb-2 flex w-full flex-row items-center px-3">
						<span class="flex-grow text-xs font-bold text-gray-400">
							DIRECT MESSAGES
						</span>
						<i class="fa-solid fa-plus text-xs text-gray-400" />
					</div>
					<For each={contactList()}>
						{(contact, i) => (
							<button class="text-md flex w-full flex-row items-center rounded-md px-2 py-1 text-left font-medium text-gray-400 hover:bg-basedark-light hover:text-gray-200 focus:bg-basedark-light focus:text-gray-200">
								<div class="relative">
									<img src={contact} class="mr-2 size-8 rounded-3xl" />
									<div
										class="border-gray-4 absolute bottom-0 right-2 size-2.5 rounded-full border-[2.5px] bg-basedark-2  ring-2 ring-basedark-2"
										classList={{
											"border-gray-500": i() > 1,
											"border-green-600": i() <= 1,
										}}
									/>
								</div>
								{contactSeeds[i()]}
							</button>
						)}
					</For>
				</div>
				<div class="flex w-full flex-row bg-basedark-3.5 px-1 py-1.5">
					<button class="mr-1.5 flex w-full flex-grow flex-row items-center rounded-md px-0.5 py-1 hover:bg-basedark-light  focus:bg-basedark-light ">
						<div class="mr-2 flex size-8 items-center justify-center rounded-full bg-slate-50">
							<img src="./src/assets/logo.svg" class=" size-6" />
						</div>
						<div class="flex flex-col text-left">
							<span class="text-sm text-white">Solitail</span>
							<span class="text-xs text-gray-400">soli_04</span>
						</div>
					</button>
					<button class="my-1.5 size-8 rounded-md px-1.5 py-1 hover:bg-basedark-light focus:bg-basedark-light ">
						<i class="fa-solid fa-bell-slash text-md text-red-500" />
					</button>
					<button class="my-1.5 size-8 rounded-md px-1.5 py-1 hover:bg-basedark-light focus:bg-basedark-light ">
						<i class="fa-solid fa-microphone-slash text-md text-red-500" />
					</button>
					<button class="my-1.5 mr-1.5 size-8 rounded-md px-1.5 py-1 hover:bg-basedark-light focus:bg-basedark-light ">
						<i class="fa-solid fa-gear text-md text-gray-400" />
					</button>
				</div>
			</div>
			<div class="flex h-screen flex-grow flex-col bg-basedark-1">
				<div class="flex h-12 w-full flex-row items-center px-5 py-2 shadow-[rgba(0,0,15,0.3)_0px_1px_1px_0px]">
					<i class="fa-solid fa-user-ninja text-xl text-gray-400" />
					<span class="text-md ml-2.5 font-semibold text-white">Shinobi</span>
				</div>
				<div class="flex w-full flex-grow flex-row">
					<div class="flex h-full flex-grow flex-col items-center justify-center">
						<img src="./src/assets/ninja-home.png" class="w-3/5" />
						<span class="text-sm font-medium text-gray-400">
							No one's around to play with Lonewolf.
						</span>
					</div>
					<div class="flex h-full w-[55%] flex-col border-l border-basedark-light px-4 py-5">
						<span class="text-xl font-extrabold text-white">Active Now</span>
						<p class="mt-7 text-center text-sm font-semibold text-gray-100">
							It's quiet for now...
						</p>
						<p class="mt-2 px-2 text-center text-xs text-gray-400">
							When a friend starts an activity--like playing a game or hanging
							out on voice--we'll show it here!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExampleLayoutPage
