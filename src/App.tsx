import { Route, Router } from "@solidjs/router"
import { type Component, lazy } from "solid-js"

const PlaygroundPage = lazy(() => import("./pages/PlaygroundPage"))
const App: Component = () => {
	return (
		<Router>
			<Route path="/" component={PlaygroundPage} />
		</Router>
	)
}

export default App
