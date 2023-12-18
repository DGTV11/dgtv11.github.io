function makeCursor(cursorText="|") {
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.innerHTML = cursorText;
    return cursor;
}

function resetTypewriter(id, cursorText="|") {
    const text_element = document.getElementById(id);
    const cursor = makeCursor(cursorText)
    if (text_element == null) {
        throw new TypeError();
    }
    text_element.innerHTML = "";
    text_element.appendChild(cursor);
}

function blink(cursor_element) {
    var cursor = true;
    var cursor_blink_speed = 500;
    setInterval(() => {
        if (cursor) {
            cursor_element.style.opacity = '0';
            cursor = false;
        }
        else {
            cursor_element.style.opacity = '1';
            cursor = true;
        }
    }, cursor_blink_speed);
}

async function typeWriter(txt, id, cursorText="|") {
    const text_element = document.getElementById(id);
    const cursor = makeCursor(cursorText)
    if (text_element == null) {
        throw new TypeError();
    }

    const speed = 650 / txt.length;
    let i = 0;
    let loaded_txt = "";
    
    if (typeof txt !== 'string') {
        throw new TypeError();
    }
    function type(input_txt) {
        if (i < input_txt.length) {
            var current_char = input_txt.charAt(i);
            if (current_char === '\n') {
                loaded_txt += '<br>'; // Use <br> instead of '\n' for HTML line breaks
            } else {
                loaded_txt += current_char;
            }
            text_element.innerHTML = loaded_txt;
            text_element.appendChild(cursor);
            i++;
            setTimeout((() => type(input_txt)), speed);
        }
    }
    type(txt);

    setTimeout((() => blink(cursor)), 500);

    return;
}