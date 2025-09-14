import{a,i as p,S as f}from"./assets/vendor-U3v2eiL3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();a.create({});function m(n){const o="https://pixabay.com/api/",t="52280453-e49fee1d7ac9fb337b56d8047",s=new URLSearchParams({key:t,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return a.get(o,{params:s}).then(e=>e.data.hits.length===0?p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):e.data.hits).catch(e=>{console.error(e)})}const h=new f(".js-gallery a",{}),l=document.querySelector(".loader"),y=document.querySelector(".js-gallery");function g(n){return n.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
        <li>
          <a href="${s}">
            <img src="${t}" alt="${e}">
          </a>
          <ul>
            <li> <p>Likes</p> <span>${r}</span> </li>
            <li> <p>Views</p> <span>${i}</span> </li>
            <li> <p>Comments</p> <span>${u}</span> </li>
            <li> <p>Downloads</p> <span>${d}</span> </li>
          </ul>
        </li>`).join("")}function L(){y.innerHTML=""}function S(){l.classList.remove("visually-hidden")}function b(){l.classList.add("visually-hidden")}const c=document.querySelector(".form"),E=document.querySelector(".js-gallery");c.addEventListener("submit",$);function $(n){n.preventDefault(),S(),L();const o=n.currentTarget.elements["search-text"].value.trim();m(o).then(t=>{E.insertAdjacentHTML("beforeend",g(t)),h.refresh()}).catch(t=>console.log(t)).finally(()=>{b(),c.reset()})}
//# sourceMappingURL=index.js.map
