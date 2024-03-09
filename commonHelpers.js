import{a as M,i as h,S as w}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p=document.querySelector(".load-more-btn");function m(e){return e.map(({webformatURL:o,largeImageURL:s,tags:l,likes:t,views:r,comments:a,downloads:E})=>`     <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${l}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
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
        </li>`).join("")}function u(){p.style.display="none"}function g(){p.style.display="block"}function y(){iziToast.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}const O=40;async function b(e,o){const s="42680583-e819b638960e20d04367e2a0d";try{return e.includes(" ")&&e.replace(/\s+/g,"+"),await M.get("https://pixabay.com/api/",{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:O}})}catch{iziToast.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}const L=document.querySelector(".form-search"),f=document.querySelector(".gallery"),$=document.querySelector(".loader"),D=document.querySelector(".load-more-btn");let d="",v;const P="block",c="none",S=15;let n=1;function i(e){$.style.display=e}L.addEventListener("submit",q);D.addEventListener("click",A);T();function q(e){if(e.preventDefault(),n=1,f.innerHTML="",i(P),d=e.target.elements.search.value.trim(),!d){h.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),i(c),u();return}b(d,n).then(({data:o})=>{i(c);const s=Math.ceil(o.totalHits/S);if(n===s?(u(),y()):g(),!o.hits.length){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u();return}f.insertAdjacentHTML("beforeend",m(o.hits)),h.success({title:"Wow",message:`We found ${o.totalHits} pictures!`}),v=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),L.reset()}).catch(o=>{i(c),console.log(o)})}function A(){n+=1,g(),i(c),b(d,n).then(({data:e})=>{f.insertAdjacentHTML("beforeend",m(e.hits)),v.refresh();const o=Math.ceil(e.totalHits/S);if(n===o){i(c),u(),y();return}i(P)}).catch(e=>console.log(e))}function T(){const e=f.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*e,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
