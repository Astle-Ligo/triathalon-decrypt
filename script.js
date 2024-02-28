function check() {
    var enteredValue = document.getElementById("content").innerText;
    var predefinedValue = "The jury, comprising individuals from diverse backgrounds, meticulously examined the evidence, patiently listening to witness testimonies. Careful analysis of fingerprints, blood samples, and DNA results confirmed the suspect's guilt. After much deliberation, the verdict was unanimous – \"guilty.\" Judge Henderson, a seasoned legal professional, sentenced the defendant to 10 years imprisonment, emphasizing the gravity of the crime. Justice, though delayed, had finally prevailed.";

    console.log("Entered Value: ", enteredValue);

    length = enteredValue.length < predefinedValue.length ? enteredValue.length : predefinedValue.length;

    console.log(length);

    newString = ""

    for (i = 0; i < length; i++) {
        if (enteredValue[i] != predefinedValue[i]) {
            newString += `<span class="wrong-char">${enteredValue[i]}</span>`;
        } else {
            newString += enteredValue[i];
        }
    }
    document.getElementById('content').innerHTML = newString;

    if (newString === predefinedValue) {
        console.log("True");
        document.body.style.backgroundColor = "green";
        window.alert("Your Code has been Decrypted. :):)");
    } else {
        console.log("False");
        document.body.style.backgroundColor = "red";
    }
}
