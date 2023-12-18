function twhome() {
    typeWriter('Hello, World!', 'hello-world-animation');

    setTimeout(
        (() => typeWriter('Welcome to my website!', 'welcome-animation')),
        900
    );
    
    setTimeout(
        (() => typeWriter('I\'m hosted with GitHub Pages!', 'hosted-animation')),
        1800
    );
}

function twNitrogenOS() {
    typeWriter('NitrogenOS downloads and showcases', 'title-animation');
}

function twBlog() {
    typeWriter('Blog', 'title-animation');
}

function twPortfolio() {
    typeWriter('My portfolio', 'title-animation');

    setTimeout(
        (() => typeWriter('Hi there! My name is Daniel and I\'m excited to share a little bit about myself. I\'m a curious individual who enjoys learning about new things, especially when it comes to programming and mathematics. I\'m always looking for ways to challenge myself and grow my skills in these areas. In my free time, I like to work on personal projects and learn new things about programming. Thanks for stopping by my portfolio!', 'ap')), 
        1150 //0.5 sec after titles
    );
}