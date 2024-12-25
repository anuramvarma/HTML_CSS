document.getElementById('sgpaForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
    calculateSGPA();
});

function calculateSGPA() 
{
    const subjects = 
    {
        theory: ['DM_GT', 'UHV', 'DLCO', 'DBMS', 'OOPJ'],
        practical: ['OOPJ_LAB','DBMS_LAB'],
        skill: ['SKILL_COURSE']
    };

    let totalGradePoints = 0;
    const totalCredits = 20;

    subjects.theory.forEach(subject => 
        {
        const grade = parseFloat(document.getElementById(subject).value);
        totalGradePoints += grade * 3;
    });

    subjects.practical.forEach(subject => 
        {
        const grade = parseFloat(document.getElementById(subject).value);
        totalGradePoints += grade * 1.5;
    });

    const skillGrade = parseFloat(document.getElementById('SKILL_COURSE').value);
    totalGradePoints += skillGrade * 2;

    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('sgpa').textContent = sgpa.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
}

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
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

