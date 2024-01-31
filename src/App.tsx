import { type Component, For } from "solid-js"

const App: Component = () => {
	return (
		<>
			<p class="text- mx-4 mt-4 text-center text-3xl font-bold text-slate-600">
				Tailwind Playground
			</p>
			<div class="container mx-auto mt-6 flex h-80 flex-row items-center justify-around rounded-xl border-2 border-dashed border-slate-300 p-6">
				<For each={new Array(4).fill(0)}>
					{(_, i) => (
						<div class="h-16 w-16 rounded-lg border-4 border-solid border-pink-500 text-center odd:bg-pink-100 even:bg-pink-300">
							<span class="text-xs font-semibold">Item {i() + 1}</span>
						</div>
					)}
				</For>
			</div>
		</>
	)
}

export default App
