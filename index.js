//Bloco de competencias
function skills() {
    let html = "";
    let htmlSkills = `
        <div class="skills">
            <div class="titleSkills fw-b">{TitleSkills}</div>
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
            },
            {
                "title": "HTML",
                "size": "80"
            },
            {
                "title": "CSS",
                "size": "80"
            },
            {
                "title": "Bootstrap",
                "size": "80"
            },
            {
                "title": "JavaScript",
                "size": "90"
            }, ,
            {
                "title": "JQuery",
                "size": "80"
            },
            {
                "title": "JSON",
                "size": "70"
            }, {
                "title": "TypeScript",
                "size": "50"
            },
            {
                "title": "Angular",
                "size": "40"
            },
            {
                "title": "PHP",
                "size": "50"
            },
            {
                "title": "C# (.NET)",
                "size": "60"
            },
            {
                "title": "POO (Orientação a Objetos)",
                "size": "90"
            }
        ]
    }
    
    //faz interação do HTML e das informações
    skillsTitle.info.forEach((Skills, index) => {
        html = html + htmlSkills.replace("{TitleSkills}", Skills.title)
            .replace("{sizeSkills}", Skills.size)
    })

    $("#skills").append(html)
}
//chamada dos metodos
skills();