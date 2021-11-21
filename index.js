        //Bloco de competencias
        function skills() {
            let html = "";
            let htmlSkills = `
            <div class="skills">
                <div class="titleSkills">{TitleSkills}</div>
                <div >
                    <div class="progress -customProgress">
                        <div class="progress-bar" role="progressbar" style="width: {sizeSkills}%" aria-valuenow="{sizeSkills}"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>`;

            const skillsTitle = {
                "info": [
                    {
                        "title": "Organização",
                        "size": "80"
                    },
                    {
                        "title": "Trabalha em equipe",
                        "size": "80"
                    },
                    {
                        "title": "Comunicação",
                        "size": "100"
                    },
                    {
                        "title": "Pensamento analítico",
                        "size": "90"
                    },
                    {
                        "title": "Atendimento ao Cliente",
                        "size": "60"
                    }
                ]
            }

            skillsTitle.info.forEach((Skills, index) => {
                html = html + htmlSkills.replace("{TitleSkills}", Skills.title)
                    .replace("{sizeSkills}", Skills.size)
            })

            $("#skills").append(html)
        }
        //chamada dos metodos
        skills();