type TeamData = {
    league: "QMJHL" | "OHL" | "WHL";
    conference: "Eastern" | "Western";
    division: "Maritimes" | "East" | "West" | "Central" | "Midwest" | "B.C." | "U.S.";
    finalPlacement: number;
};

const database: Record<string, TeamData> = {
    "Acadie-Bathurst Titan": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 11,
    },
    "Baie-Comeau Drakkar": {
        league: "QMJHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 7,
    },
    "Barrie Colts": {
        league: "OHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 5,
    },
    "Blainville-Boisbriand Armada": {
        league: "QMJHL",
        conference: "Western",
        division: "West",
        finalPlacement: 8,
    },
    "Brandon Wheat Kings": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 9,
    },
    "Brampton Steelheads": {
        league: "OHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 8,
    },
    "Brantford Bulldogs": {
        league: "OHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 4,
    },
    "Calgary Hitmen": {
        league: "WHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 3,
    },
    "Cape Breton Eagles": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 9,
    },
    "Charlottetown Islanders": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 12,
    },
    "Chicoutimi Saguenéens": {
        league: "QMJHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 5,
    },
    "Drummondville Voltigeurs": {
        league: "QMJHL",
        conference: "Western",
        division: "Central",
        finalPlacement: 3,
    },
    "Edmonton Oil Kings": {
        league: "WHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 11,
    },
    "Erie Otters": {
        league: "OHL",
        conference: "Western",
        division: "Midwest",
        finalPlacement: 10,
    },
    "Everett Silvertips": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 1,
    },
    "Flint Firebirds": {
        league: "OHL",
        conference: "Western",
        division: "West",
        finalPlacement: 13,
    },
    "Gatineau Olympiques": {
        league: "QMJHL",
        conference: "Western",
        division: "West",
        finalPlacement: 15,
    },
    "Guelph Storm": {
        league: "OHL",
        conference: "Western",
        division: "Midwest",
        finalPlacement: 19,
    },
    "Halifax Mooseheads": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 16,
    },
    "Kamloops Blazers": {
        league: "WHL",
        conference: "Western",
        division: "B.C.",
        finalPlacement: 19,
    },
    "Kelowna Rockets": {
        league: "WHL",
        conference: "Western",
        division: "B.C.",
        finalPlacement: 20,
    },
    "Kingston Frontenacs": {
        league: "OHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 6,
    },
    "Kitchener Rangers": {
        league: "OHL",
        conference: "Western",
        division: "Midwest",
        finalPlacement: 2,
    },
    "Lethbridge Hurricanes": {
        league: "WHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 6,
    },
    "London Knights": {
        league: "OHL",
        conference: "Western",
        division: "Midwest",
        finalPlacement: 1,
    },
    "Medicine Hat Tigers": {
        league: "WHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 2,
    },
    "Moncton Wildcats": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 1,
    },
    "Moose Jaw Warriors": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 22,
    },
    "Niagara IceDogs": {
        league: "OHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 12,
    },
    "North Bay Battalion": {
        league: "OHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 15,
    },
    "Oshawa Generals": {
        league: "OHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 7,
    },
    "Ottawa 67's": {
        league: "OHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 17,
    },
    "Owen Sound Attack": {
        league: "OHL",
        conference: "Western",
        division: "Midwest",
        finalPlacement: 16,
    },
    "Peterborough Petes": {
        league: "OHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 20,
    },
    "Portland Winterhawks": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 12,
    },
    "Prince Albert Raiders": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 8,
    },
    "Prince George Cougars": {
        league: "WHL",
        conference: "Western",
        division: "B.C.",
        finalPlacement: 7,
    },
    "Quebec Remparts": {
        league: "QMJHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 14,
    },
    "Red Deer Rebels": {
        league: "WHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 17,
    },
    "Regina Pats": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 21,
    },
    "Rimouski Océanic": {
        league: "QMJHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 2,
    },
    "Rouyn-Noranda Huskies": {
        league: "QMJHL",
        conference: "Western",
        division: "West",
        finalPlacement: 6,
    },
    "Saginaw Spirit": {
        league: "OHL",
        conference: "Western",
        division: "West",
        finalPlacement: 9,
    },
    "Saint John Sea Dogs": {
        league: "QMJHL",
        conference: "Eastern",
        division: "Maritimes",
        finalPlacement: 17,
    },
    "Sarnia Sting": {
        league: "OHL",
        conference: "Western",
        division: "West",
        finalPlacement: 18,
    },
    "Saskatoon Blades": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 10,
    },
    "Seattle Thunderbirds": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 16,
    },
    "Shawinigan Cataractes": {
        league: "QMJHL",
        conference: "Western",
        division: "Central",
        finalPlacement: 4,
    },
    "Sherbrooke Phoenix": {
        league: "QMJHL",
        conference: "Western",
        division: "Central",
        finalPlacement: 10,
    },
    "Soo Greyhounds": {
        league: "OHL",
        conference: "Western",
        division: "West",
        finalPlacement: 14,
    },
    "Spokane Chiefs": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 4,
    },
    "Sudbury Wolves": {
        league: "OHL",
        conference: "Eastern",
        division: "Central",
        finalPlacement: 11,
    },
    "Swift Current Broncos": {
        league: "WHL",
        conference: "Eastern",
        division: "East",
        finalPlacement: 14,
    },
    "Tri-City Americans": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 15,
    },
    "Val-d'Or Foreurs": {
        league: "QMJHL",
        conference: "Western",
        division: "West",
        finalPlacement: 13,
    },
    "Vancouver Giants": {
        league: "WHL",
        conference: "Western",
        division: "B.C.",
        finalPlacement: 13,
    },
    "Victoria Royals": {
        league: "WHL",
        conference: "Western",
        division: "B.C.",
        finalPlacement: 5,
    },
    "Victoriaville Tigres": {
        league: "QMJHL",
        conference: "Western",
        division: "Central",
        finalPlacement: 18,
    },
    "Wenatchee Wild": {
        league: "WHL",
        conference: "Western",
        division: "U.S.",
        finalPlacement: 18,
    },
    "Windsor Spitfires": {
        league: "OHL",
        conference: "Western",
        division: "West",
        finalPlacement: 3,
    },
};

