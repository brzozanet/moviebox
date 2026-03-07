import"./library.aec1d7a2.js";var e=globalThis,r={},i={},t=e.parcelRequirecfdd;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,r){i[e]=r},e.parcelRequirecfdd=t),t.register;var a=t("3479m"),d=t("40lI0");t("621tU");let l=JSON.parse(localStorage.getItem("watched-movies")),c=JSON.parse(localStorage.getItem("queued-movies")),o=document.querySelector("#library-watched"),s=document.querySelector("#library-queued");if(l&&Array.isArray(l))l.forEach(e=>{let r=document.createElement("div");r.className="card",r.innerHTML=`
          <div id="card" class="card" >
            <img class="card__poster" src="${a.IMG_URL}${e.poster_path}" alt="${e.original_title}" title="${e.original_title}" />
          </div>
          <div class="card__content">
            <div class="card__info">
              <div class="card__title">${e.original_title}</div>
              <div class="card__genre">${e.genres} |</div>
              <div class="card__release">${e.release_date.slice(0,4)}</div>
            </div>
          </div>`,r.addEventListener("click",async()=>{(0,d.modalBoxShow)(e),await h(e.id)}),o.appendChild(r),o.classList.remove("hiddenColor")});else{let e=document.createElement("div");e.innerHTML=`
    <p class="library__title">
        <strong>You have no watched movies.</strong><br /><a href="index.html">Select first movie</a> and click "Add to watched" button.
    </p>`,o.appendChild(e)}if(c&&Array.isArray(c))c.forEach(e=>{let r=document.createElement("div");r.className="card",r.innerHTML=`
          <div id="card" class="card" >
            <img class="card__poster" src="${a.IMG_URL}${e.poster_path}" alt="${e.original_title}" title="${e.original_title}" />
          </div>
          <div class="card__content">
            <div class="card__info">
              <div class="card__title">${e.original_title}</div>
              <div class="card__genre">${e.genres} |</div>
              <div class="card__release">${e.release_date.slice(0,4)}</div>
            </div>
          </div>`,r.addEventListener("click",async()=>{(0,d.modalBoxShow)(e),await h(e.id)}),s.appendChild(r),s.classList.remove("hiddenColor")});else{let e=document.createElement("div");e.innerHTML=`
    <p class="library__title">
        <strong>You have no queued movies.</strong><br /><a href="index.html">Select first movie</a> and click "Add to queue" button.
    </p>`,s.appendChild(e)}let n=document.querySelector("#button-watched"),u=document.querySelector("#button-queue"),v=document.querySelector("#library-watched"),m=document.querySelector("#library-queued"),_=document.querySelector("#library-info");n.addEventListener("click",()=>{v.classList.remove("hidden-in-library"),m.classList.add("hidden-in-library"),_.classList.add("hidden-in-library")}),u.addEventListener("click",()=>{v.classList.add("hidden-in-library"),m.classList.remove("hidden-in-library"),_.classList.add("hidden-in-library")});let h=async e=>{let r={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${a.API_KEY}`}};try{let i=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?language=${a.LANGUAGE}&api_key=${a.API_KEY}`,r);if(!i.ok)throw Error("Network response was not ok");let{results:t}=await i.json(),d=t[0].key,l=`https://www.youtube.com/embed/${d}`;document.querySelector(".modal__trailer").innerHTML=`<iframe id="modal__trailer-video" width="373" height="210" src="${l}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}catch(e){console.error(e)}};
//# sourceMappingURL=library.119bbe08.js.map
