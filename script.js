const filterButtons=document.querySelectorAll(".filter-btn");
const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{
  button.addEventListener("click",()=>{
    const selectedCategory=button.dataset.filter;
    filterButtons.forEach(btn=>btn.classList.remove("active"));
    button.classList.add("active");
    galleryItems.forEach(item=>{
      const show=selectedCategory==="all"||selectedCategory===item.dataset.category;
      item.classList.toggle("hidden",!show);
    });
  });
});

const revealButton=document.getElementById("revealCruise");
const cruiseInfo=document.getElementById("cruiseInfo");

revealButton.addEventListener("click",()=>{
  const isHidden=cruiseInfo.hasAttribute("hidden");
  if(isHidden){
    cruiseInfo.removeAttribute("hidden");
    revealButton.textContent="Hide Activity Information";
    revealButton.setAttribute("aria-expanded","true");
  }else{
    cruiseInfo.setAttribute("hidden","");
    revealButton.textContent="Show Activity Information";
    revealButton.setAttribute("aria-expanded","false");
  }
});

const revealSections=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});

revealSections.forEach(section=>observer.observe(section));
