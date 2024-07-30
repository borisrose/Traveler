class Button {
    constructor(data) {
        this.id = data.id
        this.type = data.type ? data.type : "button"
        this.textContent = data.textContent
        this.classNames = data.classNames ? data.classNames : ""
    }
}

export default Button