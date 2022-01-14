console.log('CV Screener');

// Data is an array of objects which contains information about the candidates
// For random users - Search "randomuser.me"

const data = [
    {
        name: 'Rohan Kapoor',
        age: 16,
        city: 'Bangalore',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        name: 'Avantika Roy',
        age: 19,
        city: 'Mumbai',
        language: 'Java',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'Manish Das',
        age: 19,
        city: 'Kolkata',
        language: 'C++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
        name: 'Priyashi Mehta',
        age: 20,
        city: 'Delhi',
        language: 'HTML',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/women/29.jpg'
    }
]

// CV Iterator 

function cvIterator(profiles) {
    let Index = 0;
    return {
        next: function () {
            return Index < profiles.length ?
                { value: profiles[Index++], done: false } : { done: true } //Here ternary operator is used.
        }
    }
}

const candidates = cvIterator(data);
nextCV(data);

// Button Listener for next
let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', nextCV)

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name-> ${currentCandidate.name}</li>
                            <li class="list-group-item">Age-> ${currentCandidate.age}</li>
                            <li class="list-group-item">Lives in-> ${currentCandidate.city}</li>
                            <li class="list-group-item">Works on -> ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework-> ${currentCandidate.framework}</li>
                        </ul>`
    }
    else{
        alert('End of Profiles')
        window.location.reload();
    }
}