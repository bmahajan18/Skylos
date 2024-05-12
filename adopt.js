
    
    const petsData = [
        {
            name: 'Ginger',
            type: 'cat',
            image: 'dog1.jpg',
            description: 'A happy tabby cat with a love for fooling around',
        },
        {
            name: 'Kristy',
            type: 'cat',
            image: 'cat2.jpeg',
            description: 'A fun and active cat! ',
        },
        {
            name: 'Menace',
            type: 'cat',
            image: 'cat3.jpg',
            description: 'Just the name! She is the sweetest!',
        },
        {
            name: 'Georgie',
            type: 'cat',
            image: 'cat4.jpg',
            description: 'Looks like he is a nerd. Is a nerd. Perfect partner for your lectures.',
        },
        {
            name: 'Katniss',
            type: 'cat',
            image: 'cat5.jpeg',
            description: 'Looks like a cinnamon roll, is a cinnamon roll',
        },
        {
            name: 'Roxy',
            type: 'cat',
            image: 'cat6.jpeg',
            description: 'Loves to cuddle and roam around!',
        },
        {
            name: 'Mia',
            type: 'cat',
            image: 'cat7.jpeg',
            description: 'Keep her warm and cozy! She will love you!',
        },
        {
            name: 'Bluestar',
            type: 'cat',
            image: 'cat8.png',
            description: 'Has the most adorable eyes and can trick you into giving more treats!',
        },
        {
            name: 'Nightshade',
            type: 'cat',
            image: 'cat9.jpeg',
            description: 'Loves to play hide and seek. Loves sunshine and cuddles!',
        },
        {
            name: 'Princess',
            type: 'cat',
            image: 'cat10.jpg',
            description: 'Looks like a baddie, but is a softie inside. Just give her tiny treates!',
        },
        {
            name: 'Max',
            type: 'dog',
            image: 'Pongsatorn-Singnoy.jpg',
            description: 'An actual sweetheart. Will keep your feet warm by snuggling!',
        },
        {
            name: 'Charlie',
            type: 'dog',
            image: 'pug.jpeg',
            description: 'Just look at that adorable face! How can one resist patting him',
        },
        {
            name: 'Luna',
            type: 'dog',
            image: 'chihuahua.jpeg',
            description: 'Has the cute ruff and the most hyper vibe! You will love her energy!',
        },
        {
            name: 'Milo',
            type: 'dog',
            image: 'affenpinscher.jpeg',
            description: 'Just looking at hime is guaranteed to make you happy. Remember to cuddle with him and tell him he is a good boy!',
        },
        {
            name: 'Luke',
            type: 'dog',
            image: 'dog2.jpeg',
            description: 'Looks like a baddie, is a baddie. But he loves fully and unconditionally. The perfect partner in crime!',
        },
        {
            name: 'Candy',
            type: 'dog',
            image: 'dog3.jpg',
            description: 'Sweet, fun loving and affectionate. Loves to go on walks and play fetch!',
        },
    ];

    function createPetCard(pet) {
        const petCard = document.createElement('div');
        petCard.className = `pet-card ${pet.type}`;
        petCard.innerHTML = `
        <a href="adoptform.html">
            <img class="pet-image" src="${pet.image}" alt="${pet.name}">
        </a>
        <div class="pet-info">
          <h3>${pet.name}</h3>
          <p>${pet.description}</p>
        </div>
      `;
        petCard.addEventListener('click', () => {
            showModal(pet);
        });
        return petCard;
    }

    function showModal(pet) {
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        modalTitle.textContent = pet.name;
        modalBody.innerHTML = `<img class="pet-image" src="${pet.image}" alt="${pet.name}">
          <p>${pet.description}</p>`;
        $('#myModal').modal('show');
    }

    function filterAnimals(category) {
        const animalItems = document.getElementsByClassName('pet-card');

        for (let i = 0; i < animalItems.length; i++) {
            const item = animalItems[i];
            const itemCategory = item.classList.contains('dog') ? 'dog' : 'cat';

            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const petContainer = document.querySelector('.container');
        petsData.forEach(pet => {
            const petCard = createPetCard(pet);
            petContainer.appendChild(petCard);
        });
    });

    function toggleDropdown() {
        const dropdownContent = document.getElementById('filterDropdownContent');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    }
