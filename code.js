const NPC = document.querySelector('.NPC');

NPC.style.backgroundImage = `url('Textures/NPC${Math.floor(Math.random() * 4) + 1}.png')`;

let i = 0;
function AnimateNPC() {
    NPC.style.backgroundPosition = `-${(i % 3) * 480}px 0px`;
    i++;
    setTimeout(() => {
        requestAnimationFrame(AnimateNPC);   
    }, 600);
}

AnimateNPC();