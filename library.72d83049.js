import"./library.d94fcef9.js";var e=globalThis,r={},i={},t=e.parcelRequirecfdd;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,r){i[e]=r},e.parcelRequirecfdd=t),t.register;var a=t("3479m"),d=t("40lI0");t("621tU"),t("55Vfn");let l="2dc37bad3bfac30838d6981f7b0688de",c=JSON.parse(localStorage.getItem("watched-movies")),o=JSON.parse(localStorage.getItem("queued-movies")),s=document.querySelector("#library-watched"),n=document.querySelector("#library-queued");if(c&&Array.isArray(c))c.forEach(e=>{let r=document.createElement("div");r.className="card",r.innerHTML=`
          <div id="card" class="card" >
            <img class="card__poster" src="${a.IMG_URL}${e.poster_path}" alt="${e.original_title}" title="${e.original_title}" />
          </div>
          <div class="card__content">
            <div class="card__info">
              <div class="card__title">${e.original_title}</div>
              <div class="card__genre">${e.genres} |</div>
              <div class="card__release">${e.release_date.slice(0,4)}</div>
            </div>
          </div>`,r.addEventListener("click",async()=>{(0,d.modalBoxShow)(e),await p(e.id)}),s.appendChild(r),s.classList.remove("hiddenColor")});else{let e=document.createElement("div");e.innerHTML=`
    <p class="library__title">
        <strong>You have no watched movies.</strong><br /><a href="index.html">Select first movie</a> and click "Add to watched" button.
    </p>`,s.appendChild(e)}if(o&&Array.isArray(o))o.forEach(e=>{let r=document.createElement("div");r.className="card",r.innerHTML=`
          <div id="card" class="card" >
            <img class="card__poster" src="${a.IMG_URL}${e.poster_path}" alt="${e.original_title}" title="${e.original_title}" />
          </div>
          <div class="card__content">
            <div class="card__info">
              <div class="card__title">${e.original_title}</div>
              <div class="card__genre">${e.genres} |</div>
              <div class="card__release">${e.release_date.slice(0,4)}</div>
            </div>
          </div>`,r.addEventListener("click",async()=>{(0,d.modalBoxShow)(e),await p(e.id)}),n.appendChild(r),n.classList.remove("hiddenColor")});else{let e=document.createElement("div");e.innerHTML=`
    <p class="library__title">
        <strong>You have no queued movies.</strong><br /><a href="index.html">Select first movie</a> and click "Add to queue" button.
    </p>`,n.appendChild(e)}let u=document.querySelector("#button-watched"),v=document.querySelector("#button-queue"),m=document.querySelector("#library-watched"),_=document.querySelector("#library-queued"),h=document.querySelector("#library-info");u.addEventListener("click",()=>{m.classList.remove("hidden-in-library"),_.classList.add("hidden-in-library"),h.classList.add("hidden-in-library")}),v.addEventListener("click",()=>{m.classList.add("hidden-in-library"),_.classList.remove("hidden-in-library"),h.classList.add("hidden-in-library")});let p=async e=>{let r={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${l}`}};try{let i=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?language=${a.LANGUAGE}&api_key=${l}`,r);if(!i.ok)throw Error("Network response was not ok");let{results:t}=await i.json(),d=t[0].key,c=`https://www.youtube.com/embed/${d}`;document.querySelector(".modal__trailer").innerHTML=`<iframe id="modal__trailer-video" width="373" height="210" src="${c}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}catch(e){console.error(e)}};
//# sourceMappingURL=library.72d83049.js.map
