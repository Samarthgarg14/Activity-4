function checkState() {

    let availableA = parseInt(document.getElementById("resourceA").value) || 0;
    let availableB = parseInt(document.getElementById("resourceB").value) || 0;

    let processes = [
        {
            name: "P1",
            a: parseInt(document.getElementById("p1a").value) || 0,
            b: parseInt(document.getElementById("p1b").value) || 0
        },
        {
            name: "P2",
            a: parseInt(document.getElementById("p2a").value) || 0,
            b: parseInt(document.getElementById("p2b").value) || 0
        },
        {
            name: "P3",
            a: parseInt(document.getElementById("p3a").value) || 0,
            b: parseInt(document.getElementById("p3b").value) || 0
        }
    ];

    let safeSequence = [];

    for (let process of processes) {

        if (
            process.a <= availableA &&
            process.b <= availableB
        ) {

            safeSequence.push(process.name);

            availableA += process.a;
            availableB += process.b;
        }
    }

    let result = document.getElementById("result");

    if (safeSequence.length === processes.length) {

        result.innerHTML =
            "✅ SAFE STATE<br>Safe Sequence: " +
            safeSequence.join(" → ");

        result.style.color = "#00ff99";

    } else {

        result.innerHTML =
            "❌ DEADLOCK DETECTED";

        result.style.color = "#ff4d4d";
    }
}