import React from 'react'
import './singlePost.css'
function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <b>Bipin</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam minima rem cum. Veniam similique amet, expedita, asperiores recusandae accusamus nulla officiis non repellendus in obcaecati, laboriosam doloribus accusantium et beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium recusandae ea quae optio, iure impedit sequi illum pariatur sint laudantium facilis qui odit minus voluptatibus ratione non eveniet blanditiis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta, deleniti fugit quod doloremque aliquid culpa necessitatibus ducimus placeat aut magnam magni tempora, et nisi nobis quae impedit. Eum, aspernatur.
            </p>
            </div>


        </div>
    )
}

export default SinglePost
