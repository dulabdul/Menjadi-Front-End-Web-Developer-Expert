import CONFIG from '../../globals/config';

const CreateRestaurantItemTemplate = (restaurant) => /* html */ `
       
          <div class="restaurant card_menu-wrapper">
                  <div class="menu_wrapper-img">
                  <a href="${`/#/detail/${restaurant.id}`}">
                  <picture>
                  <source class="lazyload" media="(max-width: 600px)" srcset="${
                    CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
                  }">
                  <img class="lazyload" src="${
                    CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
                  }" alt="${restaurant.name || '-'}"/>
                </picture>
               
                  </a>
                  </div>
                  <div class="menu_content">
                  <a href="${`/#/detail/${restaurant.id}`}">
                  <h3 class="menu_name">${restaurant.name || '-'}</h3>
                  </a>
                    <div class="menu_wrapper_info">
                      <h4>${restaurant.city}</h4>
                      <p>${restaurant.rating}</p>
                    </div>
                    <p class="menu_description">${
                      restaurant.description || '-'
                    }</p>
                  </div>
                </div>
     
       `;

const CreateRestaurantDetailTemplate = (restaurant) => /* html */ ` 
<h2 class="detail_title">${restaurant.name}</h2>
<div class="detail_wrapper" id="detail">
<div class="image_detail">
<picture>
<source media="(max-width: 600px)" srcset="${
  CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
}">
<img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${
  restaurant.name || '-'
}"/>
</picture>
</div>
<div class="information_detail">
<h3>Information</h3>
<h6>City</h6>
<p>${restaurant.address}</p>
<h6>Address</h6>
<p>${restaurant.city}</p>
<h6>Rating</h6>
<p>${restaurant.rating}</p>
<h6>Category</h6>
${restaurant.categories.map((item) => `<p>${item.name}</p>`)}
<h6>Description</h6>
<p class="description_detail">${restaurant.description}</p>
</div>
</div>
<div class="detail_menu">
<h3>Menu</h3>
<div class="menu_category">
<div>
<h4>Foods</h4>
${restaurant.menus.foods.map((item) => /* html */ `<p>${item.name}</p>`)}
</div>
<div>
<h4>Drinks</h4>
${restaurant.menus.drinks.map((item) => /* html */ `<p>${item.name}</p>`)}
</div>
</div>
</div>

  `;

const createReviewListTemplate = (restaurant) => /* html */ `

  <div class='review_detail'>
<h6 class='review_detail-name'>${restaurant.name}</h6>
<p class='review_detail-date'>${restaurant.date}</p>
<p class='review_detail-content'>${restaurant.review}</p>
</div>
`;
const createLikeButtonTemplate = () => /* html */ `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */ `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createNotFoundTemplate = () => /* html */ `
    <div class="notfound_wrapper">
    <h1>Upss..Tidak ada data yang ditemukan</h1>
    </div>
`;

const createReviewTemplate = () => /* html */ `
  <form action="">
    <label for="addName">Name</label>
    <input type="text" id="addName" class="addName" name="nama" placeholder="Your name.." tabindex="0">

    <label for="addReview">Review</label>
     <textarea name="review" class="addReview" id="addReview" placeholder="Add Review" tabindex="0"></textarea>
 
 <button aria-label="send review" aria-hidden="true" type="submit" class="btnSubmit" tabindex="0">Send</button>
  </form>

`;
export {
  CreateRestaurantItemTemplate,
  CreateRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNotFoundTemplate,
  createReviewTemplate,
  createReviewListTemplate,
};
