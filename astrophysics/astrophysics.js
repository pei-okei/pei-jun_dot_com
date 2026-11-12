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

addEventListener('mousemove', trail);