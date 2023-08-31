import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../pages/home/Home";

import OrderDetail from "../pages/order-detail/OrderDetail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Checkout from "../pages/checkout/Checkout";
import OrdersHistory from "../pages/orders-history/OrdersHistory";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

import Validate from "../pages/validate/Validate";

function Routes() {
	return (
		<ReactDomRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/validate" element={<Validate />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/orders-history" element={<OrdersHistory />} />
			<Route path="/order-detail/:orderId" element={<OrderDetail />} />

			<Route
				path="/checkout"
				element={
					<ProtectedRoute redirectTo="/register">
						<Checkout />
					</ProtectedRoute>
				}
			/>

			<Route path="*" element={<PageNotFound />} />
		</ReactDomRoutes>
	);
}

export default Routes;
