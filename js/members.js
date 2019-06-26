var newMember = '';
var activeMember = '';
const memeberName = [
    'Victoria Chloe',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

const memberEmail = [
    'victoria.chloe@example.com',
    'dale.byrd52@example.com',
    'sawn.wood16@example.com',
    'dan.oliver82@example.com'
];

function printNew(newMember) {
    const ulNewMember = document.querySelector('.new-members');
    ulNewMember.innerHTML = newMember;
}

for (let i = 0; i < 4; i++) {
    newMember += '<li><img src="images/member-' + (i+1) + '.jpg"><div class="member-info"><p>' + memeberName[i] + '</p><a href="#">' + memberEmail[i] + '</a></div><span>6/20/19</span></li>';
}

printNew(newMember);

function printActive(activeMember){
    const ulActiveMember = document.querySelector('.active-members');
    ulActiveMember.innerHTML = activeMember;
}

for (i = 0; i < 4; i++) {
    activeMember += '<li><img src="images/member-' + (i+1) + '.jpg"><div class="member-info"><p>' + memeberName[i] + ' liked your post' + '</p><span>4 hours ago</span></div><i class="fa fa-angle-right arrow-right"></i></li>'
}

printActive(activeMember);