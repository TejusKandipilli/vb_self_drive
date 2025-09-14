import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, Shield, Clock, Users, ChevronRight, Play, CheckCircle, Award, Heart, Globe, Phone, Mail, MapPin, Youtube, Instagram } from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [currentCar, setCurrentCar] = useState(0);
    const [visibleRows, setVisibleRows] = useState(2);

    // Booking URL - Replace with your actual booking/contact URL
    const bookingUrl = "https://wa.me/918688516662";

    // Logo URL - Replace with your actual logo URL
    const logoUrl = "/VB.jpg";

    const cars = [
        {
            name: "Maruti Suzuki Baleno",
            type: "5 Seater Hatchback",
            rating: 4.0,
            image: "🚗",
            imageUrl: "/baleno.jpg",
            price: "₹1,800",
            originalPrice: "₹2,000",
            features: ["5 seater", "4 ⭐ safety rating", "5 gear manual drive"]
        },
        {
            name: "Maruti Suzuki Swift",
            type: "5 Seater Hatchback",
            rating: 4.0,
            image: "🚗",
            imageUrl: "/swift.jpg",
            price: "₹1,800",
            features: ["5 seater", "4 ⭐ rating", "5 gear Manual drive"]
        },
        {
            name: "Maruti Suzuki Alto",
            type: "5 Seater Hatchback",
            image: "🚙",
            imageUrl: "/alto.jpg",
            price: "₹1,000",
            features: ["5 seater car", "Manual drive", "Easy to GO", "Budget friendly", "Well maintained"]
        },
        {
            name: "Maruti Suzuki Dzire",
            type: "5 Seater Sedan",
            image: "🚘",
            imageUrl: "/dzire.jpg",
            price: "₹2,000",
            features: ["Automatic drive", "5 seater"]
        }
    ];




    const cardsPerRow = 3;
    const cardsToShow = visibleRows * cardsPerRow;
    const totalRows = Math.ceil(cars.length / cardsPerRow);
    const hasMoreCars = visibleRows < totalRows;

    // Function to handle booking button clicks
    const handleBookingClick = () => {
        window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCar((prev) => (prev + 1) % cars.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleViewMore = () => {
        setVisibleRows(prev => Math.min(prev + 2, totalRows));
    };

    const handleViewLess = () => {
        setVisibleRows(2);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Floating Header */}
            <header className={`fixed w-full z-50 transition-all duration-500 ${
                scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Premium Logo with Image */}
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                                    <img
                                        src={logoUrl}
                                        alt="VB Self Drive Cars Premium Rentals Logo"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to text if logo fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <span
                                        className="text-white font-bold text-lg items-center justify-center w-full h-full"
                                        style={{display: 'none'}}
                                    >
                                        L
                                    </span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-slate-800">VB Self Drive Cars</div>
                                <div className="text-xs text-slate-500 -mt-1">Premium Rentals</div>
                            </div>
                        </div>

                        {/* Glass Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8 bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
                            {['Home', 'Fleet', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={handleBookingClick}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-xl bg-white/80 text-slate-700 hover:bg-white transition-all duration-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl rounded-b-3xl border-t border-white/20 p-6">
                            <nav className="flex flex-col space-y-4">
                                {['Home', 'Fleet', 'About', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <button
                                    onClick={handleBookingClick}
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
                                >
                                    Book Now
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <main id="home" className="relative overflow-hidden pt-20">
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-4 py-2 text-sm font-medium text-blue-600">
                                <Star className="w-4 h-4 fill-current" />
                                <span>Rated #1 Car Rental Platform</span>
                            </div>

                            {/* Main Headline */}
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                                    Drive Your
                                    <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Dream Car
                  </span>
                                    Today
                                </h1>
                                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                                    Experience premium car rentals with instant booking, premium fleet, and 24/7 support. Your journey starts here.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleBookingClick}
                                    className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <span>Start Booking</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>

                        {/* Car Showcase */}
                        <div className="relative">
                            {/* Floating Car Card */}
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                                {/* Car Image Area */}
                                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20"></div>
                                    {cars[currentCar].imageUrl ? (
                                        <img
                                            src={cars[currentCar].imageUrl}
                                            alt={cars[currentCar].name}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                // Fallback to emoji if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="flex items-center justify-center h-full" style={{display: cars[currentCar].imageUrl ? 'none' : 'flex'}}>
                                        <span className="text-6xl transform hover:scale-110 transition-transform duration-300">
                                            {cars[currentCar].image}
                                        </span>
                                    </div>
                                    {/* Floating elements */}
                                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-slate-600 shadow-lg">
                                        Available Now
                                    </div>
                                </div>

                                {/* Car Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">{cars[currentCar].name}</h3>
                                            <p className="text-slate-600">{cars[currentCar].type}</p>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                            <span className="text-sm font-medium text-slate-700">{cars[currentCar].rating}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { icon: Users, text: "5 Seats" },
                                            { icon: Shield, text: "Insured" },
                                            { icon: Clock, text: "24/7 Support" },
                                            { icon: Star, text: "Premium" }
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                                                <feature.icon className="w-4 h-4" />
                                                <span>{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & Book Button */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-2xl font-bold text-slate-800">{cars[currentCar].price}</span>
                                            <span className="text-slate-600">/day</span>
                                        </div>
                                        <button
                                            onClick={handleBookingClick}
                                            className="bg-slate-800 text-white px-6 py-2 rounded-xl font-medium hover:bg-slate-700 transition-colors duration-300 flex items-center space-x-2"
                                        >
                                            <span>Book</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Car Navigation Dots */}
                                <div className="flex justify-center space-x-2 mt-6">
                                    {cars.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCar(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === currentCar ? 'bg-blue-500 w-6' : 'bg-slate-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* About Content */}
                        <div className="space-y-8">
                            {/* Section Badge */}
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-4 py-2 text-sm font-medium text-teal-600">
                                <Heart className="w-4 h-4 fill-current" />
                                <span>About VB Self Drive Cars Rentals</span>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                                    Redefining Premium
                                    <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                        Car Rental Experience
                                    </span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Established in 2020, VB Self Drive Cars has become Visakhapatnam's trusted car rental service. We believe that every journey should be comfortable and convenient, which is why we maintain a reliable fleet of well-serviced vehicles that combine affordability, safety, and dependability for all your travel needs.
                                </p>

                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Our mission is simple: to provide seamless, premium car rental experiences that exceed expectations. From business executives to adventure seekers, we cater to diverse needs with our commitment to excellence and customer satisfaction.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: CheckCircle, text: "Quality Assured Vehicles" },
                                    { icon: Award, text: "Customer-First Service" },
                                    { icon: Clock, text: "Flexible Booking Hours" },
                                    { icon: Globe, text: "Growing Network" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                                        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* About Visual/Stats */}
                        <div className="relative">
                            {/* Main Stats Card */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
                                <div className="space-y-8">


                                    {/* Mission Statement */}
                                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/20">
                                        <h4 className="text-lg font-semibold mb-3 text-blue-400">Our Mission</h4>
                                        <p className="text-slate-300 leading-relaxed">
                                            "To make premium mobility accessible to everyone while maintaining the highest standards of service, safety, and customer satisfaction."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
                        </div>
                    </div>

                    {/* Company Values */}
                    <div className="mt-20 text-center">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h3>
                        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                            These principles guide everything we do and shape our commitment to excellence
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🎯",
                                    title: "Excellence",
                                    description: "We strive for perfection in every aspect of our service, from vehicle maintenance to customer interactions."
                                },
                                {
                                    icon: "🤝",
                                    title: "Trust",
                                    description: "Building lasting relationships through transparency, reliability, and consistent delivery of promises."
                                },
                                {
                                    icon: "🚀",
                                    title: "Innovation",
                                    description: "Continuously evolving our services with cutting-edge technology and customer-centric solutions."
                                }
                            ].map((value, index) => (
                                <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose VB Self Drive Cars?</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Experience the difference with our premium car rental service</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "⚡",
                                title: "Instant Booking",
                                description: "Book any car in under 60 seconds with our streamlined process and instant confirmation.",
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: "🛡️",
                                title: "Premium Safety",
                                description: "All vehicles undergo rigorous safety checks and are fully insured for your peace of mind.",
                                color: "from-teal-500 to-blue-500"
                            },
                            {
                                icon: "💎",
                                title: "Luxury Fleet",
                                description: "Choose from our curated selection of premium vehicles from top brands worldwide.",
                                color: "from-purple-500 to-indigo-500"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Cars Section - Grid Layout */}
            <section id="fleet" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-4 py-2 text-sm font-medium text-blue-600 mb-4">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Premium Fleet</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Cars</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose from our carefully curated collection of premium vehicles, each maintained to the highest standards for your ultimate driving experience.</p>
                    </div>

                    {/* Car Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {cars.slice(0, cardsToShow).map((car, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 group">
                                {/* Car Image */}
                                <div className="relative h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 group-hover:from-blue-400/10 group-hover:to-cyan-400/10 transition-all duration-300"></div>
                                    {car.imageUrl ? (
                                        <img
                                            src={car.imageUrl}
                                            alt={car.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                // Fallback to emoji if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="flex items-center justify-center h-full" style={{display: car.imageUrl ? 'none' : 'flex'}}>
                                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                            {car.image}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-slate-600 shadow-lg">
                                        Available
                                    </div>
                                </div>

                                {/* Car Info */}
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">{car.name}</h3>
                                            <p className="text-slate-600 text-sm">{car.type}</p>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                            <span className="text-sm font-medium text-slate-700">{car.rating}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {car.features.slice(0, 3).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price & Book Button */}
                                    <div className="pt-4 border-t border-slate-100 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-slate-800">{car.price}</span>
                                                <span className="text-slate-600 text-sm">/day</span>
                                            </div>
                                            <div className="text-xs text-slate-500">Starting from</div>
                                        </div>
                                        <button
                                            onClick={handleBookingClick}
                                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
                                        >
                                            <span>Book Now</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More/Less Buttons */}
                    <div className="text-center">
                        {hasMoreCars ? (
                            <button
                                onClick={handleViewMore}
                                className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200 flex items-center space-x-2 mx-auto group"
                            >
                                <span>View More Cars</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        ) : visibleRows > 2 ? (
                            <button
                                onClick={handleViewLess}
                                className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto group"
                            >
                                <span>View Less</span>
                                <ChevronRight className="w-4 h-4 rotate-90 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact" className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Brand Section with Logo Image */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Logo with Image */}
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-16 h-20 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg flex flex-col items-center justify-center relative overflow-hidden p-2">
                                        <img
                                            src={logoUrl}
                                            alt="VB Self Drive Cars Self Driving Cars Logo"
                                            className="w-full h-full object-cover rounded-md"
                                            onError={(e) => {
                                                // Fallback to original design if logo fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center text-white"
                                            style={{display: 'none'}}
                                        >
                                            <div className="font-bold text-xs">VB Self Drive Cars</div>
                                            <div className="text-xs mt-1">SELF DRIVING</div>
                                            <div className="absolute bottom-1 text-xs">2020</div>
                                            <div className="absolute top-1 text-sm">🚗</div>
                                            <div className="absolute bottom-1 right-1 text-yellow-400 text-xs">⭐</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-white/90 leading-relaxed max-w-sm">
                                Technology that drives you, so you can enjoy the ride - experience the future of travel with our self-driving cars.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Quick Links</h3>
                            <div className="space-y-3">
                                {['Home', 'About', 'Fleet', 'Contact'].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase().replace(' ', '')}`}
                                        className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Opening Hours</h3>
                            <div className="space-y-3">
                                {[
                                    { day: 'Mon', hours: '6:00 - 21:30' },
                                    { day: 'Tue', hours: '6:00 - 21:30' },
                                    { day: 'Wed', hours: '6:00 - 21:30' },
                                    { day: 'Thu', hours: '6:00 - 21:30' },
                                    { day: 'Fri', hours: '6:00 - 21:30' },
                                    { day: 'Sat', hours: '6:00 - 21:30' },
                                    { day: 'Sun', hours: '6:00 - 21:30' }
                                ].map((schedule, index) => (
                                    <div key={index} className="flex justify-evenly text-white/80">
                                        <span className="font-medium">{schedule.day} :</span>
                                        <span>{schedule.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Contact Us</h3>
                            <div className="space-y-4">
                                {/* Phone */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm mb-1">Phone Number</div>
                                        <a className="text-white font-medium hover:underline">
                                            +91 8688516662
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm mb-1">Whatsapp Number</div>
                                        <a className="text-white font-medium hover:underline">
                                            +91 8688516662
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm mb-1">Location</div>
                                        <div className="text-white font-medium text-sm leading-relaxed">
                                            DNO: 26-15-9, KVV RESIDENCY, Town Kotha Rd, opp. CO OPERATIVE BANK, beside LITTLE GARDENS SCHOOL, Near Reading Room, Mtc palem, Port Area, Visakhapatnam, Andhra Pradesh 530001
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;