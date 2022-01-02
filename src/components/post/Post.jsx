import React from 'react'
import './post.css'
function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi ea consequuntur veritatis praesentium et quia esse odio. Quos ratione totam in excepturi soluta inventore qui ullam natus quam! Eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi ea consequuntur veritatis praesentium et quia esse odio. Quos ratione totam in excepturi soluta inventore qui ullam natus quam! Eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, commodi ea consequuntur veritatis praesentium et quia esse odio. Quos ratione totam in excepturi soluta inventore qui ullam natus quam! Eligendi.</p>
            
        </div>
    )
}

export default Post
