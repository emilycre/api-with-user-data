export default function createCityTemplate(data) {
    const html = /*html*/ `
    <section>
        <ul id="city-data">
            <li>London</li>
            <li>Weather description:</li>
            <li>Temp. Minimum:</li>
            <li>Temp. Maximum:</li>
        </ul>
    </section>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;    
}