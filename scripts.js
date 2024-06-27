document.addEventListener("DOMContentLoaded", () => {
    let folderIndex = 1;

    function updateFolderName() {
        const folderNameElement = document.getElementById('current-folder');
        folderNameElement.textContent = `Current Folder: audio${folderIndex}`;
    }

    function playAudio(file) {
        const audio = new Audio(`audio${folderIndex}/${file}`);
        console.log(`Playing: audio${folderIndex}/${file}`);
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }

    document.getElementById('btn1').addEventListener('click', () => playAudio('b1.MP3'));
    document.getElementById('btn2').addEventListener('click', () => playAudio('b2.MP3'));
    document.getElementById('btn3').addEventListener('click', () => playAudio('b3.MP3'));
    document.getElementById('btn4').addEventListener('click', () => playAudio('b4.MP3'));
    document.getElementById('btn5').addEventListener('click', () => playAudio('b5.MP3'));
    document.getElementById('btn6').addEventListener('click', () => playAudio('b6.MP3'));
    document.getElementById('btn7').addEventListener('click', () => playAudio('b7.MP3'));

    document.getElementById('btn8').addEventListener('click', () => {
        folderIndex = folderIndex % 6 + 1;
        console.log(`Switched to folder: audio${folderIndex}`);
        updateFolderName();
    });

    // 初始化显示文件夹名称
    updateFolderName();
});