export default function createCityTemplate(data) {
    const html = /*html*/ `
    <section>
        <ul id="city-data">
            <li>${data.name}</li>
            <li>Description: ${data.weather[0].main}, ${data.weather[0].description}.</li>
            <li>Temp. Min.: ${data.main.temp_min}</li>
            <li>Temp. Max.: ${data.main.temp_max}</li>
        </ul>
    </section>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;    
}