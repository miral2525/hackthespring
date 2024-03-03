import "./Landingpage.scss";

export default function Landingpage(){
    return(
        <>
            
<div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>


<nav class="mainNav">
   <div class="mainNav__logo">MEDTECH BRILLIANCE</div>
   <div class="mainNav__links">
      <a href="/" class="mainNav__link">Home</a>
      <a href="/login" class="mainNav__link">Patient</a>
      <a href="http://localhost:5174/HomePage" class="mainNav__link">Doctor</a>
      <a href="" class="mainNav__link">Contacts</a>
   </div>
   <div class="mainNav__icon">
      <svg xmlns="" viewBox="0 0 24 24">
         <g data-name="Layer 2" fill="#9197AE">
            <g data-name="menu-2">
               <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
               />
               <circle cx="4" cy="12" r="1" />
               <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
               <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
               <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
            </g>
         </g>
      </svg>
   </div>
</nav>
<header class="mainHeading">
   <div class="mainHeading__content">
      <article class="mainHeading__text">
         <p class="mainHeading__preTitle">Health</p>
         <h2 class="mainHeading__title">EMBRACE YOUR HEALTH</h2>
         <p class="mainHeading__description">
            A HEALTHIER TOMORROW, ONE SMILE AT A TIME.
         </p>
      </article>

      <figure class="mainHeading__image">
         <img
            src="https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709251200&semt=sph"
            alt=""
         />
      </figure>
   </div>
</header>

        </>
    );
}