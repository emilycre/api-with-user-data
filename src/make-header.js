export default function makeHeader() {
    const html = /*html*/ `
    <header>
        <div id="header-container">
            <img id="logo" src="assets/weather-icon.png" alt="weather logo with sun, cloud, lightning, and raindrops">
            <h1>City Weather Search</h1>
        </div>
    </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}