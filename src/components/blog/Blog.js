import React from "react";
import BlogImage from "../../images/blog.png";
import CareerImage from "../../images/career.png";
import ForumImage from "../../images/forum.png";

export default function Blog() {
  return (
    
		<section class="services">
    <div class="container">
      <div class="video">
      <iframe className="video-iframe"  src="https://www.youtube.com/embed/jzCwiu22C_c" ></iframe>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="blog">
            <img src={BlogImage} alt="img"/>
            <h2>Our Blog</h2>
            <a href="/">View Blog</a>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="blog">
            <img src={CareerImage} alt="img"/>
            <h2>Career Opportunites</h2>
            <a href="/">Join Our Team</a>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="blog">
            <img src={ForumImage} alt="img"/>
            <h2>Help Forum</h2>
            <a href="/">Visit Help Forum</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
