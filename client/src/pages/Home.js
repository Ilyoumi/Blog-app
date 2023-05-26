import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
	const posts = [
		{
			id: 1,
			title: "Exploring the Wonders of Nature",
			desc: "Embark on a mesmerizing journey through lush forests, majestic mountains, and serene beaches. Immerse yourself in the beauty of nature and witness breathtaking landscapes that will leave you in awe.",
			img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
		},
		{
			id: 2,
			title: "Unleashing Your Inner Chef: Culinary Delights",
			desc: "Indulge in a gastronomic adventure as we dive into the world of culinary delights. Discover secret recipes, expert cooking techniques, and innovative flavors that will take your taste buds on an extraordinary culinary journey..",
			img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 3,
			title: "Tech Gadgets of the Future",
			desc: "Get a glimpse into the future with the most revolutionary tech gadgets that are reshaping our world. From advanced AI assistants to mind-boggling virtual reality experiences, explore the cutting-edge innovations that are defining the future of technology.",
			img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 4,
			title: "The Art of Mindfulness: Finding Inner Peace",
			desc: "In a fast-paced world, discover the transformative power of mindfulness. Learn practical techniques and exercises to cultivate a calm and focused mind, reduce stress, and unlock a deep sense of inner peace and well-being.",
			img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 5,
			title: "The Thrills and Chills of Adventure Travel",
			desc: "Embark on heart-pounding adventures to the world's most exhilarating destinations. From adrenaline-fueled activities like skydiving and bungee jumping to epic hiking trails and wildlife encounters, experience the thrill of adventure travel like never before",
			img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	return <div className="home">
          <div className="posts">
               {posts.map(post => (
                    <div className="post" key={post.id}>
                         <div className="img">
                              <img src={post.img} alt="" />
                         </div>
                         <div className="content">
                              <Link className="link" to={`/post/${post.id}`}>
                                   <h1>{post.title}</h1>
                              </Link>
                              <p>{post.desc}</p>
                                   <button>Read More</button>
                         </div>
                    </div>
               ))}
          </div>
     </div>;
};

export default Home;
