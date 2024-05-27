document.addEventListener("DOMContentLoaded", () => {
    let folderIndex = 1;

    function playAudio(file) {
<<<<<<< HEAD
        const audio = new Audio(`blob/main/audio${folderIndex}/${file}`);
        console.log(`Playing: blob/main/audio${folderIndex}/${file}`);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
=======
        const audio = new Audio(`my_music_app/blob/main/audio${folderIndex}/${file}`);
        console.log(`Playing: my_music_app/blob/main/audio${folderIndex}/${file}`);
      
>>>>>>> ad1603807f9db9bce800102b5b4b82648b9aa838
    }

    document.getElementById('btn1').addEventListener('click', () => playAudio('b1.mp3'));
    document.getElementById('btn2').addEventListener('click', () => playAudio('b2.mp3'));
    document.getElementById('btn3').addEventListener('click', () => playAudio('b3.mp3'));
    document.getElementById('btn4').addEventListener('click', () => playAudio('b4.mp3'));
    document.getElementById('btn5').addEventListener('click', () => playAudio('b5.mp3'));
    document.getElementById('btn6').addEventListener('click', () => playAudio('b6.mp3'));
    document.getElementById('btn7').addEventListener('click', () => playAudio('b7.mp3'));

    document.getElementById('btn8').addEventListener('click', () => {
        folderIndex = folderIndex % 6 + 1;
<<<<<<< HEAD
        console.log(`Switched to folder: blob/main/audio1${folderIndex}`);
=======
        console.log(`Switched to folder: my_music_app/blob/main/audio1${folderIndex}`);
>>>>>>> ad1603807f9db9bce800102b5b4b82648b9aa838
    });
});
