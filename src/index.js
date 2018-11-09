/**
 *
 * @param {string} string - transforma la expresión de cadena a un evento suscrito a @media
 * @example `value1 200w value2 300w value3 200w!`
 * The callback will receive, for example, value1 when the browser displays the condition `min-width: 200w`
 * The callback will receive, for example, value1 when the browser displays the condition `min-width:300w`
 * The callback will receive, for example, value1 when the browser displays the condition `max-width:300w`
 * @param {function} callback
 */

export function media(string, callback) {
    let match = [],
        handler;

    string.split(/([\d]+w(?:\!){0,1})/).reduce((value, after) => {
        let test = after.match(/(\d+)w(\!){0,1}/);
        if (test) {
            let width = Number(test[1]),
                type = test[2] ? "max" : "min";
            match.push({
                type,
                width,
                value: value.replace(/^(\s+)|(\s+)$/g, ""),
                media: window.matchMedia(`(${type}-width : ${width}px)`)
            });
            return "";
        } else {
            return after;
        }
    });
    /**
     * Pre-order the @media to avoid overwriting by event.
     */
    match = match.sort((a, b) => (a.width > b.width ? -1 : 1));

    handler = () => {
        let group = match.filter(item => {
                return item.media.matches;
            }),
            groupMax = group.filter(item => item.type === "max"),
            select;

        if (groupMax.length) {
            select = groupMax.reverse()[0];
        } else {
            select = group[0];
        }

        if (select) callback(select.value, select.media);
    };

    match.forEach(({ media }) => media.addListener(handler));

    handler();
}

export function srcSet(element, string) {
    media(string, (value, match) => {
        element.src = value;
    });
}

export function imageSet(element, string) {
    media(string, (value, match) => {
        if (/\)(.+)$/.test(value)) {
            element.style.background = value;
        } else {
            element.style.backgroundImage = value;
        }
    });
}
