import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// Pages
import About from './pages/About/About';
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Categories from './pages/ProductsOverview/Categories';
import Contact from './pages/Contact/Contact';
// Informative page
import FAQ from './pages/Information/FAQs/FAQ';
import PrivacyPolicy from './pages/Information/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from './pages/Information/CookiePolicy/CookiePolicy';

// Error Page
import Error404 from './pages/Error/404Error';
export default function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route
					path={['/myaccount', '/myaccount/:details']}
					component={Account}
				/>
				<Route path='/services' component={Services} />
				<Route path={['/products', '/categories']} component={Categories} />
				<Route path={['/faqs', '/faqs/:specificFaq']} component={FAQ} />
				<Route path='/privacy-policy' component={PrivacyPolicy} />
				<Route path='/cookie-policy' component={CookiePolicy} />
				<Route path='/contact-us' component={Contact} />
				<Route path='**' component={Error404} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}
