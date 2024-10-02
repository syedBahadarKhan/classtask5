function calculateAge() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();

    if (birthDate == "Invalid Date" || birthDate > today) {
        alert("Please enter a valid birth date.");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById("years").innerText = ageYears + " years";
    document.getElementById("months").innerText = ageMonths + " months";
    document.getElementById("days").innerText = ageDays + " days";
}
