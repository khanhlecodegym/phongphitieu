let tongdiemuser1 = document.querySelector(".tongdiemuser1");
let tongdiemuser2 = document.querySelector(".tongdiemuser2");
let winscoreuser1 = document.querySelector(".winscoreuser1");
let winscoreuser2 = document.querySelector(".winscoreuser2");
let scoreuser1 = document.querySelector(".scoreuser1");
let scoreuser2 = document.querySelector(".scoreuser2");
let adduser1 = document.querySelector(".adduser1");
let adduser2 = document.querySelector(".adduser2");

let kquser1 = document.querySelector(".kquser1");
let kquser2 = document.querySelector(".kquser2");

let nameuser1 = document.querySelector(".nameuser1");
let nameuser2 = document.querySelector(".nameuser2");

let luotphonguser1 = document.querySelector(".luotphonguser1");
let luotphonguser2 = document.querySelector(".luotphonguser2");

let luotuser1 = 1;
let luotuser2 = 1;

let user1 = true;

let again = false;

let username1 = prompt("Nhập tên người phóng đầu tiên", 'SSV1');
let username2 = prompt("Nhập tên người phóng thứ hai", 'SSV2');
nameuser1.innerHTML = username1;
nameuser2.innerHTML = username2;

adduser1.addEventListener('click', function () {
    user1 = true;
    if (again) return;
    let sumscore = +tongdiemuser1.textContent;
    let score = +scoreuser1.value;
    let currentScore = +winscoreuser1.textContent;

    // Set Score User
    setScoreUser(score, sumscore, currentScore);

    // Add kết quả lượt phóng
    let textScore = getTextScore(luotuser1, score);
    let node = document.createElement("p");
    let textnode = document.createTextNode(textScore);
    node.appendChild(textnode);
    kquser1.appendChild(node);
    luotuser1++;
    luotphonguser1.innerHTML = luotuser1;
    //set default
    scoreuser1.value = 0;

    // adduser2.removeAttribute("disabled");
    // adduser1.disabled = true;

    // Check Win
    let winScore = +winscoreuser1.textContent;
    let nameWin = nameuser1.textContent;
    checkWin(winScore, nameWin);
    
});

adduser2.addEventListener('click', function () {
    user1 = false;
    if (again) return;
    let sumscore = +tongdiemuser2.textContent;
    let score = +scoreuser2.value;
    let currentScore = +winscoreuser2.textContent;

    // Set Score User
    setScoreUser(score, sumscore, currentScore);

    // Add kết quả lượt phóng
    let textScore = getTextScore(luotuser2, score);
    let node = document.createElement("p");
    let textnode = document.createTextNode(textScore);
    node.appendChild(textnode);
    kquser2.appendChild(node);
    luotuser2++;
    luotphonguser2.innerHTML = luotuser2;
    //set default
    scoreuser2.value = 0;

    // adduser1.removeAttribute("disabled");
    // adduser2.disabled = true;

    // Check Win
    let winScore = +winscoreuser2.textContent;
    let nameWin = nameuser2.textContent;
    checkWin(winScore, nameWin);
});

function getTextScore(luot, score) {
    let htmlElement = `Luot ${luot} Được ${score} điểm`

    return htmlElement;
}

function setScoreUser(score, sumscore, currentScore) {
    // Sum Score
    sumscore += score;


    if ((currentScore - score) >= 0) {
        currentScore -= score;
        if (user1) {
            tongdiemuser1.innerHTML = sumscore;
            winscoreuser1.innerHTML = currentScore;
        } else {
            tongdiemuser2.innerHTML = sumscore;
            winscoreuser2.innerHTML = currentScore;
        }

    } else {
        alert("Xịt thật là tiếc quá đi mà");
    }
}

function checkWin(winScore, nameWin) {
    if (winScore == 0) {
        if (user1) {
            let score = +document.querySelector(".user1").innerHTML;
            document.querySelector(".user1").innerHTML = ++score;
        } else {
            let score = +document.querySelector(".user2").innerHTML;
            document.querySelector(".user2").innerHTML = ++score;
        }

        alert(`Chúc mưng ${nameWin} là người chiến thắng`)

        again = confirm('Sãn sàng chơi ván mới chưa');

        if (again) {
            scoreuser1.value = 0;
            scoreuser2.value = 0;
            kquser1.innerHTML = '';
            kquser2.innerHTML = '';

            luotphonguser1.innerHTML = '1';
            luotphonguser2.innerHTML = '1';

            winscoreuser1.innerHTML = '180';
            winscoreuser2.innerHTML = '180';

            // adduser2.disabled = false;
            // adduser1.disabled = false;

            again = false;
        }
    }
}

function nextmatch() {
    again = confirm('Sãn sàng chơi ván mới chưa');

    if (again) {
        scoreuser1.value = 0;
        scoreuser2.value = 0;
        kquser1.innerHTML = '';
        kquser2.innerHTML = '';

        luotphonguser1.innerHTML = '1';
        luotphonguser2.innerHTML = '1';

        winscoreuser1.innerHTML = '180';
        winscoreuser2.innerHTML = '180';

        // adduser2.disabled = false;
        // adduser1.disabled = false;
        again = false;
    }
}