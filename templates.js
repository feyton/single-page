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
<form action="#none">
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
    <input type="text" name="name" id="user-name" placeholder="Name">
    <input type="email" name="email" id="user-email" placeholder="Email">
    <input type="password" name="email" id="user-password1" placeholder="Password">
    <input type="password" name="email" id="user-password2" placeholder="Confirm Password">
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
