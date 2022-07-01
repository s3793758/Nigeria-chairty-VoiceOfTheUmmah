// window.onload = function () {
//   const showOrphan = document.querySelector(".adopt>p:nth-of-type(1)");
//   const showHafiz = document.querySelector(".adopt>p:nth-of-type(2)");
//   const showSchoolKids = document.querySelector(".adopt>p:nth-of-type(3)");
//   const showQuran = document.querySelector(".adopt>p:nth-of-type(4)");
//   const showRamadanPk = document.querySelector(".adopt>p:nth-of-type(5)");
//   const showEidGt = document.querySelector(".adopt>p:nth-of-type(6)");
//   const showWater = document.querySelector(".adopt>p:nth-of-type(7)");
//   const showInfas = document.querySelector(".adopt>p:nth-of-type(8)");

//   const Orphan = document.querySelector(".orphan");
//   const Hafiz = document.querySelector(".hafiz");
//   const SchoolKids = document.querySelector(".schoolKids");
//   const Quran = document.querySelector(".quran");
//   const RamadanPk = document.querySelector(".ramadanPk");
//   const EidGt = document.querySelector(".eidgt");
//   const Water = document.querySelector(".water");
//   const Infas = document.querySelector(".infa");

//   showOrphan.addEventListener("click", () => {
//     Orphan.classList.add("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   showHafiz.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.add("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   showSchoolKids.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.add("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   showQuran.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.add("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   RamadanPk.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.add("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   showEidGt.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.add("active");
//     Water.classList.remove("active");
//     Infas.classList.remove("active");
//   });
//   showWater.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.add("active");
//     Infas.classList.remove("active");
//   });
//   showInfas.addEventListener("click", () => {
//     Orphan.classList.remove("active");
//     Hafiz.classList.remove("active");
//     SchoolKids.classList.remove("active");
//     Quran.classList.remove("active");
//     RamadanPk.classList.remove("active");
//     EidGt.classList.remove("active");
//     Water.classList.remove("active");
//     Infas.classList.add("active");
//   });
// };

// NAV

const nav = document.querySelector(".navDetailing");
const exposing_nav = document.querySelectorAll(".exposingNav");

// const btns = document.querySelectorAll(".btn");

nav.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    exposing_nav.forEach((exposing_nav) => {
      exposing_nav.classList.remove("active");
    });

    const element = document.getElementById(id);

    element.classList.add("active");
  }
});

// side article javascript

const content = document.querySelector(".pillarsOfContent");
const VOTUF_Pillars = document.querySelectorAll(".sideArticleNav");

// const btns = document.querySelectorAll(".btn");

content.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  //   console.log(id);
  if (id) {
    VOTUF_Pillars.forEach((VOTUF_Pillars) => {
      VOTUF_Pillars.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Iniatives

const initiative_Section = document.querySelector(".pillarsOfInitative");
const open_Initative = document.querySelectorAll(".bottomArticle");

// const btns = document.querySelectorAll(".btn");

initiative_Section.addEventListener("click", (e) => {
  const id = e.target.parentElement.dataset.id;

  if (id) {
    open_Initative.forEach((open_Initative) => {
      open_Initative.classList.remove("active");
    });

    const element = document.getElementById(id);

    element.classList.add("active");
  }
});
