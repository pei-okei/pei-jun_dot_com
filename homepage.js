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



var shouldRun = true;

function trail (e) {
    if (shouldRun) {
        var div = document.createElement('div');
  
        div.classList.add('happyTrail');
        
        Object.assign(div.style, {
            top: e.pageY + 'px',
            left: e.pageX + 'px'
        });
        
        document.body.appendChild(div);
        setTimeout(function(){document.body.removeChild(div)}, 420);
    }
    shouldRun = (!shouldRun);
}


if (window.innerWidth <= 600) {
    
} else {
    hoverForSecrets();
    addEventListener('mousemove', trail);
}