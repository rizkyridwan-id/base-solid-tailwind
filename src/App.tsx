import { Route, Router } from "@solidjs/router"
import { type Component, lazy } from "solid-js"
import ExampleLayoutPage from "./pages/ExampleLayoutPage"

const PlaygroundPage = lazy(() => import("./pages/PlaygroundPage"))
const App: Component = () => {
	return (
		<Router>
			<Route path="/" component={PlaygroundPage} />
			<Route path="/example" component={ExampleLayoutPage} />
		</Router>
	)
}

export default App
