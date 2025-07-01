const colors = [
    '#f8f9fa', '#e6f7ff', '#fce4ec', '#f3e5f5', '#e8f5e9', '#fff3e0', '#fffde7', '#f0f8ff', '#fafad2', '#d8bfd8', '#ffe4e1', '#e0ffff', '#fffaf0', 'red', 'green', 'blue', 'yellow', 'purple', 'cyan', 'orange', 'pink', 'lime', 'teal', 'indigo', 'violet', 'gold', 'crimson', 'skyblue', 'magenta'
];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}