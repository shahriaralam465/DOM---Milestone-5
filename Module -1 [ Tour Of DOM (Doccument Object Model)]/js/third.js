const main = document.getElementById('main-container');
const section = document.createElement('section');

section.innerHTML = `

    <h1>My Dynamic section</h1>
    <p>
        Extra text inside paragraph
    </p>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
    </ul>
`

main.appendChild(section);