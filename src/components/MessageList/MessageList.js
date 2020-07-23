import React from 'react'

const MessageList = props => {
    return (
        <div class="col-lg-4 col-md-12 no-pdd">
							<div class="msgs-list">
								<div class="msg-title">
									<h3>Messages</h3>
									<ul>
										<li><a href="#" title=""><i class="fa fa-cog"></i></a></li>
										<li><a href="#" title=""><i class="fa fa-ellipsis-v"></i></a></li>
									</ul>
								</div>
								<div class="messages-list">
									<ul>
										<li class="active">
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img1.png" alt=""/>
													<span class="msg-status"></span>
												</div>
												<div class="usr-mg-info">
													<h3>John Doe</h3>
													<p>Lorem ipsum dolor <img src="images/smley.png" alt=""/></p>
												</div>
												<span class="posted_time">1:55 PM</span>
												<span class="msg-notifc">1</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img2.png" alt=""/>
												</div>
												<div class="usr-mg-info">
													<h3>David Vane</h3>
													<p>Vestibulum ac diam..</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img3.png" alt=""/>
												</div>
												<div class="usr-mg-info">
													<h3>Nancy Dilan</h3>
													<p>Quam vehicula.</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img4.png" alt=""/>
													<span class="msg-status"></span>
												</div>
												<div class="usr-mg-info">
													<h3>Norman Kenney</h3>
													<p>Nulla quis lorem ut..</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img5.png" alt=""/>
													<span class="msg-status"></span>
												</div>
												<div class="usr-mg-info">
													<h3>James Dilan</h3>
													<p>Vivamus magna just..</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img6.png" alt=""/>
												</div>
												<div class="usr-mg-info">
													<h3>Mike Dorn</h3>
													<p>Praesent sapien massa.</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
										<li>
											<div class="usr-msg-details">
												<div class="usr-ms-img">
													<img src="images/resources/m-img7.png" alt=""/>
												</div>
												<div class="usr-mg-info">
													<h3>Patrick Morison</h3>
													<p>Convallis a pellente...</p>
												</div>
												<span class="posted_time">1:55 PM</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
    )
}

export default MessageList