export var homeHtml = `


<div class="home">
<h2>Welcome to Feyton Inc</h2>

<div class="blog-list">
    <div class="card">
        <div class="post-image">
            <img src="/IMG-20191129-WA0001.jpg" alt="">
            <div class="post-info">
                <span>Fabruce |</span>
                <span>25 June 2021</span>
            </div>
        </div>
        <a href="#post" class="title" data-post_id="">Lorem ipsum dolor sit amet consectetur.</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eius!</p>
        <a href="#post" data-post_id="" class="btn btn-primary">Read more</a>

    </div>
    <div class="card">
        <div class="post-image">
            <img src="/IMG-20191129-WA0001.jpg" alt="">
            <div class="post-info">
                <span>Fabruce |</span>
                <span>25 June 2021</span>
            </div>
        </div>
        <a href="#post" class="title read-post" data-post_id="">Lorem ipsum dolor sit amet consectetur.</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eius!</p>
        <a href="#post" data-post_id="" class="btn btn-primary read-post">Read more</a>

    </div>
    <div class="card">
        <div class="post-image">
            <img src="/IMG-20191129-WA0001.jpg" alt="">
            <div class="post-info">
                <span>Fabruce |</span>
                <span>25 June 2021</span>
            </div>
        </div>
        <a href="#post" class="title" data-post_id="">Lorem ipsum dolor sit amet consectetur.</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eius!</p>
        <a href="#post" data-post_id="" class="btn btn-primary">Read more</a>

    </div>
    <div class="card">
        <div class="post-image">
            <img src="/IMG-20191129-WA0001.jpg" alt="">
            <div class="post-info">
                <span>Fabruce |</span>
                <span>25 June 2021</span>
            </div>
        </div>
        <a href="#post" class="title" data-post_id="">Lorem ipsum dolor sit amet consectetur.</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, eius!</p>
        <a href="#post" data-post_id="" class="btn btn-primary">Read more</a>

    </div>
</div>
</div>

`;

export var loginView = `

<div class="login-view">
<form action="#none" id="login-form">
    <h2>Login here</h2>
    <hr>
    <input type="email" name="email" id="user-email" placeholder="Email" required>
    <input type="password" name="email" id="user-password" placeholder="Password" required>
    <input type="submit" id="form-submit" value="Login" class="btn btn-primary">
    <h2>OR</h2>
    <hr>
    <div class="button-group">
                    <button class="btn btn-secondary" id="login-google">Google</button>
                    <button class="btn btn-primary" id="login-facebook">Facebook</button>
                </div>

</form>
</div>
`;

export var signupView = `
<div class="signup-view">
<form action="#none" id="signup-form" method="POST">
    <h2>Signup here</h2>
    <hr>
    <input type="text" name="name" id="user-name" placeholder="Name" required minlength="3">
    <input type="email" name="email" id="user-email" placeholder="Email" required>
    <input type="password" name="password1" id="user-password1" placeholder="Password" required minlength="6">
    <input type="password" name="password2" id="user-password2" placeholder="Confirm Password" required minlength="6">
    <input type="file" accept="image/*" name="profile-picture" id="user-picture" placeholder="Upload picture"
        class="custom-file-input">

    <div class="image-upload">
        <img src="" class="uploaded-image" alt="">
    </div>
    <input type="submit" id="form-submit" value="Signup" class="btn btn-primary signup-submit">
    <h2>Continue With</h2>
    <hr>
    <div class="button-group">
        <button class="btn btn-secondary" id="login-google">Google</button>
        <button class="btn btn-primary" id="login-facebook">Facebook</button>
    </div>

</form>
</div>

`;

export var blogDetailView = `

<div class="blog-details">

<section class="main-content">
    <div class="blog-details">
        <h2 id="post-title">The new macbook is the best on market</h2>
        <img src="./IMG-20191129-WA0001.jpg" alt="" class="blog-photo">
        <div class="blog-info">
            <span id="post-author">Fabruce |</span>
            <span id="post-date">25 June 2021</span>
        </div>
        <div class="blog-content" id="blog-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel laborum, amet voluptatibus iure
                dolor corporis optio magni voluptate veniam odit at minima ullam eum cumque nulla
                consequuntur iste illo nostrum?</p>

        </div>
        <hr>
        <div class="comments">
            <h2>Join the Conservation</h2>
            <form action="#e" id="comment-form" class="logged-in">
                <textarea name="comment" id="user-comment" cols="30" rows="3"
                    placeholder="Write your comment here..."></textarea>
                <input type="submit" value="Send" class="btn btn-primary">
            </form>
            <div class="logged-out">
                <p class="warning p">To Comment, you must have an account!</p>
                <div class="button-group logged-out">
                    <div class="btn btn-primary"><a class="nav-link login">Login</a></div>
                    <span>Or</span>
                    <div class="btn btn-secondary"><a class="nav-link signup">Signup</a></div>
                </div>
            </div>


        </div>
        <div class="comment-list">
            <div class="comment">
                <div class="commentor">
                    <img src="IMG-20191129-WA0001.jpg" alt="">
                    <h4>Fabrice</h4>

                </div>
                <div class="message">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique unde
                        inventore deleniti ipsum nulla doloremque quasi nostrum quo eligendi possimus
                        excepturi omnis sequi asperiores ab, perferendis autem iusto? Impedit!</p>
                    <div class="links"><a href="###hd" class="comment-reply">Reply</a> <a href="#none"
                            class="comment-like">Like &nbsp;<span class="comment-likes">(20)</span></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <aside class="sidebar">
        <h2>About Author</h2>
        <div class="author-card">
            <img src="/IMG-20191129-WA0001.jpg" alt="" class="author-image">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti ratione aliquam
                aperiam dolore dolorum tenetur rem, explicabo veniam a eveniet iusto praesentium quibusdam
                corporis velit delectus modi provident earum.</p>
            <h3>Follow me</h3>
            <div class="social">
                <div class="btn btn-follow" data-link_facebook="">Facebook</div>
                <div class="btn btn-follow" data-link_twitter="">Twitter</div>
            </div>
        </div>

        <h2>Subscribe to our newsletter</h2>
        <div class="form-div-sub">
            <p>Receive our latest news directly into your inbox</p>
            <form action="#hd" id="subscribe-form">
                <input type="email" name="email" id="sub-email" placeholder="Your Email">
                <input type="submit" value="Subscribe" class="btn btn-primary">
            </form>
        </div>


    </aside>
</section>

</div>

`;

export var createPostView = `
<div class="create-view">
<h2 class="capitalize">Create a new post</h2>

<form action="#fdd" id="create-post-form">
    <input type="text" name="post-title" id="post-title-create" placeholder="Title" required minlength="3">

    <input type="file" accept="image/*" name="post-picture" id="post-picture" placeholder="Post Picture"
        class="custom-file-input" required>
    <textarea name="content" id="post-content-create" cols="30" rows="10"
        placeholder="Add your content here"></textarea>

    <input type="submit" value="Create" class="btn btn-primary">




</form>
</div>



`;
