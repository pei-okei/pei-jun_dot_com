const secretIDs = ['Nuomi', 'Mica'];

for (let i = 0; i < secretIDs.length; i++) {
    let secretID = secretIDs[i];

    let secretContainer = document.getElementById(secretID.concat('-container'));
    let secretContent = document.getElementById(secretID);

    secretContainer.addEventListener('mouseover', function () {
            secretContent.style.display = 'block';
        });
    secretContainer.addEventListener('mouseout', function () {
            secretContent.style.display = 'none';
        });
}

