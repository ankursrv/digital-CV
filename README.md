1. Use React Icon .
2. Responsive Mobile header
3. Active Nav Link  
NavLink React Router का एक विशेष कंपोनेंट है, जो लिंक की सक्रिय स्थिति को हैंडल करता है। यह एक साधारण Link की तरह ही होता है, लेकिन इसमें अतिरिक्त कार्यक्षमता होती है जो इसे उस स्थिति में एक विशेष CSS क्लास देने की अनुमति देती है जब यह लिंक वर्तमान URL के साथ मेल खाता है। यह सक्रिय लिंक की स्टाइलिंग को आसान बनाता है।
Key properties of NavLink -> activeClassName: यह उस CSS क्लास को सेट करता है जो लिंक सक्रिय होने पर लागू होती है।
                             exact:यह सुनिश्चित करता है कि केवल तभी लिंक सक्रिय होगा जब पथ पूरी तरह से URL से मेल खाता है।
Syntax->
<li key={index} className="py-2 text-black text-sm uppercase">
                                        <NavLink
                                            to={navItem.href}
                                            activeClassName="active"  // This sets the class name for active state
                                            exact={navItem.href === '/'}  // Adjust exact based on your needs
                                        >
                                            {navItem.link}
                                        </NavLink>
                                    </li>

4. Swiper Slider