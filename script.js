function check() {
    var enteredValue = document.getElementById("content").innerText;
    var predefinedValue = "In the digital age, 5678 advancements in technology have transformed the way we live and work. From the moment we wake up to the time we go to sleep, our lives are intertwined with 1234 electronic devices and online platforms. The 9-to-5 routine has evolved into a 24/7 connected lifestyle. We navigate the web using 0a smartphones, tablets, and laptops, accessing information with just a few clicks or taps. The exponential growth of the internet has created a vast ecosystem where data flows like a river, connecting 6789 individuals across the globe.As we explore the vast landscape of cyberspace, cybersecurity becomes paramount. Hackers and cybercriminals employ sophisticated techniques to breach 5^%$ defenses and compromise sensitive information. Organizations implement multi-factor authentication, encryption, and firewalls to safeguard their digital assets. The constant cat-and-mouse game between security experts and malicious actors pushes the boundaries of innovation.Despite the challenges, the intersection of technology and humanity gives rise to incredible opportunities. Artificial intelligence (AI) is shaping industries, automating tasks, and enhancing decision-making processes. From healthcare to finance, algorithms analyze massive datasets, uncovering patterns and insights that were once hidden. The promise of a smarter, more efficient future is within reach, but ethical considerations must guide the development and deployment of AI technologies.In this dynamic landscape, adaptability is key. Lifelong learning is no longer a choice but a necessity. The ability to acquire new skills and stay abreast of technological developments determines one's relevance in the job market. Continuous education, both formal and informal, is the foundation for personal and professional growth.In conclusion, the fusion of numbers and letters in our digital narrative creates a complex and interconnected tapestry. The challenges and opportunities presented by technology require a balanced approach, where innovation is tempered by ethical considerations, and individuals embrace a mindset of continuous learning to thrive in this ever-evolving digital era.";

    console.log("Entered Value: ", enteredValue);

    if (enteredValue === predefinedValue) {
        console.log("True");
        document.body.style.backgroundColor = "green"
        window.alert("You Passed Away")
    } else {
        console.log("False");
        document.body.style.backgroundColor = "red"

    }
}
