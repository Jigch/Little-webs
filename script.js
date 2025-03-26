const images=document.querySelectorAll(".dynamicImage");
function checkPosition()
{
    const middleScreen = window.innerWidth / 2;
    images.forEach(img=>{
            const rect=img.getBoundingClientRect();
            const imgCenter=rect.left+rect.width/2;
            console.log(`Image:${img.src},center:${imgCenter},Middle:${middleScreen}`)
            if(Math.abs(imgCenter-middleScreen)<100){
                img.classList.add("zoomed-in");
                img.classList.remove("zoomed-out");
            }
            else{
                img.classList.add("zoomed-out");
                img.classList.remove("zoomed-in");
            }
        });
    }
    window.addEventListener("scroll",checkPosition);