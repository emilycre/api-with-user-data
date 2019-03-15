export default function createCityTemplate(data) {
    const html = /*html*/ `
    <section id="city-data">
        <ul id="city">
            <li>${data.name}</li>
            <li>Description: ${data.weather[0].description}.</li>
            <li>Temp. Min.: ${data.main.temp_min}</li>
            <li>Temp. Max.: ${data.main.temp_max}</li>
        </ul>
    </section>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;    
}