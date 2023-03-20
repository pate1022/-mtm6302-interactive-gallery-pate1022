var imageLinks = {
  "Parlaiment Hill":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSz0SNu6A1mXKxzw1F3oIuSYwzMaA73ODsy_0_rRE_cqs00aIdnzCS1qc0D5fCwQulW",
  "CN Tower": "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/Toronto-CN-Tower.jpg",
  "Niagra Falls":"https://images.dailyhive.com/20160609135659/Niagara-Falls.jpg",
  "Quebec City Old Port":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd_BoDj0WmOP9BCTSqvvg3XekISkozcXbJh5bU96Tf0hRfxl9t4H3l4tWORNaRbkeHQK96G6cm4V7KXp9Qb7Rbg",
  "Notre Dame Basilica Montreal":"https://havecamerawilltravel.com/places/wp-content/uploads/sites/3/2016/11/montreal-interior-notre-dame-basilica-in-montreal-02-copyright-havecamerawilltravel-com.jpg",
  "Banff National Park":"https://static.toiimg.com/photo/55704503/.jpg",
  "Lake Louise":"https://i0.wp.com/acitygirloutside.com/wp-content/uploads/2021/09/Lake-Louise-Sunrise-Banff-National-Park-Canada-A-City-Girl-Outside.jpg?fit=2000%2C1334&ssl=1",
  "Churchil":"https://imageio.forbes.com/specials-images/imageserve/5e0a821e4e291700061a264e/The-northern-lights-are-also-known-as-the-aurora-borealis/960x0.jpg?format=jpg&width=960",
  "Cape Breton Island":"https://backroadramblers.com/wp-content/uploads/2021/05/skyline-trail-cape-breton.jpeg.webp",
  "Whistler Ski Resort":"https://dam-assets.vailresorts.com/is/image/vailresorts/skier_pow_FCE-1?resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
  "City Of Vancouver":"https://peaceofthecircle.com/wp-content/uploads/2022/12/Vancouver.webp",
  "Bay Of Fundy":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e6/af/6e/aerial-view-of-the-three.jpg?w=1200&h=-1&s=1"
}

function fillImages()
{
    for(var id in imageLinks)
    {
      var box = document.getElementById('box'); 
      var boxImg = document.getElementById('boxImg');
      var type = document.getElementById('type');
      var imgContainer = document.createElement('div');
      var imgDesc = document.createElement('div');
      var img = document.createElement('img'); 
        
      imgContainer.setAttribute("id", "imageContainer"+id);
      imgContainer.className = "itemContainer";
      imgDesc.className = "overlayDesc";
      img.src = imageLinks[id]; 
      img.className = "item"; 
      img.alt = id;
      img.onclick = function()
      
      {
        box.style.display = "block";
        boxImg.src = this.src;
        description.innerHTML = this.alt;
      }
      
      var span = document.getElementById('imagebox'); 
      span.onclick = function()
      {
        box.style.display = "none";
      }

      imgDesc.innerHTML = id;
      document.getElementById('container').appendChild(imgContainer);
      document.getElementById('imageContainer'+id).appendChild(img);
      document.getElementById('imageContainer'+id).appendChild(imgDesc);

    }
}
function hoverEffect()
{
  $(".item").wrap('<div class="alt-wrap"/>');
  $(".item").each(function() {
  $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })
}

window.onload = function()
{
    fillImages();
};