const chlTeams = Object.keys(database);
const input = document.getElementById('wordInput') as HTMLInputElement;
const form = document.getElementById('myForm') as HTMLFormElement;
const error = document.getElementById('error') as HTMLParagraphElement;


const team: string = chlTeams[Math.floor(Math.random() * chlTeams.length)];
const teamStats = database[team];

const maxGuesses: number = 5;
let currentGuesses: number = 0;

console.log(teamStats);
console.log(team);

function closeAllLists(): void {
    const items = document.getElementsByClassName('autocomplete-items');
    for (let i = items.length - 1; i >= 0; i--) {
        const element = items[i];
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}

function createAutocompleteList(val: string): void {
    closeAllLists();
    if (!val) return;

    const list = document.createElement('div');
    list.setAttribute('id', input.id + '-autocomplete-list');
    list.setAttribute('class', 'autocomplete-items');
    input.parentNode?.appendChild(list);

    let count = 0;
    chlTeams.forEach((word) => {
        if (word.toLowerCase().startsWith(val.toLowerCase())) {
            const item = document.createElement('div');
            item.innerHTML = `<strong>${word.substr(0, val.length)}</strong>${word.substr(val.length)}`;
            item.addEventListener('click', () => {
                input.value = word;
                closeAllLists();
            });
            list.appendChild(item);
            count++;
        }
    });

    if (count === 0) {
        closeAllLists();
    }
}

function displayGuess(team: string, guessNumber: number): void {
    const elementId: string = "guess-" + guessNumber;
    const element = document.getElementById(elementId) as HTMLParagraphElement;
    element.textContent = team;

}

function displayHint(data: string, guessNumber: number): void {
    const elementId: string = "hint-" + guessNumber;
    const element = document.getElementById(elementId) as HTMLParagraphElement;
    element.textContent = data;

}

input.addEventListener('input', () => {
    createAutocompleteList(input.value);
});

document.addEventListener('click', (event: MouseEvent) => {
    if (event.target !== input) {
        closeAllLists();
    }
});

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    error.style.display = 'none';

    if (chlTeams.includes(input.value)) {
        closeAllLists();
        displayGuess(input.value, currentGuesses);
        if (input.value === team) {
            showWinScreen()
        }
        else if (currentGuesses >= maxGuesses) {
            showLoseScreen()
        }
        else {
            var hint: string
            switch (currentGuesses) {
                case 0:
                    hint = "League: " + teamStats.league
                    displayHint(hint, currentGuesses);
                    break
                case 1:
                    hint = "Conference: " + teamStats.conference
                    displayHint(hint, currentGuesses);
                    break
                case 2:
                    hint = "2024/25 Season Place: " + teamStats.finalPlacement
                    displayHint(hint, currentGuesses);
                    break
                case 3:
                    hint = "Division: " + teamStats.division
                    displayHint(hint, currentGuesses);
                    break
                case 4:
                    hint = "Starting Letter: " + team[0]
                    displayHint(hint, currentGuesses);
                    break
            }
            currentGuesses += 1
        }
        input.value = '';

    } else {
        error.style.display = 'block';
    }
});

function showWinScreen() {
    const winScreen = document.getElementById("win-screen");
    if (winScreen) winScreen.classList.remove("hidden");
}

function showLoseScreen() {
    const loseScreen = document.getElementById("lose-screen");
    const element = document.getElementById("correct-answer");
    if (element) element.textContent = "The correct team was: " + team;
    if (loseScreen) loseScreen.classList.remove("hidden");
}

