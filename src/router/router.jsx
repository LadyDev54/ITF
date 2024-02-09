// Route
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'
// Layout
import { Layout } from "@/layout";
// Paths
import { Home, Pending, Transaction } from "@/pages";
import { HOME, PENDING, TRANSACTION } from "./route-path";
// Pages

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={HOME} element={<Layout />}>
			<Route index element={<Home />} />
			<Route path={TRANSACTION} element={<Transaction />} />
			<Route path={PENDING} element={<Pending />} />
		</Route>
	)
);

export default router;
