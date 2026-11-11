const secretIDs = ['Nuomi', 'Mica'];

// for (let i = 0; i < secretIDs.length; i++) {
//     let secretID = secretIDs[i];

//     let secretContainer = document.getElementById(secretID.concat('-container'));
//     let secretContent = document.getElementById(secretID);

//     secretContainer.addEventListener('mouseover', function () {
//             secretContent.style.display = 'block';
//         });
//     secretContainer.addEventListener('mouseout', function () {
//             secretContent.style.display = 'none';
//         });
    
//     secretContainer.style.backgroundColor = "lightblue";
// }

let secretContainer = document.getElementById('Mica-container');
let secretContent = document.getElementById('Mica');

secretContainer.addEventListener
    ('mouseover', function () {
        secretContent.style.display = 'block';
    });
secretContainer.addEventListener
    ('mouseout', function () {
        secretContent.style.display = 'none';
    });

secretContent.style.backgroundColor = 'green';
