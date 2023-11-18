window.addEventListener('popstate', (e) => {
    navigate();
});

window.addEventListener('load', (e) => {
    navigate();
});

function navigate() {
    let id = location.href.match(/#.+/gi)[0].substring(1);
    let dialog = findParentDialog(id);
    if (dialog) {
        moveIntoDialog(dialog, id);
    }
}

function findParentDialog(id) {
    let dialogSelector = 'dialog, [role="dialog"]';
    let element = document.getElementById(id);
    if (!element) return null;
    return element.closest(dialogSelector);
}

function moveIntoDialog(dialog, id) {
    if (!dialog.open) {
        dialog.showModal();
    }
    let element = document.getElementById(id);
    element.focus();
}