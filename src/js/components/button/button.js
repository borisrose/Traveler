import Button from "../../models/button.model";

export default function (d) {

    if (!(d instanceof Button)){
        console.log('d is not instance of Button')
        return
    }

    return `
        <button
            id="${d.id}"
            class="button ${d.classNames}"
            type= "${d.type}"
        >${d.textContent}</button>
    
    `
}