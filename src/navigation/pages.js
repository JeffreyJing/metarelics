import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../pages/home';

const Pages = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route index path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default Pages;