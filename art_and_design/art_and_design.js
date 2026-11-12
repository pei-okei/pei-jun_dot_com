const secretIDs = ['cosmotype','hex-guesser'];

for (let i = 0; i < secretIDs.length; i++) {
    let secretID = secretIDs[i];

    let secretContainer = document.getElementById(secretID.concat('-container'));
    let secretContent = document.getElementById(secretID.concat('-secret'));

    secretContainer.addEventListener('mouseover', function () {
            secretContent.style.display = 'block';
            // secretContainer.style.backgroundColor = 'green';
        });
    secretContainer.addEventListener('mouseout', function () {
            secretContent.style.display = 'none';
            // secretContainer.style.backgroundColor = 'blue';
        });
}

