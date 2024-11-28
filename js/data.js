
fetch('data/services.json')
    .then(response => response.json())
    .then(data => {
        const services = data.services.slice(0, 5); // Get only the top 5 services
        const servicesRow = document.getElementById('services-row-index');

        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('col-lg-4', 'col-md-4'); // Adjusted class to match the provided HTML

            serviceCard.innerHTML = `
                <div class="medical-service-item wow fadeInUp">
                    <div class="medical-service-content">
                        <div class="icon-box">
                            <img src="${service.image}" alt="">
                        </div>
                        <div class="medical-content">
                            <h3>${service.name}</h3>
                            <p>${service.paragraph}</p>
                        </div>
                        <div class="medical-service-btn">
                            <a href="${service.link}" class="btn-services">read more <i class="far fa-arrow-alt-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            `;

            servicesRow.appendChild(serviceCard);
        });
    })
    .catch(error => console.error('Error fetching services data:', error));

// Blogs for blog page
fetch('data/blog.json')
    .then(response => response.json())
    .then(data => {
        const blogCardsContainer = document.getElementById('blogCards');
        data.blogs.forEach(blog => {
            const blogCard = `
                <div class="col-lg-4 col-md-6">
                    <div class="post-item wow fadeInUp" data-wow-delay="0.25s">
                        <div class="post-featured-image">
                            <figure class="image-anime">
                                <a href="${blog.read_more}"><img src="${blog.img}" alt=""></a>
                            </figure>
                        </div>
                        <div class="post-item-body">
                            <h2><a href="${blog.read_more}">${blog.title}</a></h2>
                            <p>${blog.content}</p>
                        </div>
                        <div class="btn-readmore">
                            <a href="${blog.read_more}">Read More <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
            `;
            blogCardsContainer.innerHTML += blogCard;
        });
    });