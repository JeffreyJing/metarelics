import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import Media from '../pages/media';
import TermsOfUse from '../pages/terms-of-use';

const Pages = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='/media' element={<Media />} />
				<Route path='/terms-of-use' element={<TermsOfUse />} />
			</Routes>
		</>
	);
}

export default Pages;