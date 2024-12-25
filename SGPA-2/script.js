document.getElementById('sgpaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateSGPA();
});

function calculateSGPA() {
    const subjects = {
        MEFA: ['MEFA'],
        theory: ['P-S', 'OS', 'SE', 'ADS'],
        practical: ['ADS_AA Lab', 'OS_LAB'],
        skill: ['SKILL_COURSE', 'SKILL_COURSE2']
    };

    let totalGradePoints = 0;
    const totalCredits = 21;

    // Calculate grade points for theory subjects
    subjects.theory.forEach(subject => {
        const grade = parseFloat(document.getElementById(subject).value);
        console.log(`Grade for ${subject}: ${grade}`);
        totalGradePoints += grade * 3;
    });

    // Calculate grade points for practical subjects
    subjects.practical.forEach(subject => {
        const grade = parseFloat(document.getElementById(subject).value);
        console.log(`Grade for ${subject}: ${grade}`);
        totalGradePoints += grade * 1.5;
    });

    // Calculate grade points for skill enhancement subjects
    subjects.skill.forEach(subject => {
        const grade = parseFloat(document.getElementById(subject).value);
        console.log(`Grade for ${subject}: ${grade}`);
        totalGradePoints += grade * 2;
    });

    // Calculate grade points for MEFA
    const MEFAGrade = parseFloat(document.getElementById('MEFA').value);
    console.log(`Grade for MEFA: ${MEFAGrade}`);
    totalGradePoints += MEFAGrade * 2;

    const sgpa = totalGradePoints / totalCredits;
    console.log(`Total Grade Points: ${totalGradePoints}`);
    console.log(`SGPA: ${sgpa}`);
    document.getElementById('sgpa').textContent = sgpa.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
}

// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
