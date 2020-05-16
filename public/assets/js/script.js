//set global variables
const body = $('body');
const navElm = $('<nav class="navbar navbar-expand-lg navbar-dark bg-dark">');
//enter data for questions


//call on load function
onLoadFunction()

//function definitions
function onLoadFunction() {
    const pageTitle = ["About_Me", "Portfolio", "Contact"];
    const navBrand = $('<div class="navbar-brand">');
    const navToggler = $('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
    const navSpan = $('<span class="navbar-toggler-icon">');
    const navCollapse = $('<div class="collapse navbar-collapse" id="navbarSupportedContent">');
    const ulNav = $('<ul class="navbar-nav ml-auto">')

    for(let i = 0; i < pageTitle.length; i++){
        const liNav = $('<li class="nav-item">');
        var navA = $(`<a id="${pageTitle[i]}" class="nav-link white" href="#${pageTitle[i]}">`);

        navA.text(pageTitle[i]);

        $(liNav).append(navA);
        $(ulNav).append(liNav);


    }

    //create navbar

    navBrand.text("HECTOR MUNIZ");

    $(navCollapse).append(ulNav)
    $(navSpan).appendTo(navToggler);
    $(navElm).append(navBrand);
    $(navToggler).appendTo(navElm);
    $(navElm).append(navCollapse);


    body.append(navElm);

    $('#About_Me').on('click', (event) => {
        event.preventDefault();
        clearDiv();
        aboutMe()
    });

    $('#Portfolio').on('click', (event) => {
        event.preventDefault();
        clearDiv();
        portfolio()
    });

    $('#Contact').on('click', (event) => {
        event.preventDefault();
        clearDiv();
        contact()
    });

    aboutMe();
}

function aboutMe(){
    const container = $('<div id="About_Me" class="container">');
    const row = $('<div class="row">');
    const col5 = $('<div class="col-5">');
    const col7 = $('<div class="col-lg-7">');
    const fontContent = $('<div class="row fontContent">');
    const pageHeader = $('<h1 class="page-header fontBackground">');

    pageHeader.text('A Little Somthing About Me');

    $(fontContent).append($('<p>')
    .text(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic eligendi quisquam quae, reiciendis provident quod? Sequi dolores cumque reprehenderit rerum porro repellendus accusantium est, dolore culpa quasi deserunt libero.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi quaerat dignissimos architecto error voluptates ut quae magni dolore nihil corporis, veniam aliquid ducimus repellendus, dolor nostrum autem est. Impedit.
    `));
    $(fontContent).append($('<p>')
    .text(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius unde fuga quia harum perferendis tempora! Ratione, doloribus totam cumque quibusdam, aperiam reiciendis voluptatum nihil aliquid veniam, praesentium accusamus! Dolore?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora atque laboriosam, sit deleniti repellat odit. Adipisci tempore, quia excepturi dolore et dolorem delectus eos qui, libero voluptates aliquam! Illo, dicta!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repellendus sequi. Expedita nihil cum natus perspiciatis quis architecto, quas harum maiores tenetur? Quibusdam explicabo libero sit omnis voluptatem, repellat tempora.
    `));

    $(fontContent).prepend(pageHeader);
    $(col7).append(fontContent);
    $(col5).append(' <img src="./public/assets/images/OnaKayak.jpg" class="img-fluid img-thumbnail img-hieght" alt="Me on a Kayak">');
    $(row).append(col5);
    $(row).append(col7);
    $(row).appendTo(container)
    body.append(container);

}

function clearDiv(){
    var getDiv = $('.container');

    getDiv.remove();
}


function portfolio(){
    const container = $('<div class="container">');
    const header = $('<h1 class="fontContent fontBackground text-center">');
    const projects = ['Code Refactor', 'Portfolio', 'Password Generated', 'Code Quiz', 'Daily Planner', 'Weather Dashboard', 'Bing Me Food', 'Virus Vices', 'Coming Soon'];
    const imgLink = ["./public/assets/images/SEO.png", "./public/assets/images/Portfolio.png", "./public/assets/images/Password-Generator.png", "./public/assets/images/Code-Quiz.png", "./public/assets/images/Day-Planner.png", "./public/assets/images/Weather-Dashboard.png", "./public/assets/images/BingMeFood.png", "./public/assets/images/VirusVices.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMf6ACFGtPPs2zybXwLZuRehV8azq8-WLYaU1Ply46Hm1G2U2T"];
    const prjLink = ["https://munioro.github.io/UTSA-BC-Homework/", "https://munioro.github.io/Portfolio/", "https://munioro.github.io/Password-Generator/", "https://munioro.github.io/Code-Quiz/", "https://munioro.github.io/Day-Planner/", "https://munioro.github.io/Weather-Dashboard/", "https://munioro.github.io/Class_Project_01/", "https://hidden-lowlands-02857.herokuapp.com/", "#"];
    const gitLink = ["https://github.com/Munioro/UTSA-BC-Homework", "https://github.com/Munioro/Portfolio", "https://github.com/Munioro/Password-Generator", "https://github.com/Munioro/Code-Quiz", "https://github.com/Munioro/Day-Planner", "https://github.com/Munioro/Weather-Dashboard", "https://github.com/Munioro/Class_Project_01", "https://github.com/Munioro/improved-project2", "#"];
    const row = $('<div class="row align-items-start">');
    let count = 0;

    header.text('Portfolio');

    $(container).append(header);


    for(let i = 0; i < projects.length; i++){
        const col1 = $('<div class="col-1">');

        const col5 = $('<div class="col-md-5">');
        const contImg = $('<div class="container-image">');
        let anchor = $(`<a href="${prjLink[i]}" target="_blank">`);
        let img = $(`<img src="${imgLink[i]}" class="img-fluid img-thumbnail" alt="${prjLink[i]}">`);
        let banner = $('<div class="bottom-centered">').text(projects[i] + " ");
        let gitAnchor = $(`<a href="${gitLink[i]}" target="_blank">`).text('Git Hub')

        $(gitAnchor).appendTo(banner);
        $(img).appendTo(anchor);
        $(contImg).append(anchor);
        $(contImg).append(banner);
        $(col5).append(contImg);
        $(row).append(col1);
        $(row).append(col5);
        $(row).append(col1);
        $(container).append(row)

    }


    body.append(container);
};

function contact(){
    const container = $('<div class="container">');
    const row = $('<div class="row">');
    const col4 = $('<div class="col-4">');
    const card = $('<div class="card fontBackground" style="width: 25rem;">');
    const cardBody = $('<div class="card-body contactColor">');
    const header = $('<h3 class="card-title">Contact Info</h3>');
    const ul = $('<ul>');
    const subTitle = ['Email', 'Phone', 'GitHub', 'LinkedIn'];
    const pContent = ['munioro27@gmail.com', '(210) 929-3884', 'https://github.com/Munioro', 'www.linkedin.com/in/hector-muniz-259b84178'];
    const links = ['https://github.com/Munioro', 'https://  www.linkedin.com/in/hector-muniz-259b84178'];
    const setAnchors = 2;

    for (let i = 0; i < subTitle.length; i++){

    const li = $('<li>');
    const subHead = $('<h5 class="card-subtitle">').text(subTitle[i]);

    $(li).append(subHead);
    $(ul).append(li);

        if (i >= setAnchors){
            let anchor = $(`<a href="${links[i-2]}" class="card-text" target="_blank"> class="card-text" target="_blank">`).text(pContent[i])
            $(li).append(anchor)
        }else{
            let p = $('<p class="card-text">').text(pContent[i]);
            $(li).append(p)
        }
    };
    $(header).appendTo(cardBody);
    $(ul).appendTo(cardBody);
    $(cardBody).appendTo(card);
    $(col4).appendTo(row);
    $(card).appendTo(row);
    $(row).appendTo(container);

    body.append(container);

}