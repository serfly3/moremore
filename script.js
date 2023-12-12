
// Функция для обработки события нажатия клавиши
function handleKeyDown(event) {
    let keyElement = document.querySelector('[data-key="' + event.keyCode + '"]');
    if (keyElement) {
      playSound(keyElement.dataset.key);
    }
  }

  let keys = document.querySelectorAll('.key');
  
 
  function init() {
      let keys = document.querySelectorAll('.key');
  
          for (let i = 0; i < keys.length; i++) {
                  keys[i].addEventListener('click', function() {
              playSound(keys[i].dataset.key);
          });
      };
      document.addEventListener('keydown', handleKeyDown);
  }

  // Функция для воспроизведения звука в зависимости от кода клавиши
function playSound(keyCode) {
    let audio;

    if (keyCode === '81') { // Если это клавиша Q
        audio = new Audio('key1.mp3');
    } else if (keyCode === '87') { // Если это клавиша W
        audio = new Audio('key2.mp3');
    } else if (keyCode === '69') { // Если это клавиша E
        audio = new Audio('key3.mp3');
    } else if (keyCode === '82') { // Если это клавиша R
        audio = new Audio('key4.mp3');
    } else if (keyCode === '84') { // Если это клавиша T
        audio = new Audio('key5.mp3');
    } else if (keyCode === '89') { // Если это клавиша Y
        audio = new Audio('key6.mp3');
    } else if (keyCode === '85') { // Если это клавиша U
        audio = new Audio('key7.mp3');
    } else if (keyCode === '73') { // Если это клавиша I
        audio = new Audio('key8.mp3');
    } else if (keyCode === '79') { // Если это клавиша O
        audio = new Audio('key9.mp3');
    } else if (keyCode === '80') { // Если это клавиша P
        audio = new Audio('key10.mp3');
    } 

    // Если аудиофайл определён, воспроизводим его
    if (audio) {
        audio.play();
    }
}
  
init();  