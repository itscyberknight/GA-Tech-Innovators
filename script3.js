const certificateData = {
            "GACTISDA001": {
                studentName: "YUVARAJ R",
                certificateType: "INTERNSHIP",
                courseName: "DATA ANALYTICS",
                courseDuration: "02/02/2025 TO 16/02/2025"
            },
        };

        function verifyCertificate() {
            const certificateId = document.getElementById('verifyCertId').value.toUpperCase();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            if (certificateData[certificateId]) {
                const data = certificateData[certificateId];
                resultDiv.innerHTML = `
                    <p>CERTIFICATE FOUND & VERIFIED</p>
                    <p>THIS CERTIFICATE IS ISSUED BY GA TECH INNOVATORS</p>
                    <table>
                        <tr><th>CERTIFICATE ID</th><td>${certificateId}</td></tr>
                        <tr><th>STUDENT NAME</th><td>${data.studentName}</td></tr>
                        <tr><th>CERTIFICATE TYPE</th><td>${data.certificateType}</td></tr>
                        <tr><th>COURSE NAME</th><td>${data.courseName}</td></tr>
                        <tr><th>COURSE DURATION</th><td>${data.courseDuration}</td></tr>
                    </table>
                    <div class="verified">✔️ VERIFIED</div>
                `;
            } else {
                resultDiv.innerHTML = '<p>CERTIFICATE NOT FOUND.</p>';
            }
        }