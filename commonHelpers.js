import{i as u,a as M,S as w}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const p=document.querySelector(".load-more-btn");function m(e){return e.map(({webformatURL:t,largeImageURL:s,tags:l,likes:o,views:r,comments:a,downloads:E})=>`     <li class="gallery-item">
            <div class="card">
             <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${l}"
              width="360"
            />
          </a>
          </div>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${r}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${E}</p>
            </div>
          </div>         
        </li> `).join("")}function d(){p.style.display="none"}function g(){p.style.display="block"}function y(){u.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}const O=15;async function b(e,t){const s="42680583-e819b638960e20d04367e2a0d";try{return e.includes(" ")&&e.replace(/\s+/g,"+"),await M.get("https://pixabay.com/api/",{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:O}})}catch{iziToast.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}const L=document.querySelector(".form-search"),h=document.querySelector(".gallery"),$=document.querySelector(".loader"),q=document.querySelector(".load-more-btn");let f="",v;const P="block",c="none",S=15;let n=1;function i(e){$.style.display=e}L.addEventListener("submit",A);q.addEventListener("click",D);k();function A(e){if(e.preventDefault(),n=1,h.innerHTML="",i(P),f=e.target.elements.search.value.trim(),!f){u.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),i(c),d();return}b(f,n).then(({data:t})=>{i(c);const s=Math.ceil(t.totalHits/S);if(n===s?(d(),y()):g(),!t.hits.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}h.insertAdjacentHTML("beforeend",m(t.hits)),u.success({title:"Wow",message:`We found ${t.totalHits} pictures!`}),v=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),L.reset()}).catch(t=>{i(c),console.log(t)})}function D(){n+=1,g(),i(c),b(f,n).then(({data:e})=>{h.insertAdjacentHTML("beforeend",m(e.hits)),v.refresh();const t=Math.ceil(e.totalHits/S);if(n===t){i(c),d(),y();return}i(P)}).catch(e=>console.log(e))}function k(){const e=document.querySelectorAll(".card");if(e.length>0){const t=e[0].getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
