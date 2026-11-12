const secretIDs = ['Nuomi', 'Mica'];



function hoverForSecrets() {
    for (let i = 0; i < secretIDs.length; i++) {
    let secretID = secretIDs[i];

    let secretContainer = document.getElementById(secretID.concat('-container'));
    let secretContent = document.getElementById(secretID.concat('-secret'));

    secretContainer.addEventListener('mouseover', function () {
            secretContent.style.display = 'block';
        });
    secretContainer.addEventListener('mouseout', function () {
            secretContent.style.display = 'none';
        });
    }
}


if (window.innerWidth <= 600) {
    
} else {
    hoverForSecrets();
}