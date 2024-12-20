// insert posts into the page
function insert_post(id,img_url, title) {
    var div_post_arr = document.getElementById(id);
    var div_post = document.createElement("div");
    div_post.className = "post";
    post_img = "<a id='post_column_img_a' href='#'><img id='post_column_img'  src='" + img_url + "' alt='" + title + "' title='" + title + "'></a>"
    post_title = "<p id='post_column_title'>" + title + "</p>"
    post_user = "<a id='post_column_user' href='#'><img id='post_column_user_img' src='img/logo/account.jpg' alt='user'></img><span id='post_column_user_name'>Admin</span></a>"
    div_post.innerHTML = post_img + post_title + post_user;
    div_post_arr.appendChild(div_post);
    console.log("Post added!");
    document.getElementById("post_column_img_a").addEventListener("click", function() {
        showPostContent('post_content');
    })
}

// show login model
function  showLoginModel() {
    document.getElementById("login_model").style.display = "block";
    document.getElementById("header_model").style.opacity = "0.5";
    document.getElementById("main_container_model").style.opacity = "0.5";
}

// close login model
function closeLoginModel() {
    document.getElementById("login_model").style.display = "none";
    document.getElementById("header_model").style.opacity = "1";
    document.getElementById("main_container_model").style.opacity = "1";
}

// login validation
function loginValidation() {
    document.getElementById("login_form").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;
        // if (email == "admin@example.com" && password == "admin") {
        if(true)   {
            closeLoginModel();
            document.getElementById("account_tags").style.display = "block";
            document.getElementById("account_tags_btn").style.display = "none";
        } else {
            document.getElementById("login_error_message").style.display = "block";
        }   
    })
}

// show sign up model
function showSignUpModel() {
    document.getElementById("login_model_header").style.display = "none";
    document.getElementById("sign_up_model_content").style.display = "block";   
}

// return to login 
function returnToLogin() {
    document.getElementById("login_model_header").style.display = "block";
    document.getElementById("sign_up_model_content").style.display = "none";
}


// show post content page
function showPostContent(id){
    var content = document.getElementById(id);
    content.style.display = "block";
    document.getElementById("header_model").style.opacity = "0.5";
    document.getElementById("main_container_model").style.opacity = "0.5";
    document.getElementById("main_container_right_menu").style.overflow = "hidden";
      
}

// close post content page
function closePostContent(id){
    var content = document.getElementById(id);
    content.style.display = "none";
    document.getElementById("header_model").style.opacity = "1";
    document.getElementById("main_container_model").style.opacity = "1";
    document.getElementById("main_container_right_menu").style.overflow = "auto";
}

// show write review page
function writeReview() {
    var x = document.getElementById("post-review1");
    var y = document.getElementById("post-review");
    y.style.display = "none";
    x.style.display = "flex";
}

// hide write review page
function hideReview() {
    var x = document.getElementById("post-review1");
    var y = document.getElementById("post-review");
    x.style.display = "none";
    y.style.display = "flex";
}


// class Post {
//     constructor(id, img_url, title, content) {
//         this.id = id;
//         this.img_url = img_url;
//         this.title = title;
//         this.content = content;
//     }
// }

//create post
function create_post() {
    const urls = new Array();
    url1 = "img/post1.jpg";
    url2 = "img/post2.jpeg";
    url3 = "img/post3.jpeg";
    url4 = "img/post4.jpeg";
    url5 = "img/post5.jpeg";
    urls.push(url1, url2, url3, url4, url5);

    // const posts = new Array();

    for (var i = 0; i <= 30; i++) {
        num = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        const id = "post" + num;
        const random_url = urls[num2 - 1];
        const random_title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        // posts.push(new Post(id, random_url, random_title, random_content));
        insert_post(id, random_url, random_title);
    }

    for (var i = 0; i <= 30; i++) {
        num = Math.floor(Math.random() * 5) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        const id = "post-" + num;
        const random_url = urls[num2 - 1];
        const random_title = "Post " + i;
        const random_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. ";
        insert_post(id, random_url, random_title, random_content);
    }

}


// account choose home page
function choose_home(id) {
    document.getElementById(id).style.backgroundColor = "#f2f2f2";

    if (id == "home-content-menu-posts") {
        document.getElementById("home-content-menu-collections").style.backgroundColor = "white";
        document.getElementById("home-content-menu-likes").style.backgroundColor = "white";
        // home-content-menu-posts
        document.getElementById("home-content-posts").style.display = "block";
        document.getElementById("home-content-collections").style.display = "none";
        document.getElementById("home-content-likes").style.display = "none";
    } else if (id == "home-content-menu-collections") {
        document.getElementById("home-content-menu-posts").style.backgroundColor = "white";
        document.getElementById("home-content-menu-likes").style.backgroundColor = "white";
        // home-content-menu-collections    
        document.getElementById("home-content-posts").style.display = "none";
        document.getElementById("home-content-collections").style.display = "block";
        document.getElementById("home-content-likes").style.display = "none";
    } else if (id == "home-content-menu-likes") {
        document.getElementById("home-content-menu-posts").style.backgroundColor = "white";
        document.getElementById("home-content-menu-collections").style.backgroundColor = "white";
        // home-content-menu-likes
        document.getElementById("home-content-posts").style.display = "none";
        document.getElementById("home-content-collections").style.display = "none";
        document.getElementById("home-content-likes").style.display = "block";
    }  

}

// show account home page
function show_account_home(tips) {
    if (tips == "account") {
    document.getElementById("main_container_right_menu").style.display = "none";
    document.getElementById("user_account_home").style.display = "block";

    } else if (tips == "discover") {
        document.getElementById("main_container_right_menu").style.display = "block";
        document.getElementById("user_account_home").style.display = "none";

    }
}


window.onload = function() {
    
   create_post();
}