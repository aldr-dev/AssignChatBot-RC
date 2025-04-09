// AssignChatBot-RC v1.3
// By @aldrrider - Telegram
// Данный скрипт разработан для автоматизации сбора заявок из общей очереди чата, программы RocketChat.

let isProcessing = false;

const GetElements = () => {
    const containerRoom = document.querySelector('.rooms-list__list.inquiries');
    const elementsRoom =  containerRoom.querySelectorAll('.sidebar-item');
    const elementsLink =  document.querySelectorAll('.sidebar-item__link');
    const buttonRoom =  document.querySelector('.rc-message-box__take-it-button');

    return { containerRoom, elementsRoom, elementsLink, buttonRoom }
};

const handlerClick = () => {
    if (isProcessing) return;
    isProcessing = true;

    const { containerRoom, elementsRoom, elementsLink, buttonRoom} = GetElements();

    if (!containerRoom || !elementsRoom || elementsLink.length === 0) {
        isProcessing = false;
        return;
    }

    const handlerClickNewChat = (i) => {
        elementsLink[i].click();
        setTimeout(() => {
            if (buttonRoom) {
                buttonRoom.click();
            }
        }, 300);
     }

    for (let i = 0; i < elementsLink.length; i++) {
        setTimeout(() => {
          handlerClickNewChat(i);
        }, 300);
    }

    isProcessing = false;
};

const startScript = () => {
    setInterval(() => {
      handlerClick();
    }, 1000);
}

startScript();
