import{a as u,i as a,S as m}from"./assets/vendor-U3v2eiL3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();u.create({});function y(n){const o="https://pixabay.com/api/",t="52280453-e49fee1d7ac9fb337b56d8047",i=new URLSearchParams({key:t,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(o,{params:i}).then(e=>e.data.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):e.data.hits).catch(e=>{console.error(e)})}const g=new m(".gallery a",{}),p=document.querySelector(".loader"),f=document.querySelector(".gallery");function L(n){const o=n.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:d,downloads:h})=>`
        <li>
          <a href="${i}">
            <img src="${t}" alt="${e}">
          </a>
          <ul>
            <li> <p>Likes</p> <span>${r}</span> </li>
            <li> <p>Views</p> <span>${s}</span> </li>
            <li> <p>Comments</p> <span>${d}</span> </li>
            <li> <p>Downloads</p> <span>${h}</span> </li>
          </ul>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),g.refresh()}function S(){f.innerHTML=""}function b(){p.classList.remove("visually-hidden")}function c(){p.classList.add("visually-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",E);function E(n){n.preventDefault(),b(),S();const o=n.currentTarget.elements["search-text"].value.trim();if(o.length===0)return c(),l.reset(),console.log("Work in if"),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});y(o).then(t=>{!t||t.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(t)}).catch(t=>console.log(t)).finally(()=>{c(),l.reset()})}
//# sourceMappingURL=index.js.map
