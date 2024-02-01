import { Component, For } from "solid-js"

const PlaygroundPage: Component = () => {
	return (
		<>
			<p class="text- mx-4 mt-4 text-center text-3xl font-bold text-slate-600">
				Tailwind Playground
			</p>
			<div class="container mx-auto mt-6 flex h-80 flex-row items-center justify-around rounded-xl border-2 border-dashed border-slate-300 p-6">
				<For each={new Array(4).fill(0)}>
					{(_, i) => (
						<div class="h-16 w-16 cursor-pointer rounded-lg border-4 border-solid border-violet-500 text-center ring-violet-200 ring-offset-4 odd:bg-violet-100 even:bg-violet-300 hover:ring-2">
							<span class="text-xs font-semibold">Item {i() + 1}</span>
						</div>
					)}
				</For>
			</div>
			<a href="/example" class="flex flex-row justify-center py-4">
				<button class="rounded-xl bg-blurple px-3 py-2 font-semibold text-white ring-indigo-300 ring-offset-2 focus:ring-2">
					See Layout Example
				</button>
			</a>
		</>
	)
}

export default PlaygroundPage
