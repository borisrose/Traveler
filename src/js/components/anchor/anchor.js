export default function (a) {
    `
        <a href="${a.href}">
            ${a.template ? a.template : a.textContent}
        </>
    
    `
}