// AssignChatBot-RC v1.1
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
        if (buttonRoom) {
            buttonRoom.click();
        }
     }

    for (let i = 0; i < elementsLink.length; i++) {
        handlerClickNewChat(i);
    }

    isProcessing = false;
};

const startScript = () => {
    setInterval(() => {
      handlerClick();
    }, 1000);
}

startScript();
